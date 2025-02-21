import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import useError from "@/hooks/useError";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import validationSchema from "./config/Login.config";
import { styles } from "./styles";
import LocalStorage from "@/utils/LocalStorage";
import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import APIRequest from "@/utils/ApiRequest";

interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const [form, setForm] = useState<Form>();
  const { errors, getErrors } = useError(validationSchema);
  const [showpassword, setShowPassword] = useState(true);

  const handleChange = (key: string, value: any, e?: any) => {
    const data = value || e?.target?.value;
    setForm((p: any) => ({ ...p, [key]: data }));
  };

  const handleNavigateTosignup = () => {
    router.push("/signup");
  };

  const handleNavigateToFogotPassword = () => {
    router.push("/signup");
  };

  const redirectUser = () => router.push("/(task)");

  const handleSubmit = async () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    // submit the data
    const response = await APIRequest.request("POST", ConfigAPIUrl.login, form);

    if (!response) return;

    const data: any = response?.data;
    const result = data?.result;
    LocalStorage.storeData("token", data?.token);
    LocalStorage.storeData("user", result);
    redirectUser();
  };

  return (
    <View style={styles.container}>
      <Image source={Images.react} style={styles.logo} />
      <View style={styles.content}>
        <Typography variant="large">Login</Typography>
        <Typography variant="small">Please login to your account</Typography>
      </View>
      <>
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
        <TouchableOpacity
          onPress={handleNavigateToFogotPassword}
          style={styles.forgotmain}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button style={styles.button} onClick={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <TouchableOpacity onPress={handleNavigateTosignup}>
          <Text style={styles.signUp}>
            Don't have an account?{" "}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

export default Login;
