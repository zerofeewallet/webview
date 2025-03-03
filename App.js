import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StatusBar, TouchableOpacity, Linking,LogBox,Alert  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

import FirstPage from "./navigation/FirstPage";

const Stack = createNativeStackNavigator()
const auth = 1

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const App = () => {

  useEffect(() => {
     requestUserPermission()
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
      return unsubscribe;


  }, []);

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

