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
        <Typography
          variant="medium"
          style={{ fontWeight: "normal", color: "black" }}
        >
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
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    borderRadius: 10,
    backgroundColor: "#F5F9FE",
  },
  labelContainer: {
    marginBottom: 8,
  },
  picker: {
    color: "black",
    backgroundColor: "white",
  },
});

export default DropdownField;
