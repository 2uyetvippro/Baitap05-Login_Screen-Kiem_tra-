
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
import SearchBar from './Seacher';

export default function Detail({ navigation, route }) {
    const { name, price, mota, anh } = route.params
    console.log("namenamenamename", route.params.name)
    // const [number, setNumber] = useState(0);
    const [number, setNumber] = useState(1);

    const addProduct = () => {
        let newNumber = number + 1;
        setNumber(newNumber);
    }
    const removeProduct = () => {
        if(number > 0){
            let newNumber = number - 1;
            setNumber(newNumber);
        }
        return 0;
    }

    return (
        <ImageBackground style={styles.container} source={require('../img/49261521bd75996c6e75cc1d34aae0ca.jpg')} resizeMode='stretch'>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.back}>
                    <TouchableOpacity style={styles.btnback}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image style={styles.avatarback} source={require('../img/return-button-png-26.png')} />
                    </TouchableOpacity>

                    <View style={styles.GioHang}>
                        <TouchableOpacity style={styles.btnGioHang}
                            onPress={() => {
                                navigation.navigate('GioHang')
                            }}>
                            <Image style={{ width: '80%', height: '60%' }} source={require('../img/giohang.jpg')}></Image>
                            <View style={styles.SoLuongAdd}>
                                <Text style={{ color: 'white' }}> 0 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Image}>
                    <Image style={styles.avatarsanpham} source={anh} />
                </View>
                <View style={styles.in4Product}>
                    <View style={styles.khungTen}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>{name}</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{price} VNĐ</Text>

                    </View>
                    <View style={styles.MoTa}>
                        <ScrollView style={{ color: 'black', fontWeight: 'bold' }}>
                            <Text>
                                {mota}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.AddGioHang}>
                    <View style={styles.SoLuong}>
                        <TouchableOpacity 
                        style={styles.iconbtn}
                        onPress={addProduct}>
                            <Image style={styles.icon} source={require('../img/cong.png')}></Image>
                        </TouchableOpacity>

                        <Text style={{ color: 'white', fontWeight: 'bold' }}> {number} </Text>
                        <TouchableOpacity 
                        style={styles.iconbtn}
                        onPress={removeProduct}>
                            <Image style={styles.icon} source={require('../img/tru.png')}></Image>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity 
                    style={styles.AddToCart}
                    
                     >
                        <Text style={{ color: 'white' }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    back: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnback : {
        width: '20%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarback: {
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '5px',
    },
    GioHang: {
        width: '25%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },

    btnGioHang: {
        width: '50%',
        height: '90%',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    SoLuongAdd: {
        width: '50%',
        height: '55%',
        backgroundColor: 'red',
        borderRadius: '4px',
        position: 'absolute',
        top: -11,
        right: -14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },


    Image: {
        width: '100%',
        height: '55%',
        backgroundColor: 'rgba(225,225,225,.50)',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarsanpham: {
        width: '95%',
        height: '90%',
        borderRadius: '20px',
    },

    in4Product: {
        width: '100%',
        height: '25%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        backgroundColor: 'rgba(225,225,225,.90)',
        marginTop: '3%',
    },

    

    AddGioHang: {
        width: '100%',
        height: '13%',
        borderColor: 'black',
        borderTopWidth: '1px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    SoLuong: {
        width: '25%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    AddToCart: {
        width: '40%',
        height: '40%',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    iconbtn: {
        width: '28%',
        height: '70%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '60px',
        borderColor: 'black',
        borderWidth: '1px',
    },

    icon: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    khungTen: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingLeft: '2%',
    },

    MoTa: {
        width: '100%',
        height: '60%',
        paddingLeft: '1%',
        paddingRight: '1%',
    },


});