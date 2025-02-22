import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Images from "@/constants/Images";
import Typography from "../text/Text";

const DataLoad = ({ message }: any) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={Images.noDataFound} />
      <Typography>{message || "No data found"}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default DataLoad;
