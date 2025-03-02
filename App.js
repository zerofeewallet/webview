import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StatusBar, TouchableOpacity, Linking,LogBox  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { LogLevel, OneSignal } from 'react-native-onesignal';

import { decode } from "base-64";
global.atob = decode;
global.Buffer = require('buffer').Buffer;
//ALTER TABLE user AUTO_INCREMENT=1000000;
//gradlew clean
//gradlew assembleRelease
// aab realease npx react-native build-android --mode=release
//npx react-native build-android --mode=release
//https://github.com/facebook/react-native/issues/28510
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
import "./ignoreWarnings"
LogBox.ignoreAllLogs();
//https://github.com/zerofeewallet/android
//26 dec 2024 start date

import FirstPage from "./navigation/FirstPage";

const Stack = createNativeStackNavigator()
const auth = 1
const App = () => {

  useEffect(()=>{
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize("6ad923be-dd9c-4315-9c20-c87321b2dbb3");
    //OneSignal.Notifications.requestPermission(true);
    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });
    console.log("App running")
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"FirstPage"}
                       screenOptions={{
                         headerTitleAlign:"center",
                         headerStyle: {
                           backgroundColor: 'white',
                         },
                         headerTintColor: 'black',
                         headerTitleStyle: {
                           fontWeight: 'normal',
                         },
                         navigationBarColor: '#D0E1F1'
                       }}>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{unmountOnBlur: true,headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

