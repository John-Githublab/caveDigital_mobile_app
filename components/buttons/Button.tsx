import { Colors } from "@/constants/Colors";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Button {
  children: React.ReactNode;
  onClick?: () => void;
  style?: any;
  disabled?: boolean;
  loaderColor?: string;
  isLoading?: boolean;
  activeOpacity?: number;
}

const Button = (props: Button) => {
  const {
    children,
    onClick,
    style,
    disabled,
    loaderColor,
    isLoading,
    ...restProps
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.root, style]}
      onPress={onClick}
      {...restProps}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={loaderColor || "white"} />
      ) : null}
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
    width: "auto",
  },
});

export default Button;
