import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Typography from "../text/Text";

interface DropdownFieldProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { label: string; value: string }[];
  style?: ViewStyle;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  value,
  onChange,
  options = [],
  ...restProps
}) => {
  return (
    <View {...restProps}>
      <View style={styles.labelContainer}>
        <Typography variant="medium" style={styles.text}>
          {label}
        </Typography>
      </View>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={value}
          onValueChange={onChange}
          style={styles.picker}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
              style={styles.pickerItem}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: "#F5F9FE",
    overflow: "hidden",
    elevation: 1,
    borderRadius: 10,
  },
  labelContainer: {
    marginBottom: 8,
  },
  picker: {
    color: "black",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "700",
    color: "#323130",
  },
  pickerItem: {
    fontSize: 14,
    color: "#868686",
  },
});

export default DropdownField;
