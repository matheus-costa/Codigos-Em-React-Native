import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View, Text, Pressable, TouchableOpacity, KeyboardAvoidingView, Alert, Platform, AlertButton, Button, FlatList
} from 'react-native';
import { Animal } from '../../model/Animal';
import {AnimalService } from '../../servico/AnimalService';
import meuestilo from '../../../meuestilo';
import { useFocusEffect } from '@react-navigation/native';

const ListaAnimal = () => {
    const [animais, setAnimais] = useState<Animal[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const navigation = useNavigation();

    const loadAnimais = async () => {
        setIsRefreshing(true);
        try {
            const result = await AnimalService.findAll();
            setAnimais(result);
        } catch (error) {
            console.log(error);
        } finally {
            setIsRefreshing(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadAnimais();
            console.log("useFocus")
        }, [])
    );

    const deleteAnimal = (animal: Animal) => {
        const cancelBtn: AlertButton = { text: 'Cancelar' }
        const deleteBtn: AlertButton = {
            text: 'Apagar',
            onPress: () => {
                AnimalService.delete(animal).then(() => loadAnimais())
            }
        }

        Alert.alert(`Apagar Animal "${animal.descricao}?"`, 'Essa ação não pode ser desfeita!', [deleteBtn, cancelBtn])
    }

    const editMarcador = (item: Animal) => {
        navigation.navigate('Manter Animal', { animal: item });
    }

    const render = ({ item }: { item: Animal }) => {
        return <View style={meuestilo.itemCard} key={item.id}>
            <Pressable
                style={({ pressed }) => [{ backgroundColor: pressed ? '#f1f1f1' : 'transparent' }, meuestilo.listItem]}
                onLongPress={() => deleteAnimal(item)}
                onPress={() => { editAnimal(item) }}
            >
                {/* <Image source={{ uri: item.imageUri }} style={meuestilo.itemImage} /> */}
                <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Descricao: {item.descricao}</Text>
                    <Text>tomDePelo: {item.tomDePelo}</Text>
                    <Text>raca: {item.raca}</Text>
                    <Text>peso: {item.peso}</Text>
                </View>
            </Pressable>
        </View>
     
    };
    return (
        <KeyboardAvoidingView
            style={meuestilo.containerlistar}
            behavior="padding"
        >
            <FlatList
                data={animais}
                renderItem={render}
                keyExtractor={item => item.id.toString()}
                onRefresh={() => loadAnimais()}
                refreshing={isRefreshing}
            />
        </KeyboardAvoidingView>
    );
};

export default ListaAnimal