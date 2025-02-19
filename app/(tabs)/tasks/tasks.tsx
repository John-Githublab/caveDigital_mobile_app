import Statics from "@/app/(tabs)/tasks/components/Statics";
import FloatingButton from "@/components/buttons/FloatingButton";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import { router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import TaskCard from "./components/TaskCard";
import { styles } from "./stylesheet/task";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const Tasks = () => {
  const navigateToCratePage = () => {
    router.push("/aevform/components/createandedit");
  };

  const navigateToDetails = (id?: number) => {
    router.push("/(tabs)/aevform/components/view");
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.invite}>
          <View>
            <Typography variant="small" style={{ color: "white" }}>
              Good Morning
            </Typography>
            <Typography
              variant="large"
              style={{ color: "white", marginTop: 4 }}
            >
              Omar Faruukh
            </Typography>
          </View>
          <TouchableOpacity style={styles.logout__frame}>
            <Image style={styles.logout__icon} source={Images.logout} />
          </TouchableOpacity>
        </View>
        <Statics />
      </View>
      <View style={styles.marginHr}>
        <Typography
          variant="medium"
          style={{ marginTop: 42, marginBottom: 12 }}
        >
          Total Tasks{" "}
          <Typography style={{ color: "#868686" }}>( 10 Tasks )</Typography>
        </Typography>
        <TouchableWithoutFeedback onPress={() => navigateToDetails()}>
          <TaskCard
            priority="High"
            title="Maintenance of Sewage plant"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Read more.."
            status="Pending"
            onPressed={navigateToCratePage}
          />
        </TouchableWithoutFeedback>
      </View>
      <FloatingButton onPress={navigateToCratePage}>
        <Image style={{ width: 24, height: 24 }} source={Images.add} />
        <Typography style={{ color: "white", fontWeight: 700 }}>
          Create
        </Typography>
      </FloatingButton>
    </View>
  );
};

export default Tasks;
