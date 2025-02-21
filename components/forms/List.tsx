import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Typography from "../text/Text";

interface ListDetails {
  label: string;
  onPress: () => void;
}

export interface List {
  lists: ListDetails[];
  textStyle?: TextStyle;
}

const List = ({ lists, textStyle }: List) => {
  return (
    <View style={styles.root}>
      {lists?.map((list) => (
        <TouchableOpacity onPress={list?.onPress} key={list?.label}>
          <Typography style={[styles.label, textStyle]}>
            {list?.label}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    paddingRight: 20,
    paddingVertical: 10,
    paddingLeft: 10,
    gap: 10,
  },
  label: {
    fontWeight: 600,
  },
});

export default List;
