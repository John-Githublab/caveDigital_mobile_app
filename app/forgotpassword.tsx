import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import useForm from "@/hooks/useForm";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface ForgotForm {
  email: string;
  triggeredMail: boolean;
  otp?: string;
}

const forgotpassword = () => {
  const { form, setForm, handleChange } = useForm<ForgotForm>({
    email: "",
    triggeredMail: false,
  });

  const handleTriggerMail = () => {
    setForm((p: ForgotForm) => ({
      ...p,
      triggeredMail: true,
    }));
  };

  return (
    <View style={styles.container}>
      <Image source={Images.react} style={styles.logo} />
      <View style={styles.content}>
        <Typography variant="large">Forgot Password</Typography>
        <Typography variant="small">Please enter your details</Typography>
      </View>
      <>
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={form?.email}
            onChangeText={handleChange("email")}
          />
        </View>
        {form?.triggeredMail ? (
          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="OTP"
              keyboardType="visible-password"
              value={form?.otp}
              onChangeText={handleChange("otp")}
            />
          </View>
        ) : null}

        <Button style={styles.button} onClick={handleTriggerMail}>
          <Text style={styles.buttonText}>
            {form?.triggeredMail ? "Submit" : "Generate Otp"}
          </Text>
        </Button>
      </>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  content: {
    alignSelf: "flex-start",
    gap: 6,
    marginBottom: 37,
  },
  logo: {
    height: 64,
    width: 64,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DADADA",
  },
  password: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: "100%",
    color: "black",
    width: "92%",
  },
  forgotmain: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    width: "100%",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  signUp: {
    color: "#000",
    alignSelf: "center",
  },
  signUpLink: {
    color: "#1E90FF",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
});

export default forgotpassword;
