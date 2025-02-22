import FloatingButton from "@/components/buttons/FloatingButton";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import Statics from "@/screens/tasks/components/Statics";
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
import { Context } from "@/provider/Authprovider";
import { getGreeting } from "@/utils/Helpers";
import DataLoad from "@/components/loader/DataLoad";
import Button from "@/components/buttons/Button";

const Tasks = () => {
  const { tasks, statics, getTaskDetails, loading, deleteRecord } =
    useTask(true);

  const navigateToEditPage = (id?: string) =>
    router.push(`/(task)/create&edit?record=${id}`);

  const navigateToCreatePage = () => router.push(`/(task)/create&edit`);

  const navigateToDetails = (id: string) => router.push(`/view?record=${id}`);

  const { handleLogout, userDetails } = React.useContext(Context);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.invite}>
          <View>
            <Typography variant="small" style={{ color: "white" }}>
              {getGreeting()}
            </Typography>
            <Typography
              variant="large"
              style={{ color: "white", marginTop: 4 }}
            >
              {userDetails?.first_name}
            </Typography>
          </View>
          <TouchableOpacity onPress={handleLogout} style={styles.logout__frame}>
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
          style={styles.taskContainer}
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
          <DataLoad message="Create some task " />
        )}
      </View>
      <FloatingButton onPress={navigateToCreatePage}>
        <Image style={{ width: 24, height: 24 }} source={Images.add} />
        <Typography style={{ color: "white", fontWeight: 700 }}>
          Create
        </Typography>
      </FloatingButton>
    </View>
  );
};

export default Tasks;
