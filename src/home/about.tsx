import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function About(){
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>About page</Text>
      
      <Button title="Logout" onPress={ ()=>console.log("button pressed") } />
    </View>
  )
}

const logoutUser = () => {
  // redirect to home
  return true;
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

