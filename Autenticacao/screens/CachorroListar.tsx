import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, 
         TextInput, TouchableOpacity, View } from "react-native";
import { auth, firestore, storage} from "../firebase";
import meuestilo from "../meuestilo";
import { Cachorro } from "../model/Cachorro";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

const CachorroListar = () => {
    const[cachorros,setCachorros] = useState<Cachorro[]>([]);
    const[loading,setLoading] = useState(true);

    const cachorroRef=firestore.collection('Usuario').doc(auth.currentUser?.uid)
                    .collection('Cachorro');

    useEffect(() => {
        if(loading){
            const subscriber = cachorroRef
            .onSnapshot((querySnapshot) => {
                const cachorros = [];
                querySnapshot.forEach((documentSnapshot) => {
                    cachorros.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    });
                    setCachorros(cachorros);
                    setLoading(false);
                });
            })
            return () => subscriber();
        }
    }, [cachorros])

    const Item = ({ item }) => (
        <View style={meuestilo.item}>
            <Text style={meuestilo.title}>Nome: {item.nome}</Text>
            <Text style={meuestilo.title}>Raca: {item.raca}</Text>
            <Text style={meuestilo.title}>Sexo: {item.sexo}</Text>
            <Text style={meuestilo.title}>Data Nasc: {item.datanasc}</Text>
        </View>
    );

    const renderItem = ({ item }) => <Item item={item}/>

    return (
        <SafeAreaView>
            <FlatList 
                data={cachorros}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

export default CachorroListar;