import Typography from "@/components/text/Text";
import { Colors } from "@/constants/Colors";
import { StyleSheet, TextInput, View } from "react-native";

const TextField = ({
  placeholder,
  label,
  type = "default",
  value,
  onChange,
  ...restProps
}) => {
  return (
    <View>
      <View style={style.label}>
        <Typography variant="medium">{label}</Typography>
      </View>
      <TextInput
        placeholder={placeholder}
        keyboardType={type || "default"}
        style={[style.root]}
        value={value}
        onChangeText={onChange}
        {...restProps}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    shadowColor: Colors.light.dark,
    height: 45,
    shadowOffset: {
      width: 12,
      height: 12,
    },

    shadowOpacity: 1.18,
    shadowRadius: 10.59,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  label: {
    gap: 6,
    color: Colors.light.dark,
    marginBottom: 8,
  },
});

export default TextField;
