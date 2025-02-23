import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {
  variant?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export default function Typography({
  variant = "medium",
  children,
  style,
  ...props
}: TypographyProps) {
  const stylesValue = styles[variant];
  return (
    <Text {...props} style={[stylesValue, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    fontWeight: "400" as const,
    lineHeight: 18,
    fontFamily: "MulishRegular",
  },
  medium: {
    fontSize: 16,
    fontWeight: "500" as const,
    lineHeight: 22,
    fontFamily: "MulishMedium",
  },
  large: {
    fontSize: 24,
    fontWeight: "700" as const,
    lineHeight: 27,
    fontFamily: "Mulish",
  },
});
