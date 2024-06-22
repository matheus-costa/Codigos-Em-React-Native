import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, 
         TextInput, TouchableOpacity, View } from "react-native";
import { auth, firestore, storage} from "../Firebase/firebase";
import meuestilo from "../meuestilo";
import { Cachorro } from "../model/Cachorro";

const CachorroManter = () => {
    const [formCachorro,setFormCachorro] = useState<Partial<Cachorro>>({})
    const navigation = useNavigation();

    const cachorroRef = firestore.collection('Usuario').doc(auth.currentUser?.uid)
    .collection('Cachorro')

    const cancelar = () => {
        setFormCachorro({})
    }

    const salvar = async() => {
        const cachorroRefComId = cachorroRef.doc();
        const cachorro = new Cachorro(formCachorro);
        cachorro.id = cachorroRefComId.id;

        console.log(auth.currentUser?.uid);

        cachorroRefComId.set(cachorro.toFirestore()).then(() => {
            alert("Cachorro adicionado com sucesso!");
            cancelar();
        })
    }

    return(
        <KeyboardAvoidingView style={meuestilo.container}>
            <View style={meuestilo.inputContainer}>
                <TextInput
                    placeholder="Nome"
                    value={formCachorro.nome}
                    onChangeText={nome => setFormCachorro({ ...formCachorro, nome: nome})}
                    style={meuestilo.input}
                />
                <TextInput
                    placeholder="Sexo"
                    value={formCachorro.sexo}
                    onChangeText={sexo => setFormCachorro({ ...formCachorro, sexo: sexo})}
                    style={meuestilo.input}
                />
                <TextInput
                    placeholder="Data Nascimento"
                    value={formCachorro.datanasc}
                    onChangeText={datanasc => setFormCachorro({ ...formCachorro, datanasc: datanasc})}
                    style={meuestilo.input}
                />
                <TextInput
                    placeholder="Raça"
                    value={formCachorro.raca}
                    onChangeText={raca => setFormCachorro({ ...formCachorro, raca: raca})}
                    style={meuestilo.input}
                />
            </View>

            <View style={meuestilo.buttonContainer}>
                <TouchableOpacity onPress={cancelar} style={meuestilo.button}>
                    <Text style={meuestilo.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={salvar} style={[meuestilo.button, meuestilo.buttonOutline]}>
                    <Text style={meuestilo.buttonOutlineText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )

}

export default CachorroManter;