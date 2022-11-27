import React, { useState } from "react";
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



export default function DangKi({ navigation }) {


    const [taikhoan, settaikhoan] = useState("");
    const [password, setpassword] = useState("");

    const onSignUp = () => {
        if (taikhoan.trim() == "" || !taikhoan) {
            alert("Không được để trống tài khoản !");
        } else if (password.trim() == "" || !password) {
            alert("Không được để trống mật khẩu !");
        } else {
            createAccount();
        }
    };

    const createAccount = async () => {
        let userData = await AsyncStorage.getItem("userData");
        if (userData) {
            userData = JSON.parse(userData);
            let arr = [...userData];
            arr = arr.filter(
                (value) => value.taikhoan.toLocaleLowerCase() == taikhoan.toLocaleLowerCase()
            );
            if (arr.length > 0) {
                alert("TaiKhoan already registered!");
                return;
            } else {
                userData.push({
                    taikhoan: taikhoan.trim(),
                    password: password.trim(),
                });
            }
        } else {
            userData = [];
            userData.push({
                taikhoan: taikhoan.trim(),
                password: password.trim(),
            });
        }
        AsyncStorage.setItem("userData", JSON.stringify(userData));
        alert("Đăng ký thành công!");
        navigation.goBack();
    };

    return (
        <ImageBackground style={styles.container} source={require('../img/d9d16584a7c279d8e7855f61a8f3198c.jpg')} resizeMode='stretch'>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.Welcom}>Tạo tài khoản</Text>
                <View style={styles.khung}>
                    {/* taikhoan va Pass */}
                    <View style={styles.khungdangnhap}>
                        {/* taikhoan */}
                        <View style={styles.khungtaikhoanPass}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Tài khoản</Text>
                            <TextInput
                                style={styles.khunginput}
                                placeholder={"Nhập tài khoản"}
                                value={taikhoan}
                                onChangeText={settaikhoan}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.khungtaikhoanPass}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}>Mật khẩu</Text>
                            <TextInput
                                style={styles.khunginput}
                                placeholder={"Nhập mật khẩu"}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setpassword}
                            >
                            </TextInput>

                        </View>
                    </View>
                    {/* btn Dangnhap Dangky QuenMK */}
                    <View style={styles.btn}>
                        <TouchableOpacity
                            style={styles.btnDNDK} 
                            onPress={createAccount}
                            >

                            <Text>Tạo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnDNDK} onPress={() => {
                                navigation.goBack()
                            }}>
                            <Text>Thoát</Text>
                        </TouchableOpacity>
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
        marginTop: '30%',
    },
    khungdangnhap: {
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '10%',
    },

    khungtaikhoanPass: {
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
    },
    btn: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
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