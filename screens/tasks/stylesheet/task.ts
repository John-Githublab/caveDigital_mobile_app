import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fafafb",
    height: "auto",
    flex: 1,
  },
  container: {
    backgroundColor: Colors.light.primary,
    height: 170,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "auto",
    padding: 16,
  },
  invite: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logout__frame: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 4,
  },
  logout__icon: {
    width: 24,
    height: 24,
  },
  statics_parent: {
    backgroundColor: "white",
    // height: 150,
    elevation: 2,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    gap: 9,
  },
  status: {
    height: 90,
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    padding: 8,
    position: "relative",
    overflow: "hidden",
    gap: 4,
  },
  status_img: {
    height: 90,
    flex: 1,
    position: "absolute",
    // objectFit: "cover",
    borderRadius: 8,
    // width: "auto",
  },
  marginHr: {
    marginHorizontal: 22,
  },
  taskContainer: {
    height: "100%",
    gap: 14,
  },
  card: {
    backgroundColor: Colors.light.background,
    width: "100%",
    paddingHorizontal: 6,
    paddingVertical: 0,
  },
});
