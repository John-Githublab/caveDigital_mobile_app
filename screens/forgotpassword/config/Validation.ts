import { FieldValidation } from "@/types/validation";
import validators from "@/utils/validators";

const validationSchema: Record<string, FieldValidation> = {
  email: {
    required: {
      value: true,
      message: "Email is a required field",
    },
    validators: [
      {
        validate: validators?.validateEmail,
      },
    ],
  },
  otp: {
    validateOnDataFound: true,
    required: {
      value: true,
      message: "OTP is a required field",
    },
    minChar: {
      value: 6,
      message: "Minimum 6 charecters is required! ",
    },
  },
  password: {
    validateOnDataFound: true,
    required: {
      value: true,
      message: "Password is a required field",
    },
    validators: [
      {
        validate: validators?.getPasswordError,
      },
    ],
  },
};

export default validationSchema;
