import DropdownField from "@/components/forms/Dropdown";
import Constants from "@/constants/Constants";
import { Text, View } from "react-native";
import { styles } from "../styles";
import TextField from "@/components/forms/TextField";
import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Text";

const Create = function () {
  return (
    <View style={styles.create_root}>
      <TextField
        label={"Title"}
        value={""}
        placeholder={"Enter Title"}
        onChange={() => {}}
      />
      <TextField
        label={"Description"}
        placeholder={""}
        value={""}
        onChange={() => {}}
        style={styles.description}
      />
      <DropdownField
        options={Constants.statuses}
        label="Status"
        value="pending"
      />
      <View style={styles.buttonmain}>
        <Button>
          <Typography style={styles.button}>Save Details</Typography>
        </Button>
      </View>
    </View>
  );
};

export default Create;
