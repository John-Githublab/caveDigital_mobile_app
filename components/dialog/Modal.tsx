import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { Text } from "react-native";
import { Modal, StyleSheet, View } from "react-native";
import Typography from "../text/Text";

interface Dialog {
  visible: boolean;
  hideModal?: () => void;
  children?: ReactNode;
  title: string;
}

const Dialog = ({ visible, hideModal, children, title }: Dialog) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={hideModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.mainArea}>
          <View style={styles.header}>
            <Typography variant="medium" style={styles.headerText}>
              {title}
            </Typography>
          </View>
          <View style={styles.modalView}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    width:"90%"
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  mainArea: {
    minWidth: "80%",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  header: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Dialog;
