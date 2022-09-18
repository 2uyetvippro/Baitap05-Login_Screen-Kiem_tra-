import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Link() {
    return (
        <View style={styles.link}>
            <Button 
                title="Forgot your password?"
                color='black'
                onPress={() => Alert.alert('Oke')}
            />
            <Button 
                title="Register"
                color='black'
                onPress={() => Alert.alert('Oke')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        width: 300,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

});