import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, 
         TextInput, TouchableOpacity, View, Alert, 
         Pressable} from "react-native";
import { auth, firestore, storage} from "../firebase";
import meuestilo from "../meuestilo";
import { Cachorro } from "../model/Cachorro";
import * as ImagePicker from "expo-image-picker";
import { uploadBytes} from "firebase/storage";

const CachorroManter = () => {
    const [formCachorro,setFormCachorro] = useState<Partial<Cachorro>>({})
    const navigation = useNavigation();
    const [pickerImagePath, setPickerImagePath] = useState('');

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

    const escolheFoto = () => {
        Alert.alert(
             "Titulo",
             "mensagem",
             [
               {
                text: "Abrir câmera",
                onPress: () => abirCamera()
               },
               {
                text: "Abrir galeria",
                onPress: () => showImagePicker()
               },
             ]   
        )
         
    }
    const abirCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if(permissionResult.granted ==false ){
                alert("Permissão recusada");
                return;     
        }       
    
    const result = await ImagePicker.launchCameraAsync();
     console.log(result);
   }   

    const showImagePicker = async () =>{
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(permissionResult.granted == false){
            alert("permissão negada")
            return;
        }
        const result = await ImagePicker.launchImage({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEdditing: true,
            quality: 1,
            aspect: [4,3]
        })
    }
    const enviarImagem = async (result) => {
        if (!result.canceled){
            setPickerImagePath(result.assets[0].uri);

            const uploadUri = result.assets[0].uri;
            let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
            const extension = filename.split('.').pop();
            const name =filename.split('.').slice(0, -1).join('.');

            const ref = storage.ref(`imagens/${name}.${extension}`);
            const img = await fetch(uploadUri);
            const bytes = await img.blob();
            const fbResult = await uploadBytes(ref, bytes);

            const Download = await  storage.ref(fbResult.metadata.fullPath).getDownloadURL();
            setFormCachorro({...formCachorro, urlfoto: Download});
        }
    }
    return(
        <KeyboardAvoidingView style={meuestilo.container}>
            <View style={meuestilo.inputContainer}>
                <Pressable  onPress={() => escolheFoto()}>
                     <Text>Foto</Text>
                </Pressable>
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