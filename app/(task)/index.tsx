import { StyleSheet, Text, View } from "react-native";
import Tasks from "@/screens/tasks/tasks";

export default function HomeScreen() {
  return (
    <View style={styles.flex}>
      <Tasks />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
