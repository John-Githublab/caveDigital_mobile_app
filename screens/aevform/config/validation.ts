import { FieldValidation } from "@/types/validation";
import validators from "@/utils/validators";

const validationSchema: Record<string, FieldValidation> = {
  title: {
    required: {
      value: true,
      message: "Title is a required field",
    },
    minChar: {
      value: 2,
      message: "Minimum 1 charecters is required",
    },
    maxChar: {
      value: 20,
      message: "Maximum 20 charecters is only allowed",
    },
  },
  description: {
    required: {
      value: true,
      message: "Description is a required field",
    },
  },
};

export default validationSchema;
