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
import SanPham from './SanPham';
import { products } from '../data/nuochoa';

const CalAPI = () => {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "Data" });
            console.log('Đã trả về data');
        }, 2000);
    })
}

const getData = async (setData) => {
    let data = await CalAPI();
    setData(data);
}

export default function Home({ route, navigation }) {
    const { taikhoan } = route.params;
    const [data, setData] = useState({ data: null })
    const [number, setNumber] = useState(0);


    useEffect(() => {
        console.log('Mới vào Home');
        getData(setData);

        return () => {
            console.log('Hủy màn hình Home');
        }
    }, [data])

    useEffect(() => {
        console.log('Data đã lắng nghe là :', data);
    }, [data])

    const addProduct = () => {
        let newNumber = number + 1;
        setNumber(newNumber);
    }

    return (
        <ImageBackground style={styles.container} source={require('../img/ede7ebe8e439166b39ab630813714a21.jpg')} resizeMode='stretch'>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.khungin4}>
                    <View style={styles.in4}>
                        <View style={styles.Chao}>
                            <Text style={{ color: 'white', fontSize: '40px', fontWeight: 'bold', }}>Hi,</Text>
                        </View>
                        <View style={styles.Name}>
                            <Text style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', }}>{taikhoan}</Text>
                        </View>
                        <View style={styles.GioHang}>
                            <TouchableOpacity style={styles.btnGioHang}
                                onPress={() => {
                                    navigation.navigate('GioHang')
                                }}>
                                <Image style={{ width: '80%', height: '60%' }} source={require('../img/giohang.jpg')}></Image>
                                <View style={styles.SoLuongAdd}>
                                    <Text style={{ color: 'white' }}> {number} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ava}>
                        <TouchableOpacity style={styles.avatarclick}>
                            <Image style={styles.avatar} source={require('../img/308021157_3042349249388626_1224133999255634330_n.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnDX}
                            onPress={() => {
                                navigation.goBack()
                            }}>
                            <Text style={{ color: 'white' }}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <SearchBar />
                <ScrollView style={styles.ListProduct}>
                    <View style={styles.khungsanpham}>
                        {
                            products.map(element => {
                                return <SanPham data={element} addProduct={addProduct} />
                            })
                        }
                        {/* <SanPham data={products[0]} addProduct={addProduct} />
                        <SanPham data={products[1]} addProduct={addProduct} />
                        <SanPham data={products[2]} addProduct={addProduct} />
                        <SanPham data={products[3]} addProduct={addProduct} /> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    avatar: {
        width: '50%',
        height: '70%',
    },
    khungin4: {
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(225,225,225,.50)',
        borderRadius: '30px',
    },
    in4: {
        width: '60%',
        height: '100%',
    },
    Chao: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
        marginTop: '6%',
    },
    Name: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
    },
    GioHang: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10%',
        position: 'relative',
    },

    btnGioHang: {
        width: '22%',
        height: '80%',
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
    ava: {
        width: '40%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },

    avatarclick: {
        width: '70%',
        height: '60%',
        borderRadius: '20px',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
    },

    btnDX: {
        width: '60%',
        height: '15%',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    ListProduct: {
        width: '100%',
        height: '100%',

    },
    khungsanpham: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

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