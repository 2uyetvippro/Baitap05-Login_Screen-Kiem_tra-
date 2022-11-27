import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Button,
    Alert,
    Image,
    ScrollView,
} from 'react-native';


export default function SanPham({ data, addProduct }) {
    const navigation = useNavigation();
    const [number, setNumber] = useState(0);
    console.log("data.anhdata.anhdata.anhdata.anh", data.anh)
    return (
        <TouchableOpacity style={styles.Product}
            onPress={() => {
                navigation.navigate('Detail', {
                    name: data.name,
                    anh: data.anh,
                    price: data.price,
                    mota: data.mota,
                })
            }}>
            <View style={styles.imgProduct}>
                <Image style={styles.anh} source={data.anh}>
                </Image>
            </View>
            <View style={styles.in4Product}>
                <View style={styles.nameProduct}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{data.name}</Text>
                </View>
                <View style={styles.PriceandAdd}>
                    <View style={styles.Price}>
                        <Text style={{ color: 'white' }}>{data.price} VNĐ</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.Add}
                        onPress={addProduct}
                    >
                        <Text style={{ color: 'white' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Product: {
        marginTop: 20,
        width: 170,
        height: 200,
        backgroundColor: 'rgba(225,225,225,.50)',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imgProduct: {
        width: '80%',
        height: '70%',
    },

    anh: {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
    },
    in4Product: {
        width: '100%',
        height: '30%',
    },
    nameProduct: {
        width: '100%',
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
    },
    PriceandAdd: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Price: {
        width: '80%',
        height: '100%',
        paddingLeft: '8%',
        display: 'flex',
        justifyContent: 'center',
    },
    Add: {
        width: '12%',
        height: '90%',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        marginRight: '10%',
    },
});