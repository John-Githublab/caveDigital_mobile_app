import React, { useMemo } from "react";
import { Image, ImageBackground, View } from "react-native";
import { styles } from "../stylesheet/task";
import Typography from "@/components/text/Text";
import Images from "@/constants/Images";

const Statics = () => {
  const status = useMemo(
    () => [
      {
        label: "Pending",
        count: 10,
        background: Images.yellowbg,
      },
      {
        label: "Completed",
        count: 10,
        background: Images.bluebg,
      },
      {
        label: "Cancelled",
        count: 10,
        background: Images.redbg,
      },
    ],
    []
  );

  return (
    <View style={styles.statics_parent}>
      {status?.map((value) => {
        return (
          <View style={[styles.status]} key={value?.label}>
            <Image source={value["background"]} style={styles.status_img} />
            <Typography
              variant="small"
              style={{ color: "white", fontWeight: "600" }}
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

export default Statics;
