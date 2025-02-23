import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import useError from "@/hooks/useError";
import useForm from "@/hooks/useForm";
import { styles } from "@/screens/forgotpassword/stylesheet/styles";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import validationSchema from "./config/Validation";
import useForgotPassword from "./hooks/useForgotPassword";

interface ForgotForm {
  email: string;
  triggeredMail: boolean;
  otp: any;
  showPassword?: boolean;
  password?: string;
}

const Forgotpassword = () => {
  const { form, setForm, handleChange } = useForm<ForgotForm>({
    email: "",
    triggeredMail: false,
    otp: "",
  });
  const { errors, getErrors } = useError(validationSchema);
  const { loading, handleSendEmail, handleSubmitOtp, handleChangePassword } =
    useForgotPassword();
  const [showpassword, setShowPassword] = useState(true);

  const handleTriggerMail = async () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    // validations are correct
    const isTriggered = await handleSendEmail(form?.email);

    if (!isTriggered) return;
    setForm((p: ForgotForm) => ({
      ...p,
      triggeredMail: true,
    }));
  };

  const verifyOtp = async () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    const isMatching = await handleSubmitOtp(form?.email, form?.otp);
    if (!isMatching) return;
    setForm((p: ForgotForm) => ({
      ...p,
      showPassword: true,
      triggeredMail: false,
    }));
  };

  const submitPassword = async () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    handleChangePassword(form?.password || "");
  };

  const getMethod = () =>
    form?.showPassword
      ? submitPassword
      : form?.triggeredMail
      ? verifyOtp
      : handleTriggerMail;

  const getText = () =>
    form?.showPassword
      ? "Change Password"
      : form?.triggeredMail
      ? "Submit"
      : "Generate Otp";

  return (
    <View style={styles.container}>
      <Image source={Images.react} style={styles.logo} />
      <View style={styles.content}>
        <Typography variant="large">Forgot Password</Typography>
        <Typography variant="small">Please enter your details</Typography>
      </View>
      <>
        {!form?.showPassword ? (
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
            {errors?.email && (
              <Text style={styles.errorText}>{errors?.email}</Text>
            )}

            {form?.triggeredMail ? (
              <View style={styles.inputContainer}>
                <Icon
                  name="lock-closed-outline"
                  size={25}
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="OTP"
                  keyboardType="visible-password"
                  value={form?.otp}
                  onChangeText={handleChange("otp")}
                />
              </View>
            ) : null}
          </>
        ) : null}

        {form?.showPassword ? (
          <>
            <View style={styles.inputContainer}>
              <Icon name="lock-closed-outline" size={25} style={styles.icon} />
              <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={showpassword}
                  value={form?.password}
                  onChangeText={handleChange("password")}
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
          </>
        ) : null}

        <Button
          isLoading={loading}
          style={styles.button}
          onClick={getMethod()}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{getText()}</Text>
        </Button>
      </>
    </View>
  );
};

export default Forgotpassword;
