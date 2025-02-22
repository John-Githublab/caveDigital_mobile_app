import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 0,
    backgroundColor: Colors.light.background,
  },
  cover: {
    height: 250,
    objectFit: "cover",
  },
  main: {
    padding: 16,
    flex: 1,
    gap: 16,
  },
  contents_area: {
    gap: 4,
    flex: 1,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  create_root: {
    flex: 1,
    padding: 12,
    backgroundColor: Colors.light.background,
    gap: 14,
  },
  description: {
    backgroundColor: "white",
    height: 100,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    paddingVertical: 10,
  },
  buttonmain: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  button: {
    color: "white",
    fontWeight: "700",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
});
