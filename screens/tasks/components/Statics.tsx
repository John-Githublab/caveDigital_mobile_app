import Typography from "@/components/text/Text";
import Images from "@/constants/Images";
import { Statics } from "@/types/Task";
import React, { useMemo } from "react";
import { Image, View } from "react-native";
import { styles } from "../stylesheet/task";

interface Props {
  statics?: Statics;
}

const StaticsUi = ({ statics }: Props) => {
  const status = useMemo(
    () => [
      {
        label: "Pending",
        count: statics?.pending,
        background: Images.yellowbg,
      },
      {
        label: "Completed",
        count: statics?.completed,
        background: Images.bluebg,
      },
      {
        label: "Cancelled",
        count: statics?.cancelled,
        background: Images.redbg,
      },
    ],
    [statics]
  );

  return (
    <View style={styles.statics_parent}>
      {status?.map((value) => {
        return (
          <View style={[styles.status]} key={value?.label}>
            <Image source={value["background"]} style={styles.status_img} />
            <Typography
              variant="small"
              style={{ color: "white", fontWeight: "bold" }}
            >
              {value?.label}
            </Typography>
            <Typography
              variant="large"
              style={{ color: "white", fontWeight: "700" }}
            >
              {value?.count}
            </Typography>
          </View>
        );
      })}
    </View>
  );
};

export default StaticsUi;
