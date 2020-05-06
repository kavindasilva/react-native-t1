
import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"

export default function OwlBotDictionary({navigation}){
  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to OwlBot API consumer</Text>
      
      <Text>Add search Item</Text>
      <TextInput/>
      <Button
        onPress={ ()=>searchWord() }
        title={ "search" }
      />


      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

function searchWord(){
    return "";
}

const logoutUser = () => {
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

