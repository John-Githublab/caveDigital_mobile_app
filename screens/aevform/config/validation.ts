import { FieldValidation } from "@/types/validation";
import validators from "@/utils/validators";

const validationSchema: Record<string, FieldValidation> = {
  title: {
    required: {
      value: true,
      message: "Title is a required field",
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
