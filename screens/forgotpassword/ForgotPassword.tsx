import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import useForm from "@/hooks/useForm";
import { styles } from "@/screens/forgotpassword/stylesheet/styles";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import validationSchema from "./config/Validation";
import useError from "@/hooks/useError";
import useForgotPassword from "./hooks/useForgotPassword";

interface ForgotForm {
  email: string;
  triggeredMail: boolean;
  otp?: string;
}

const Forgotpassword = () => {
  const { form, setForm, handleChange } = useForm<ForgotForm>({
    email: "",
    triggeredMail: false,
  });
  const { errors, getErrors } = useError(validationSchema);
  const { loading, handleSendEmail } = useForgotPassword();

  const handleTriggerMail = async () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    // validations are correct
    const isTriggered = handleSendEmail(form?.email);
    if (!isTriggered) return;
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
        {errors?.email && <Text style={styles.errorText}>{errors?.email}</Text>}

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

        <Button
          isLoading={loading}
          style={styles.button}
          onClick={handleTriggerMail}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {form?.triggeredMail ? "Submit" : "Generate Otp"}
          </Text>
        </Button>
      </>
    </View>
  );
};

export default Forgotpassword;
