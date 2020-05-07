
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"
// import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import CollapsedDefinition from "../dictionary/owlbotCollapsedContent"

/**
 * help from: https://www.robinwieruch.de/react-hooks-fetch-data
 * @TODO: handle 404, and errors
 */

export default function OwlBotDictionary({ navigation }) {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ type, setType ] = useState("");
    const [ wordDefinition, setWordDefinition ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

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
                    setIsLoading(true);
                    let xx = await searchApi(searchQuery);
                    console.debug("xx:",xx);
                    setWordDefinition(xx.definitions)
                    setIsLoading(false);
                }}
                title={"Search"}
            />

            {
                (isLoading)
                ? <Text>Loading...</Text>
                : (wordDefinition && wordDefinition.length>0) ? 
                    wordDefinition.map( (def, i) => (
                        <React.Fragment key={i}>
                            {/* <View> */}
                                <CollapsedDefinition data={def} />
                            {/* </View> */}
                        </React.Fragment>
                    ) )
                    // <SafeAreaView style={styles.container}>
                    //     <FlatList
                    //         data={wordDefinition}
                    //         renderItem={({ item }) => <CollapsedDefinition data={item} />}
                    //         // keyExtractor={ (item, i) => item.definition}
                    //     />
                    //     </SafeAreaView>
                    : <Text>""</Text>
                    
                
            }

            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}


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

