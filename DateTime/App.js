import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


const Exemplo = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }

  const handleConfirm = (date) => {
    console.warn("A data é: ", date.toLocaleString());
    hideDatePicker();
  }

  const getDataMin = () =>{
    var data = new Date();
    data.setDate(data.getDate()+1);
    return data;
  }

  const getDataMax = () =>{
    var data = new Date();
    data.setDate(data.getDate()+20);
    return data;
  }

  return (
    <View style={styles.container}>
      <Button title="Selecionar data" onPress={showDatePicker} />
      <DateTimePicker 
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={getDataMin()}
        maximumDate={getDataMax()}
      />
    </View>
  )
}
export default Exemplo; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
});
