import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "@/app/(tabs)/aevform/styles";
import Images from "@/constants/Images";
import Typography from "@/components/text/Text";
import { ScrollView } from "react-native-gesture-handler";
import StatusCapsule from "@/components/capsule/Capsule";
import DropdownField from "@/components/forms/Dropdown";
import Constants from "@/constants/Constants";
import { getColorithStyle } from "@/utils/getColors";
import { Colors } from "@/constants/Colors";

const viewform = () => {
  let title = "Maintenance of Sewage plant";
  let description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
  const status = "Pending";
  return (
    <View style={styles.root}>
      <Image style={styles.cover} source={Images.details} alt="details" />
      <View style={styles.main}>
        <View style={styles.action}>
          <StatusCapsule>High</StatusCapsule>
          <Typography variant="medium" style={{ color: Colors.light.tint }}>
            Status : <Text style={getColorithStyle(status)}>{status}</Text>
          </Typography>
          {/* <DropdownField
            options={Constants.statuses}
            label="Status"
            value="pending"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          /> */}
        </View>
        <View style={styles.contents_area}>
          <Typography variant="medium" style={{ fontWeight: "700" }}>
            {title}
          </Typography>
          <ScrollView>
            <Typography variant="small" style={{ color: "#383838" }}>
              {description}
            </Typography>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default viewform;
