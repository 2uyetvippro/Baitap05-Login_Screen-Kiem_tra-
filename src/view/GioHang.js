import React from 'react';
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
import SanPhamGioHang from './SanPhamGioHang';
import SearchBar from './Seacher';

export default function GioHang({ navigation }) {
    return (
        <ImageBackground style={styles.container} source={require('../img/2a68b8d2f7fe507d5c6daaa5fb32cba1.jpg')} resizeMode='stretch'>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.back}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image style={styles.avatarback} source={require('../img/return-button-png-26.png')} />
                    </TouchableOpacity>
                </View >

                <ScrollView style={styles.content}>
                    <View style={styles.khungcontent}>
        

                        <SanPhamGioHang />
                        <SanPhamGioHang />
                        <SanPhamGioHang />

                    </View>

                    
                </ScrollView>

                <View style={styles.AddGioHang}>
                    <View style={styles.TongDon}>
                        <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                            Tổng :
                        </Text>
                        <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                            6.000.000 VNĐ
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.AddToCart}>
                        <Text style={{ color: 'white', fontSize: '18px' }}>Thanh toán sản phẩm</Text>
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
        justifyContent: 'center',
        paddingLeft: '5%',
    },
    avatarback: {
        width: '15%',
        height: '70%',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '5px',
    },

    content: {
        width: '100%',
        height: '75%',
        backgroundColor: 'rgba(225,225,225,.80)',
        borderRadius: '20px',
        marginBottom: '5%',
    },
    khungcontent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '3%',
    },



    SanPhamAdd: {
        marginTop: '3%',
        width: '95%',
        height: 120,
        borderWidth: '1px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '3%',
        paddingRight: '3%',
        backgroundColor: 'white',
    },
    avaSanPham: {
        width: '30%',
        height: '80%',
        borderRadius: '20px',
        borderColor: 'black',
        borderWidth: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarSP: {
        width: '90%',
        height: '90%',
        borderRadius: '20px',
    },
    in4Mua: {
        marginLeft: '4%',
        width: '65%',
        height: '80%',
        display: 'flex',
        justifyContent: 'space-around',
        position: 'relative',
    },
    Ten: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
    },
    Gia: {
        width: '60%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
    },
    SoLuongThem: {
        width: '40%',
        height: '40%',
        position: 'absolute',
        bottom: 5,
        right: 0,

    },


    AddGioHang: {
        width: '100%',
        height: '15%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TongDon: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    SoLuong: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    AddToCart: {
        width: '70%',
        height: '50%',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },

    iconbtn: {
        width: '31%',
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

});