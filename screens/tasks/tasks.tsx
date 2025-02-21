import FloatingButton from "@/components/buttons/FloatingButton";
import Typography from "@/components/text/Text";
import ConfigAPIUrl from "@/constants/ConfigApiUrl";
import Images from "@/constants/Images";
import Statics from "@/screens/tasks/components/Statics";
import APIRequest from "@/utils/ApiRequest";
import { toast } from "@/utils/Toast";
import { router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import TaskCard from "./components/TaskCard";
import useTask from "./hooks/useTask";
import { styles } from "./stylesheet/task";

const Tasks = () => {
  const { tasks, statics, getTaskDetails, loading } = useTask(true);

  const navigateToEditPage = (id?: string) =>
    router.push(`/(task)/create&edit?record=${id}`);

  const navigateToCratePage = () => router.push(`/(task)/create&edit`);

  const navigateToDetails = (id: string) => router.push(`/view?record=${id}`);

  const deleteRecord = async (record: string) => {
    const response = await APIRequest.request(
      "DELETE",
      ConfigAPIUrl.tasks + "/" + record,
      ""
    );
    toast(response?.data?.message || "");
    getTaskDetails();
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
        <Statics statics={statics} />
      </View>
      <View style={styles.marginHr}>
        <Typography
          variant="medium"
          style={{ marginTop: 42, marginBottom: 12 }}
        >
          Total Tasks{" "}
          <Typography style={{ color: "#868686" }}>
            ( {statics?.total} Tasks )
          </Typography>
        </Typography>
        <ScrollView
          style={{ height: "100%" }}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getTaskDetails} />
          }
        >
          {tasks?.map((task) => (
            <TouchableWithoutFeedback
              key={task?._id}
              // onPress={() => navigateToDetails(task?._id)}
            >
              <TaskCard>
                <TaskCard.Status
                  priority={task?.priority}
                  status={task?.status}
                />

                <TaskCard.Details
                  title={task?.title}
                  description={task?.description}
                  actions={[
                    {
                      label: "Edit",
                      onPress: () => navigateToEditPage(task?._id),
                    },
                    {
                      label: "Delete",
                      onPress: () => deleteRecord(task?._id),
                    },
                  ]}
                />
              </TaskCard>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
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
