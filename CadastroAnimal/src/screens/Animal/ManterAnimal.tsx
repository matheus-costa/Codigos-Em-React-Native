import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Animal } from '../../model/Animal';
import {AnimalService } from '../../servico/AnimalService';

const ManterAnimal = () => {
  const [formAnimal, setFormAnimal] = useState<Partial<Animal>>({})

  const route = useRoute();
  const { animal } = route.params

  const navigation = useNavigation()

  useEffect(() => {
    buscaAnimal(animal)
  }, [animal])


  const buscaAnimal = (animal: Animal) => {
    setFormAnimal(animal);
  };

  const salvar = async () => {
    if (formAnimal.id) {
      const animal = new Animal(formAnimal)
      console.log(animal)
      const result = await AnimalService.update(animal)
      alert('Registro atualizado!');
      limparFormulario();
    } else {
      const animal = new Animal(formAnimal)
      const result = await AnimalService.create(animal)
      alert('Registro Adicionado!');
      limparFormulario();
    }
  }

  const limparFormulario = () => {
    setFormAnimal({})
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Descrição"
          value={formAnimal.descricao}
          onChangeText={descricao => setFormAnimal({
            ...formAnimal,
            descricao: descricao
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Tom do Pelo"
          value={formAnimal.tomDePelo}
          onChangeText={tomDePelo => setFormAnimal({
            ...formAnimal,
            tomDePelo: tomDePelo
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Raça"
          value={formAnimal.raca}
          onChangeText={raca => setFormAnimal({
            ...formAnimal,
            raca: raca
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Peso"
          value={formAnimal.peso}
          onChangeText={peso => setFormAnimal({
            ...formAnimal,
            peso: peso
          })}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={salvar}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={limparFormulario}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ManterAnimal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})