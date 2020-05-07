
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"

/**
 * @TODO: check state assignments
 */
export default function OwlBotDictionary({ navigation }) {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ type, setType ] = useState("");
    const [ wordDefinition, setWordDefinition ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    // useEffect( ()=>{
    //     // setIsLoading(true);
    //     const fd = async () =>{
    //         const res = await searchApi( searchQuery )
    //         // console.debug("effect", res);
    //         setIsLoading(false);
    //     };
    //     fd();
    // }, [definition])

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to OwlBot API consumer</Text>

            <Text>Add search Item</Text>
            <TextInput
                placeholder="enter search word"
                value={ searchQuery }
                onChangeText={ (txt)=>setSearchQuery(txt) }
            />
            <Button
                onPress={ async () => {
                    let xx = await searchApi(searchQuery);
                    console.debug("xx:",xx);
                    setWordDefinition(xx.definitions)
                }}
                // onPress={() => setDefinition(searchApi(searchQuery)) }
                // onPress={async () => {
                //     const res = await searchApi( searchQuery )
                //     console.debug("btn", res);
                // }}
                // onPress={ ()=>setDefinition(  Math.random().toString() ) }
                title={"Search"}
            />

            {/* <Text>{ definition }</Text> */}
            <Text>
            {
                (wordDefinition && wordDefinition.length>0) ? 
                    wordDefinition.map( def => (
                        <Text>{ def.definition }</Text>
                    ) )
                    : ""
                    
                
            }
            </Text>

            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}

// function searchWord(param) {
//     console.debug("owlBotMain-searchWord",param)
//     setDef
// }

async function searchApi(word: string) {
    const serviceResponse = await OwlBotAccessor.getWord(word)
    console.debug("effect2", serviceResponse);

    // if success
    if(!serviceResponse.err)
        return serviceResponse.msg;
    else
        return serviceResponse.msg
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

