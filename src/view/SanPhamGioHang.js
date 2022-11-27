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

export default function SanPhamGioHang({ navigation }) {
    return (
        <View style={styles.SanPhamAdd}>
            <View style={styles.avaSanPham}>
                <Image style={styles.avatarSP} source={require('../img/dior-sauvage-eau-de-toilettebox_ad9e58f8c2ef4366a0c614b4dbc0c607_master.webp')}></Image>
            </View>
            <View style={styles.in4Mua}>
                <View style={styles.Ten}>
                    <Text style={{ fontWeight: 'bold', fontSize: '15px' }}>Dior Sauvage Eau de Toilette</Text>
                </View>
                <View style={styles.Gia}>
                    <Text style={{ fontWeight: 'bold', fontSize: '15px' }}>4.500.000 VNĐ</Text>
                </View>
                <View style={styles.SoLuongThem}>
                    <View style={styles.SoLuong}>
                        <TouchableOpacity style={styles.iconbtn}>
                            <Image style={styles.icon} source={require('../img/cong.png')}></Image>
                        </TouchableOpacity>

                        <Text style={{ fontWeight: 'bold' }}>1</Text>
                        <TouchableOpacity style={styles.iconbtn}>
                            <Image style={styles.icon} source={require('../img/tru.png')}></Image>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    

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