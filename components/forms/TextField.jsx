import Typography from "@/components/text/Text";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextField = ({
  placeholder,
  label,
  type = "default",
  value,
  onChange,
  required,
  ...restProps
}) => {
  return (
    <View>
      <View style={style.label}>
        <Typography style={style.text} variant="medium">
          {label} {required ? <Text style={style.required}>*</Text> : null}
        </Typography>
      </View>
      <View style={style.textContainer}>
        <TextInput
          placeholder={placeholder}
          keyboardType={type || "default"}
          style={[style.root]}
          value={value}
          onChangeText={onChange}
          {...restProps}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    height: 48,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  textContainer: {
    elevation: 1,
    borderRadius: 10,
    backgroundColor: "#F5F9FE",
    overflow: "hidden",
  },
  label: {
    gap: 6,
    color: Colors.light.dark,
    marginBottom: 8,
  },
  text: {
    fontWeight: "700",
    color: "#323130",
  },
  required: {
    color: "#FF0000",
  },
});

export default TextField;
