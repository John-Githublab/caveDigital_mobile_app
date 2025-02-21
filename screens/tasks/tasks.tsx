import FloatingButton from "@/components/buttons/FloatingButton";
import Br from "@/components/forms/Br";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import Statics from "@/screens/tasks/components/Statics";
import { router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import TaskCard from "./components/TaskCard";
import useTask from "./hooks/useTask";
import { styles } from "./stylesheet/task";

const Tasks = () => {
  const { tasks } = useTask(true);

  const navigateToCratePage = () => {
    router.push("/(task)/create&edit");
  };

  const navigateToDetails = (id: string) => {
    router.push(`/view?record=${id}`);
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
        <View>
          {tasks?.map((task) => (
            <TaskCard key={task?._id}>
              <TouchableWithoutFeedback
                onPress={() => navigateToDetails(task?._id)}
              >
                <TaskCard.Status
                  priority={task?.priority}
                  status={task?.status}
                />
              </TouchableWithoutFeedback>
              
              <TaskCard.Details
                title={task?.title}
                description={task?.description}
              />
            </TaskCard>
          ))}
        </View>
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
