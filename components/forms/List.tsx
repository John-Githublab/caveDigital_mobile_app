import React from "react";
import { StyleSheet, TextStyle, TouchableOpacity, View } from "react-native";
import Typography from "../text/Text";
import Br from "./Br";

interface ListDetails {
  label: string;
  onPress: () => void;
}

export interface List {
  lists: ListDetails[];
  textStyle?: TextStyle;
  closePopover?: () => void;
}

const List = ({ lists, textStyle, closePopover }: List) => {
  const handlePress = (list: any) => {
    return () => {
      closePopover?.();
      list?.onPress();
    };
  };
  return (
    <View style={styles.root}>
      {lists?.map((list, key) => (
        <TouchableOpacity onPress={handlePress(list)} key={list?.label}>
          <Typography style={[styles.label, textStyle]}>
            {list?.label}
          </Typography>
          {lists?.length - 1 !== key && <Br />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    gap: 10,
  },
  label: {
    paddingTop: 6,
    paddingBottom: 7,
    paddingHorizontal: 20,
    fontWeight: 600,
  },
});

export default List;
