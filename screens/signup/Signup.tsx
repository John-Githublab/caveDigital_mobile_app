import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import useError from "@/hooks/useError";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, ToastAndroid, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import validationSchema from "./config/signup.config";
import { styles } from "./styles";
import LocalStorage from "@/utils/LocalStorage";
import APIRequest from "@/utils/ApiRequest";
import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import Toast from "react-native-toast-message";
import { toast } from "@/utils/Toast";

interface Form {
  fullName?: string;
  email?: string;
  password?: string;
  first_name?: string;
}

const Signup = () => {
  const [form, setForm] = useState<Form>();
  const { errors, getErrors } = useError(validationSchema);
  const [showpassword, setShowPassword] = useState(false);

  const handleChange = (key: string, value: any, e?: any) => {
    const data = value || e?.target?.value;
    setForm((p: any) => ({ ...p, [key]: data }));
  };

  const handleNavigateTosignin = () => {
    router.push("/login");
  };

  const handleSubmit = async () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    const formCopy = { ...form };
    formCopy["first_name"] = form?.fullName;
    // submit the data
    const response = await APIRequest.request(
      "POST",
      ConfigAPIUrl.register,
      formCopy
    );

    if (!response) return;

    const data: any = response?.data;
    const result = data?.result;
    toast("Successfully created User");
    setForm({});
  };

  return (
    <View style={styles.container}>
      <Image source={Images.react} style={styles.logo} />
      <View style={styles.content}>
        <Typography variant="large">Sign up</Typography>
        <Typography variant="small">
          Create an account with basic details
        </Typography>
      </View>
      <>
        <View style={styles.inputContainer}>
          <AntDesignIcon name="user" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            keyboardType="default"
            value={form?.fullName}
            onChangeText={(e) => handleChange("fullName", e)}
          />
        </View>
        {errors?.fullName && (
          <Text style={styles.errorText}>{errors?.fullName}</Text>
        )}

        <View style={styles.inputContainer}>
          <Icon name="mail-outline" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={form?.email}
            onChangeText={(e) => handleChange("email", e)}
          />
        </View>
        {errors?.email && <Text style={styles.errorText}>{errors?.email}</Text>}
        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={25} style={styles.icon} />
          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={showpassword}
              value={form?.password}
              onChangeText={(e) => handleChange("password", e)}
            />
            <Icon
              onPress={() => setShowPassword(!showpassword)}
              name={!showpassword ? "eye" : "eye-off"}
              size={20}
              style={styles.icon}
            />
          </View>
        </View>
        {errors?.password && (
          <Text style={styles.errorText}>{errors?.password}</Text>
        )}

        <Button style={styles.button} onClick={handleSubmit}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Button>
        <TouchableOpacity onPress={handleNavigateTosignin}>
          <Text style={styles.signUp}>
            Already have an account?{" "}
            <Text style={styles.signUpLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

export default Signup;
