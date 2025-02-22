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
      <Typography variant="small" style={styles.text}>
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
    color: "#E96161",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default StatusCapsule;
