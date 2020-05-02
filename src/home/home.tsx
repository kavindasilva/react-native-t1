import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default function Login(){
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Home page after loign</Text>
      
      <Button title="Logout" onPress={ ()=>logoutUser() } />
    </View>
  )
}

const logoutUser = () => {
  // redirect to home
  Actions.login();
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

