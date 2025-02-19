import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Button {
  children: React.ReactNode;
  onClick?: () => void;
  style?: any;
  disabled?: boolean;
}

const Button = (props: Button) => {
  const { children, onClick, style, disabled, ...restProps } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.root, style]}
      onPress={onClick}
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: Colors.light.primary,
  },
});

export default Button;
