import React, { useState } from 'react';
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
} from 'react-native';

export default function Login({ navigation }) {

    const [taikhoan, setTaikhoan] = useState('');
    const [password, setpassword] = useState('');
    const goToHome = () => {
        if (taikhoan.trim() == '' || !taikhoan) {
            alert('Không được để trống taikhoan !');
        } else if (password.trim() == '' || !password) {
            alert('Không được để trống mật khẩu !');
        } else {
            login();
        }
    };
    const login = async () => {
        let userData = await AsyncStorage.getItem('userData');
        if (userData) {
            userData = JSON.parse(userData);
            let arr = [...userData];
            arr = arr.filter(
                (value) =>
                    value.taikhoan.toLocaleLowerCase() == taikhoan.toLocaleLowerCase() &&
                    value.password == password
            );
            if (arr.length > 0) {
                let curUser = arr[0];
                AsyncStorage.setItem('curUser', JSON.stringify(curUser));
                navigation.replace('HomeTab');
            } else alert('Email hoặc mật khẩu không chính xác!');
        } else {
            alert('Email hoặc mật khẩu không chính xác!');
        }
    };

    return (
        <ImageBackground style={styles.container} source={require('../img/160205-atmosphere-anime_amino-space-circle-pattern-1080x2340.jpg')} resizeMode='stretch'>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.Welcom}>WelCome</Text>
                <View style={styles.khung}>
                    {/* Email va Pass */}
                    <View style={styles.khungdangnhap}>
                        {/* Email */}
                        <View style={styles.khungEmailPass}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Tài khoản</Text>
                            <TextInput
                                style={styles.khunginput}
                                value={taikhoan}
                                onChangeText={setTaikhoan}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.khungEmailPass}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Mật khẩu</Text>
                            <TextInput
                                style={styles.khunginput}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setpassword}>
                            </TextInput>

                        </View>
                    </View>
                    {/* btn Dangnhap Dangky QuenMK */}
                    <View style={styles.btn}>
                        <TouchableOpacity
                            style={styles.btnDNDK} onPress={() => {
                                navigation.navigate('Home', {
                                    taikhoan: taikhoan 
                                });
                            }}>
                            <Text>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDNDK}
                            onPress={() => {
                                navigation.navigate('DangKi')
                            }}>
                            <Text>Đăng kí</Text>
                        </TouchableOpacity>
                        <Button
                            title="Quên mật khẩu ?"
                            color='white'
                            onPress={() => Alert.alert('Đăng kí tài khoản khác đi ><')}>
                        </Button>
                    </View>
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
    Welcom: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '50px',
        textAlign: 'center',
        marginTop: '25%',
    },
    khung: {
        height: '100%',
        width: '100%',
        display: 'flex',
        marginTop: '25%',
    },
    khungdangnhap: {
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '15%',
    },

    khungEmailPass: {
        width: '80%',
        height: '30%',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    khunginput: {
        width: '70%',
        height: '80%',
        borderBottomColor: 'white',
        borderBottomWidth: '1px',
        textAlign: 'right',
        paddingRight: '3%',
        color: 'white',
        fontWeight: 'bold',
    },
    btn: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnDNDK: {
        width: '60%',
        height: '25%',
        borderColor: 'white',
        borderWidth: '1px',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});