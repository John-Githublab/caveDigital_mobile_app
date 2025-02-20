import { useState } from "react";

const useForm = <T>(defaultValue?: T) => {
  const [form, setForm] = useState<T>(JSON.parse(JSON.stringify(defaultValue)));

  const handleChange = (key: string) => {
    return (value: any, e?: any) => {
      const data = value || e?.target?.value;
      setForm((p: any) => ({ ...p, [key]: data }));
    };
  };
  return { form, setForm, handleChange };
};

export default useForm;
