import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ModalApp from '../Modal/ModalApp';

objModal = new ModalApp();


export default function App() {
  
  return(
    <View style={styles.container}>
      <Text>Informe Login</Text>
      <TextInput
        placeholder="Informe o seu Login:"
        onChangeText={(login) => setLogin(login)}
        value={login}
      ></TextInput>

      <Text>Informe Senha</Text>
      <TextInput
        placeholder="Informe a sua senha:"
        onChangeText={(senha) =>
          setSenha(senha)
        }
        value={senha}
      ></TextInput>
      <button onPress="modal.Enviar(login,senha)" ></button>

      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  selectedDate: {
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
