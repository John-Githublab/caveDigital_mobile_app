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
};

export default validationSchema;
