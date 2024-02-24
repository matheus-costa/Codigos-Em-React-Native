import React, { useState } from "react";
import Modal from "react-native-modal";
import { StyleSheet, Text, View, Button } from "react-native";

function ModalTwo() {
  const [isModalVisible, setModalVisible] = useState(false);

  const switchModalTwo = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Pressione" onPress={switchModalTwo} />

      <Modal
        isVisible={isModalVisible}
        animationIn={"bounceInDown"}
        animationInTiming={300}
        coverScreen={false}
        backgroundColor="black"
      >
        <View>
          <Text> SEXTOU!</Text>
          <Button title="Partiu" onPress={switchModalTwo} />
        </View>
      </Modal>
    </View>
  );
}
export default ModalTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7FFF00",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0000",
    marginTop: 30,
    marginBottom: 30,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 6,
  },
});
