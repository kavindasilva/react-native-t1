import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login({navigation}){
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Login!</Text>
      <TextInput placeholder="username" />
      <TextInput placeholder="password" textContentType="password" />
      {/* <Button title="Login" onPress={ ()=>validateLogin() } /> */}
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

const validateLogin = () => {
  // redirect to home
  // return true;
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

