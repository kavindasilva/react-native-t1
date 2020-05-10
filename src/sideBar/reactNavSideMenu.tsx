
/**
 * https://reactnavigation.org/docs/getting-started/
 * https://reactnavigation.org/docs/drawer-based-navigation/
 */

import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import HomeScreen from "../home/home"
import LoginScreen from "../login/login"
import OwlBotUi from "../dictionary/owlbotMain"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function SideMenuContent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="OwlDic">
        <Drawer.Screen name="OwlDic" component={OwlBotUi} />
        {/* <Drawer.Screen name="QRscanner" component={OwlBotUi} /> */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  name: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
    color: 'green',
  }
});