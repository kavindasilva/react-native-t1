
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"

/**
 * @TODO: check state assignments
 */
export default function OwlBotDictionary({ navigation }) {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ type, setType ] = useState("");
    const [ definition, setDefinition ] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to OwlBot API consumer</Text>

            <Text>Add search Item</Text>
            <TextInput
                placeholder="enter search word"
                value={ searchQuery }
                onPress={ ()=>setSearchQuery(this.value) }
            />
            <Button
                onPress={() => searchWord(searchQuery)}
                title={"Search"}
            />

            <Text>{ definition }</Text>


            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}

function searchWord(param) {
    OwlBotAccessor.getWord(param)
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

