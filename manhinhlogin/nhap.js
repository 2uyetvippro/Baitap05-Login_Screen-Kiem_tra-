import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

const UselessTextInput = () => {
    const [text, onChangeText] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);


    return (
        <View style={styles.input}>
            <TextInput
                style={styles.input1}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email"
            />
            <TextInput
                style={styles.input1}
                onChangeText={onChangeText1}
                value={text1}
                placeholder="Password"

            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
      width: 300,
      height: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    input1: {
        height: 50,
        width: 250,
        borderRadius: 30,
        margin: 12,
        paddingLeft: 50,
        backgroundColor : 'white',
        borderColor : 'white',
    },
});

export default UselessTextInput;