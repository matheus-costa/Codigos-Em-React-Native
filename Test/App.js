import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  StyleSheet,
  Button,
  Animated,
  Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const FormScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    senha: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalScale] = useState(new Animated.Value(0));

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date.toDateString());
    hideDatePicker();
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.senha || !selectedDate) {
      Alert.alert("Erro", "Insira todas as informações e selecione uma data.");
    } else {
      setModalVisible(true);
      animateModal();
    }
  };

  const animateModal = () => {
    Animated.timing(modalScale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }) => <Text style={styles.listItem}>{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>informações de Login</Text>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setFormData({ ...formData, senha: text })}
      />
      <Button title="Selecionar Data" onPress={showDatePicker} />
      <Text style={styles.selectedDate}>Data Selecionada: {selectedDate}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Formulário</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ scale: modalScale }] },
            ]}
          >
            <Text style={styles.modalText}>
              Formulário enviado com sucesso!
            </Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#fff",
  },
  selectedDate: {
    marginBottom: 20,
    backgroundColor: "#FF0000",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#FF0000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FormScreen;
