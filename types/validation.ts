type ValidationRule = {
  value: boolean | number;
  message: string;
};

type Validator = {
  validate: any;
  message?: string;
};

export type FieldValidation = {
  required: ValidationRule;
  minChar?: ValidationRule;
  maxChar?: ValidationRule;
  validators?: Validator[];
};
