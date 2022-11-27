import React from 'react';
import Login from './Login';
import Home from './Home';
import Detail from './Detail';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DangKi from './DangKi';
import GioHang from './GioHang';


const Stack = createStackNavigator();


export default function RootCompenent() {
    return (
        // <Home />
        // <Login />
        // <Detail />
        // <DangKi />
        // <GioHang />
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DangKi" component={DangKi} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GioHang" component={GioHang} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}