import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const Exemplo = () => {
  //quando eu abro a aplicação não aparece o calendário, ele só se ativa após o clique do botão
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () =>{
    setDatePickerVisibility(!isDatePickerVisible);
  }

  const handleConfirm = (date) => {
    console.warn("A Data é: ", date.toLocaleString());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Button title="selecionar data" onPress={showDatePicker} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="datetime" //posso alterar entre data e hora
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        //cancelTextIOS="Da-lhe" // no android posso personalizar
        //confirmTextIOS="botele"
      />
    </View>
  );
};
export default Exemplo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
