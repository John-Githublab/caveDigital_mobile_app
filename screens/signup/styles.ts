import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
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
    alignSelf: "center",
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
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DADADA",
  },
  password: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: "100%",
    color: "black",
  },
  forgotmain: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    width: "100%",
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
    fontWeight: 700,
  },
  signUp: {
    color: "#000",
    alignSelf: "center",
  },
  signUpLink: {
    color: "#1E90FF",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
});
