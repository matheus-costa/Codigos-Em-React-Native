import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

import {auth, firestore} from '../firebase';
import { Usuario }  from '../model/Usuario';

const Registro = () => {
      const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({}) //esse aqui é o construtor que vem lá do model
     return(
        <KeyboardAvoidingView>
            <View>  
                <TextInput 
                   placeholder="Nome"
                   value={formUsuario.nome}
                   onChangeText={nome => setFormUsuario({...formUsuario, nome: nome})}//no formulário eu tenho o atributo nome
                                              //que vai receber o valor do VALUE por isso (nome: nome)
                />
                <TextInput
                 placeholder="E-mail"
                 value={formUsuario.email}
                />
                <TextInput 
                 placeholder="Senha"
                 value={formUsuario.senha}
                />
                <TextInput 
                 placeholder="Data de Nascimento"
                 value={formUsuario.datanasc}
                />
            </View>
        </KeyboardAvoidingView>// é a view norma, más o teclado ajusta a tela
     )
}

export default Registro;