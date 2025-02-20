import { FieldValidation } from "@/types/validation";
import { useState } from "react";

const useError = (schema: Record<string, FieldValidation>) => {
  const [errors, setErrors] = useState<any>({});

  const getErrors = (state: any): boolean => {
    const errorsCopy: any = { ...errors };
    Object.keys(schema)?.forEach((key: string) => {
      const element = schema[key];
      // required field validation checks when any error comes need to return o doesnt go for next checking
      if (element?.required?.value) {
        errorsCopy[key] = state?.[key] ? "" : element?.required?.message;
        if (errorsCopy[key]) return;
      }

      // multiple validator function
      if (element?.validators?.length) {
        element?.validators?.some((value) => {
          const validated = value?.validate(state?.[key]);

          if (validated) {
            errorsCopy[key] = value?.message || validated;
          }
          if (errorsCopy[key]) return;
        });
      }

      // other validation fn goes here
    });

    setErrors({ ...errorsCopy });

    // check any error is found

    return Object?.keys(errorsCopy)?.some((key) => errorsCopy[key]);
  };

  return { errors, getErrors, setErrors };
};

export default useError;
