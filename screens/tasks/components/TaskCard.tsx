import StatusCapsule from "@/components/capsule/Capsule";
import Br from "@/components/forms/Br";
import Typography from "@/components/text/Text";
import { Colors } from "@/constants/Colors";
import Images from "@/constants/Images";
import { getColorithStyle } from "@/utils/getColors";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskCard {
  priority?: string;
  status: string;
  title: string;
  description: string;
  onPressed: () => void;
}

const TaskCard = (props: TaskCard) => {
  const { priority, status, title, description } = props;

  return (
    <View style={styles.root}>
      <View style={[styles.marginVertical, styles.flexRow]}>
        <StatusCapsule>{priority}</StatusCapsule>
        <Typography variant="medium" style={{ color: Colors.light.tint }}>
          Status : <Text style={getColorithStyle(status)}>{status}</Text>
        </Typography>
      </View>
      <Br />
      <View style={[styles.marginVertical, styles.contents]}>
        <View style={styles.contents_area}>
          <Typography variant="medium" style={{ fontWeight: "700" }}>
            {title}
          </Typography>
          <Typography variant="small" style={{ color: "#383838" }}>
            {description}
          </Typography>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.ellipsis}
            source={Images.ellipsis}
            alt="ellipis"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  marginVertical: {
    padding: 12,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contents: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contents_area: {
    gap: 4,
    width: "95%",
  },
  ellipsis: {
    width: 24,
    height: 24,
  },
});

export default TaskCard;
