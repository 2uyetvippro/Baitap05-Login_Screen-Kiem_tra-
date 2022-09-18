import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Nutnhan from './manhinhlogin/nutnhan';
import Nhap from './manhinhlogin/nhap';
import Link  from './manhinhlogin/link';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Nhap/>

      <Nutnhan/>

      <Link/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'rgb(222, 226, 222)',
  },
});
