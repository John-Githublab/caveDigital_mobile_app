import StatusCapsule from "@/components/capsule/Capsule";
import Br from "@/components/forms/Br";
import List from "@/components/forms/List";
import Typography from "@/components/text/Text";
import { Colors } from "@/constants/Colors";
import Images from "@/constants/Images";
import { getColorithStyle } from "@/utils/getColors";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Popover from "react-native-popover-view";

interface TaskCardBottom {
  priority?: string;
  status: string;
  children?: any;
}

interface TaskCardTop {
  title: string;
  description: string;
  onPressed?: () => void;
  actions: any;
}

const TaskCard = (props: any) => {
  const { children } = props;

  return <View style={styles.root}>{children}</View>;
};

const BottomCard = (props: TaskCardBottom) => {
  const { priority, status } = props;

  return (
    <View style={[styles.marginVertical, styles.flexRow]}>
      <StatusCapsule>{priority}</StatusCapsule>
      <Typography variant="medium" style={{ color: Colors.light.tint }}>
        Status :{" "}
        <Typography
          style={{
            ...getColorithStyle(status),
            textTransform: "capitalize",
            fontWeight: "700",
          }}
        >
          {status}
        </Typography>
      </Typography>
    </View>
  );
};

const TopCard = (props: TaskCardTop) => {
  const { title, description, actions } = props;
  const [showPopover, setShowPopover] = useState(false);
  const closePopver = () => setShowPopover(false);
  return (
    <>
      <Br />
      <View style={[styles.marginVertical, styles.contents]}>
        <View style={styles.contents_area}>
          <Typography variant="medium" style={{ fontWeight: "700" }}>
            {title}
          </Typography>
          <Typography
            variant="small"
            style={{ color: "#383838", textAlign: "justify" }}
          >
            {description}
          </Typography>
        </View>
        <Popover
          arrowSize={{ width: 0, height: 0 }}
          popoverStyle={styles.popoverStyle}
          isVisible={showPopover}
          onRequestClose={closePopver}
          onCloseComplete={closePopver}
          from={
            <TouchableOpacity onPress={() => setShowPopover(true)}>
              <Image
                style={styles.ellipsis}
                source={Images.ellipsis}
                alt="ellipis"
              />
            </TouchableOpacity>
          }
        >
          <List lists={actions} closePopover={closePopver} />
        </Popover>
      </View>
    </>
  );
};

TaskCard.Details = TopCard;
TaskCard.Status = BottomCard;

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
  popoverStyle: {
    marginTop: -19,
    marginLeft: -33,
  },
  ellipsis: {
    width: 24,
    height: 24,
  },
});

export default TaskCard;
