import { FieldValidation } from "@/types/validation";
import validators from "@/utils/validators";

const validationSchema: Record<string, FieldValidation> = {
  fullName: {
    required: {
      value: true,
      message: "Full name is a required field",
    },
  },
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
  password: {
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
