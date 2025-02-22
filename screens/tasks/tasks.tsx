import Button from "@/components/buttons/Button";
import FloatingButton from "@/components/buttons/FloatingButton";
import DataLoad from "@/components/loader/DataLoad";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import { Context } from "@/provider/Authprovider";
import Statics from "@/screens/tasks/components/Statics";
import { router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Greeting from "./components/Greeting";
import TaskCard from "./components/TaskCard";
import useTask from "./hooks/useTask";
import { styles } from "./stylesheet/task";

const Tasks = () => {
  const { tasks, statics, getTaskDetails, loading, deleteRecord } =
    useTask(true);

  const navigateToEditPage = (id?: string) =>
    router.push(`/(task)/edit?record=${id}`);

  const navigateToCreatePage = () => router.push(`/(task)/create`);

  const navigateToDetails = (id: string) => router.push(`/view?record=${id}`);

  const { handleLogout, userDetails } = React.useContext(Context);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.invite}>
          <Greeting name={userDetails?.first_name} />
          <TouchableOpacity onPress={handleLogout} style={styles.logout__frame}>
            <Image style={styles.logout__icon} source={Images.logout} />
          </TouchableOpacity>
        </View>
        <Statics statics={statics} />
      </View>
      <View style={styles.marginHr}>
        <Typography variant="medium" style={styles.totalTask}>
          Total Tasks{" "}
          <Typography style={styles.count}>
            ( {statics?.total} Tasks )
          </Typography>
        </Typography>
        <ScrollView
          alwaysBounceVertical={true}
          scrollEnabled={true}
          contentContainerStyle={styles.taskContainer}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getTaskDetails} />
          }
        >
          {tasks?.map((task) => (
            <Button
              style={styles.card}
              key={task?._id}
              onClick={() => navigateToDetails(task?._id)}
              activeOpacity={1}
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
            </Button>
          ))}
        </ScrollView>
        {!loading && tasks?.length === 0 && (
          <DataLoad message="No data available" />
        )}
      </View>
      <FloatingButton onPress={navigateToCreatePage}>
        <Image style={styles.createImg} source={Images.add} />
        <Typography style={styles.createText}>Create</Typography>
      </FloatingButton>
    </View>
  );
};

export default Tasks;
