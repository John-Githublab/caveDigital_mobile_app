import Button from "@/components/buttons/Button";
import DropdownField from "@/components/forms/Dropdown";
import TextField from "@/components/forms/TextField";
import Typography from "@/components/text/Text";
import Constants from "@/constants/Constants";
import useError from "@/hooks/useError";
import useForm from "@/hooks/useForm";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import validationSchema from "../config/validation";
import useTaskForm from "../hooks/useTaskForm";
import { styles } from "../styles";

interface Form {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
}

const Create = function ({ recordId, isEdit }: any) {
  const { form, handleChange, setForm } = useForm<Form>({
    status: "pending",
    priority: "low",
  });
  const { errors, getErrors } = useError(validationSchema);
  const { task, loading, sendToServer } = useTaskForm(isEdit ? recordId : null);

  useEffect(() => {
    // once gets the data if the record is found sets to the state
    if (!task) return;
    setForm({ ...task });
  }, [JSON.stringify(task)]);

  const handleSubmit = () => {
    const hasError: boolean = getErrors(form);
    if (hasError) return;
    // submit the data

    sendToServer(isEdit ? recordId : null, form);
  };

  if (loading) return <ActivityIndicator size="large" />;

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
          <Typography style={styles.button}>
            {isEdit ? "Edit" : "Save"} Details
          </Typography>
        </Button>
      </View>
    </View>
  );
};

export default Create;
