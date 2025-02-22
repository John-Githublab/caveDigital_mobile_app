import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import Typography from "../text/Text";

const TopHeader = (props: any) => {
  return (
    <View style={[styles.root,props?.style]}>
      <Ionicons
        onPress={props.navigation?.goBack}
        size={20}
        name="chevron-back"
        color={props?.iconColor || "white"}
      />
      <Typography variant="medium" style={styles.backtext}>
        {props?.options?.headerTitle}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.light.primary,
    padding: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  backtext: {
    color: "white",
    fontWeight: 700,
  },
});

export default TopHeader;
