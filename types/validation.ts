type ValidationRule = {
  value: boolean | number;
  message: string;
};

type Validator = {
  validate: any;
  message?: string;
};

export type FieldValidation = {
  validateOnDataFound?: boolean; // only validates when valid data is found in state
  required: ValidationRule;
  minChar?: ValidationRule;
  maxChar?: ValidationRule;
  validators?: Validator[];
};
