import Button from "@/components/buttons/Button";
import DropdownField from "@/components/forms/Dropdown";
import TextField from "@/components/forms/TextField";
import Typography from "@/components/text/Text";
import Constants from "@/constants/Constants";
import useForm from "@/hooks/useForm";
import { Text, View } from "react-native";
import { styles } from "../styles";
import useError from "@/hooks/useError";
import validationSchema from "../config/validation";

interface Form {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
}

const Create = function () {
  const { form, handleChange } = useForm<Form>({
    status: "pending",
    priority: "low",
  });
  const { errors, getErrors } = useError(validationSchema);
  const handleSubmit = () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    // submit the data
  };

  return (
    <View style={styles.create_root}>
      <TextField
        label={"Title"}
        value={form?.title}
        placeholder={"Enter Title"}
        onChange={handleChange("title")}
      />
      {errors?.title && <Text style={styles.errorText}>{errors?.title}</Text>}

      <TextField
        label={"Description"}
        placeholder={"Please enter description"}
        value={form?.description}
        onChange={handleChange("description")}
        style={styles.description}
      />
      {errors?.description && (
        <Text style={styles.errorText}>{errors?.description}</Text>
      )}

      <DropdownField
        options={Constants.statuses}
        label="Status"
        value={form?.status}
        onChange={handleChange("status")}
      />
      <DropdownField
        options={Constants.priority}
        label="Priority"
        value={form?.priority}
        onChange={handleChange("priority")}
      />
      <View style={styles.buttonmain}>
        <Button onClick={handleSubmit}>
          <Typography style={styles.button}>Save Details</Typography>
        </Button>
      </View>
    </View>
  );
};

export default Create;
