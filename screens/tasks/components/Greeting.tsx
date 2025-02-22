import Typography from "@/components/text/Text";
import { getGreeting } from "@/utils/Helpers";
import React from "react";
import { View } from "react-native";
import { styles } from "../stylesheet/task";

interface Props {
  name?: string;
}

const Greeting = ({ name }: Props) => {
  return (
    <View>
      <Typography variant="small" style={styles.greeting}>
        {getGreeting()}
      </Typography>
      <Typography variant="large" style={styles.firstNameText}>
        {name}
      </Typography>
    </View>
  );
};

export default Greeting;
