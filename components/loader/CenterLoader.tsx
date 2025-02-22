import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const CenterLoader = (props: React.PropsWithChildren) => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CenterLoader;
