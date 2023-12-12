import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View, Text, Pressable, TouchableOpacity, KeyboardAvoidingView, Alert, Platform, AlertButton, Button, FlatList
} from 'react-native';
import { Produtos } from '../../model/Produtos';
import { ProdutosService } from '../../servico/ProdutosService';
import meuestilo from '../../../meuestilo';
import { useFocusEffect } from '@react-navigation/native';

const ListaProdutos = () => {
    const [produtos, setProdutos] = useState<Produtos[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const navigation = useNavigation();

    const loadProdutos = async () => {
        setIsRefreshing(true);
        try {
            const result = await ProdutosService.findAll();
            setProdutos(result);
        } catch (error) {
            console.log(error);
        } finally {
            setIsRefreshing(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadProdutos();
            console.log("useFocus")
        }, [])
    );

    const deleteProdutos = (produtos: Produtos) => {
        const cancelBtn: AlertButton = { text: 'Cancelar' }
        const deleteBtn: AlertButton = {
            text: 'Apagar',
            onPress: () => {
                ProdutosService.delete(produtos).then(() => loadProdutos())
            }
        }

        Alert.alert(`Apagar Produtos "${produtos.descricao}?"`, 'Essa ação não pode ser desfeita!', [deleteBtn, cancelBtn])
    }

    const editMarcador = (item: Produtos) => {
        navigation.navigate('Manter Produtos', { Produtos: item });
    }

    const render = ({ item }: { item: Produtos }) => {
        return <View style={meuestilo.itemCard} key={item.id}>
            <Pressable
                style={({ pressed }) => [{ backgroundColor: pressed ? '#f1f1f1' : 'transparent' }, meuestilo.listItem]}
                onLongPress={() => deleteProdutos(item)}
                onPress={() => { editMarcador(item) }}
            >
                {/* <Image source={{ uri: item.imageUri }} style={meuestilo.itemImage} /> */}
                <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Descrição: {item.descricao}</Text>
                    <Text>Marca: {item.marca}</Text>
                    <Text>Cor: {item.cor}</Text>
                    <Text>Preço: {item.valor}</Text>
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
                data={produtos}
                renderItem={render}
                keyExtractor={item => item.id.toString()}
                onRefresh={() => loadProdutos()}
                refreshing={isRefreshing}
            />
        </KeyboardAvoidingView>
    );
};

export default ListaProdutos