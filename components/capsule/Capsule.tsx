import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Typography from "../text/Text";

interface StatusCapsule {
  color?: string;
  children: React.ReactNode;
}

const StatusCapsule = ({ children, color = "#E961611A" }: StatusCapsule) => {
  return (
    <View style={[styles.capsule, { backgroundColor: color }]}>
      <Typography variant="small" style={{ color: "#E96161" }}>
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  capsule: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default StatusCapsule;
