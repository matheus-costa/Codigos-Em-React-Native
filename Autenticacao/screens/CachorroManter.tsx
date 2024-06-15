import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, 
         TextInput, Text, TouchableOpacity, View } from "react-native";

import {auth, firestore} from '../Firebase/firebase';
import meuestilo from "../meuestilo";
import { Cachorro } from "../model/Cachorro";

const ManterCachorro = () => {
    const [formCachorro, setFormCachorro] = 
    useState<Partial<Cachorro>>({})

    const navigation = useNavigation();

    const refCachorro=firestore.collection("Usuario").doc(auth.currentUser?.uid)
    .collection("Cachorro")

    const cancelar = () =>{
        setFormCachorro({})
    }

    const salvar = () => {
                        
    }

    return(
      <KeyboardAvoidingView style ={StyleSheet.container}>
        <View style={StyleSheet.inputContainer}>
          <TextInput
             placeholder="nome"
             value={formCachorro.nome}
             onChangeText={nome => setFormCachorro({...formCachorro, nome:nome})}
             style={meuestilo.input}
          />
          <TextInput
             placeholder="sexo"
             value={formCachorro.sexo}
             onChangeText={sexo => setFormCachorro({...formCachorro, sexo:sexo})}
             style={meuestilo.input}
          />
          <TextInput
             placeholder="data de nascimento"
             value={formCachorro.datanasc}
             onChangeText={datanasc => setFormCachorro({...formCachorro, datanasc:datanasc})}
             style={meuestilo.input}
          />
          <TextInput
             placeholder="raça"
             value={formCachorro.raca}
             onChangeText={raca => setFormCachorro({...formCachorro, raca:raca})}
             style={meuestilo.input}
          />          
        </View>
        <View style={meuestilo.buttonContainer}>
              <TouchableOpacity onPress={salvar} style={meuestilo.buttonContainer}>
               <Text style={meuestilo.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelar} style={meuestilo.buttonContainer}>
               <Text style={meuestilo.buttonText}>cancelar</Text>
              </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
}
export default ManterCachorro;