import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import TextField from "@/components/forms/TextField";
import { styles } from "./styles";
import Images from "@/constants/Images";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";
import { TextInput } from "react-native";

const Login = () => {
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
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
            value={"john"}
          />
        </View>
        {errors?.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        {errors?.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        {/* <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity> */}
        <Button
          style={styles.button}
          //   onPress={handleSubmit}
          //   disabled={!isValid}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
