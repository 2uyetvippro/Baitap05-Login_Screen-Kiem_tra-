import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Nutnhan() {
    return (
        <View style={styles.nut}>
            <View style={styles.button} >
            <Button 
                title="Login"
                color= 'white'
                onPress={() => Alert.alert('Oke')}
            />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    nut: {
        width: 300,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: 250,
        height : 50,
        borderRadius: 50,
        backgroundColor : '#0096FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});