import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

function ModalTest() {
  const [isModalVisible, setModalVisible] = useState(false);

  const switchModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Clique aqui" onPress={switchModal} />
      <Modal visible={isModalVisible}>
        <View style={styles.modalView}>
          <Text> Ola 5 TADS</Text>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0000",
    marginTop: 200,
    marginBottom: 200,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 6,
  },
});
