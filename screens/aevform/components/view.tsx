import StatusCapsule from "@/components/capsule/Capsule";
import Typography from "@/components/text/Text";
import { Colors } from "@/constants/Colors";
import Images from "@/constants/Images";
import { styles } from "@/screens/aevform/styles";
import { getColorithStyle } from "@/utils/getColors";
import React from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useTaskForm from "../hooks/useTaskForm";
import Constants from "@/constants/Constants";

const viewform = ({ recordId }: any) => {
  const { task, loading } = useTaskForm(recordId);
  if (loading) return <ActivityIndicator size="large" />;
  return (
    <View style={styles.root}>
      <Image style={styles.cover} source={Images.details} alt="details" />
      <View style={styles.main}>
        <View style={styles.action}>
          <StatusCapsule
            bg={Constants.priorityColors?.[task?.priority || ""]?.bg}
            color={Constants.priorityColors?.[task?.priority || ""]?.color}
          >
            {task?.priority}
          </StatusCapsule>
          <Typography variant="medium" style={{ color: Colors.light.tint }}>
            Status :{" "}
            <Text
              style={{
                ...getColorithStyle(task?.status || ""),
                textTransform: "capitalize",
              }}
            >
              {task?.status}
            </Text>
          </Typography>
        </View>
        <View style={styles.contents_area}>
          <Typography variant="medium" style={{ fontWeight: "700" }}>
            {task?.title}
          </Typography>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Typography variant="small">{task?.description}</Typography>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default viewform;
