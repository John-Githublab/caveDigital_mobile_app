import Dialog from "@/components/dialog/Modal";
import Typography from "@/components/text/Text";
import { Content } from "@/types/Modal";
import React, { createContext, useContext, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

const ModalContext = createContext<any>(null);

export const ConfirmationProvider = ({ children }: any) => {
  const [modalContent, setModalContent] = useState<Content | null>(null);
  const [visible, setVisible] = useState(false);

  const showModal = (content: Content) => {
    setModalContent(content);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setModalContent(null);
  };

  const handleConfirm = () => {
    modalContent?.handleConfirm();
    hideModal();
  };

  return (
    <ModalContext.Provider value={[showModal, hideModal, visible]}>
      {children}
      <Dialog
        visible={visible}
        title={modalContent?.title || ""}
        hideModal={hideModal}
      >
        <Typography variant="medium" style={styles.headerText}>
          {modalContent?.description}
        </Typography>
        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={hideModal}>
            <Typography variant="medium" style={styles.actionNo}>
              No
            </Typography>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleConfirm}>
            <Typography variant="medium" style={styles.actionYes}>
              Yes
            </Typography>
          </TouchableWithoutFeedback>
        </View>
      </Dialog>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    marginTop: 20,
  },
  actionYes: {
    fontWeight: "bold",
    color: "#009C3C",
  },
  actionNo: {
    color: "#FF0000",
    fontWeight: "bold",
  },
});
