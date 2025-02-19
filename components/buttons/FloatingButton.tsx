import { Colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface FloatingButtonProps {
  onPress?: () => void;
  children: any;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 30,
    bottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 15,
    backgroundColor: Colors.light.primary,
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // Android shadow
  },
});

export default FloatingButton;
