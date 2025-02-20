import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  content: {
    alignSelf: "flex-start",
    gap: 6,
    marginBottom: 37,
  },
  logo: {
    height: 64,
    width: 64,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DADADA",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: "100%",
    color: "black",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  signUp: {
    color: "#000",
  },
  signUpLink: {
    color: "#1E90FF",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
