import React, { useState, useEffect } from "react";
import {auth, firestore} from "../firebase";
import meuestilo from "../meuestilo";
import { Carro } from "../model/Carro";
import {Text, FlatList, View, ActivityIndicator, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListarCachorros = () => {
    const [loading,setLoading] = useState(true);
    const [carros, setCarros] = useState<Carro[]>([]);
    const carroRef = 
      firestore.collection('Usuario').doc(auth.currentUser?.uid)
      .collection('Carro');

    useEffect(() => {
        const subscriber = carroRef
        .onSnapshot((querySnapshot) => {
            const carros = [];
            querySnapshot.forEach((documentSnapshot) => {
                carros.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id
                });
            });
            setCarros(carros);
            setLoading(false);
        });
        return () => subscriber();
    }, [cachorros])

    if (loading) {
        return <ActivityIndicator />;
    }

    const Item = ({ item }) => (
        <View style={meuestilo.item} >
            <View style={meuestilo.alinhamentoLinha}>
                <Image style={{ height: 80, width: 80, borderRadius: 10 }} source={{ uri: item.foto}} />

                <View style={meuestilo.alinhamentoColuna}>
                    <Text style={meuestilo.title}>Modelo: {item.modelo}</Text>
                    <Text style={meuestilo.title}>Placa: {item.placa}</Text>
                    <Text style={meuestilo.title}>Cor: {item.cor}</Text>
                </View>
            </View>
        </View>
    );
    
    const renderItem = ({ item }) => <Item item={item} />

    return (
        <SafeAreaView style={meuestilo.containerlistar}>
            <FlatList 
                data={carros}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );







}

export default ListarCachorros;