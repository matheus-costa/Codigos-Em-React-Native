import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Produtos } from '../../model/Produtos';
import { ProdutosService } from '../../servico/ProdutosService';

const ManterProdutos = () => {
  const [formProdutos, setFormProdutos] = useState<Partial<Produtos>>({})

  const route = useRoute();
  const { produtos } = route.params

  const navigation = useNavigation()

  useEffect(() => {
    buscaProdutos(produtos)
  }, [produtos])


  const buscaProdutos = (produtos: Produtos) => {
    setFormProdutos(produtos);
  };

  const salvar = async () => {
    if (formProdutos.id) {
      const produtos = new Produtos(formProdutos)
      console.log(produtos)
      const result = await ProdutosService.update(produtos)
      alert('Registro atualizado!');
      limparFormulario();
    } else {
      const produtos = new Produtos(formProdutos)
      const result = await ProdutosService.create(produtos)
      alert('Registro Adicionado!');
      limparFormulario();
    }
  }

  const limparFormulario = () => {
    setFormProdutos({})
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Descrição"
          value={formProdutos.descricao}
          onChangeText={descricao => setFormProdutos({
            ...formProdutos,
            descricao: descricao
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Cor do produto"
          value={formProdutos.cor}
          onChangeText={cor => setFormProdutos({
            ...formProdutos,
            cor: cor
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Marca"
          value={formProdutos.marca}
          onChangeText={marca => setFormProdutos({
            ...formProdutos,
            marca: marca
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Valor"
          value={formProdutos.valor}
          onChangeText={valor => setFormProdutos({
            ...formProdutos,
            valor: valor               
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

export default ManterProdutos

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