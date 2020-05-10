
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"
import Accordion from 'react-native-collapsible/Accordion';
import CollapsedDefinition from "../dictionary/owlbotCollapsedContent"
import { owlBotConstants } from "../common/constants"
// import { ScrollView } from 'react-native-gesture-handler';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

/**
 * help from: https://www.robinwieruch.de/react-hooks-fetch-data
 * @TODO: handle 404 and errors efficiently
 */

export default function OwlBotDictionary({ navigation }) {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ wordDefinition, setWordDefinition ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ errors, setErrors ] = useState("");

    return (
        <ScrollView style={{flex:1}} keyboardShouldPersistTaps="always" >
            <View style={styles.container}>
                <View style={{width:30, height: 30, rotation: 90}} >
                    <Button 
                        onPress={ ()=>navigation.openDrawer() }
                        title="|||"
                    />
                </View>
                <Image 
                    style={{height:30, width:30}} 
                    source={{uri: owlBotConstants.mainLogoUrl }} 
                />
                {/* <Image style={{height:30, width:30}} source={{uri: 'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg'}} /> */}

                <Text style={styles.welcome}>Welcome to OwlBot API consumer</Text>

                <Text>Add search Item</Text>
                <View style={styles.textInputWithCloseBtn}>
                    <TextInput
                        style={ styles.searchBar }
                        placeholder="enter search word"
                        value={ searchQuery }
                        onChangeText={ (txt)=>setSearchQuery(txt) }
                        clearButtonMode="while-editing"
                    />
                    <TouchableOpacity style={styles.clearBtnWrapper} onPress={()=>setSearchQuery("")} >
                        <EvilIcon style={styles.clearBtn} name="close-o" size={30} />
                    </TouchableOpacity>
                </View>
                <Button
                    disabled={ (searchQuery=="" || false) }
                    onPress={ async () => {
                        setIsLoading(true);
                        let xx = await searchApi(searchQuery);
                        console.debug("xx:",xx);
                        if(!xx.error){
                            setWordDefinition(xx.definitions);
                            setErrors("");
                        }
                        else{
                            setErrors(xx.data);
                            setWordDefinition([]);
                        }
                        setIsLoading(false);
                    }}
                    title={"Search"}
                />
                <View style={{marginTop:5}}></View>

                {
                    (isLoading)
                    ? <Text>Loading...<ActivityIndicator size="small" color="#00ff00" style={{width: 10, height:10}} /></Text>
                    : (wordDefinition && wordDefinition.length>0)
                        ? wordDefinition.map( (def, i) => (
                            <React.Fragment key={i}>
                                {/* <View> */}
                                    <CollapsedDefinition props={def} />
                                {/* </View> */}
                            </React.Fragment>
                        ) )
                        // <SafeAreaView style={styles.container}>
                        //     <FlatList
                        //         data={wordDefinition}
                        //         renderItem={({ item }) => <CollapsedDefinition data={item} />}
                        //         keyExtractor={ (item, i) => i.toString() }
                        //     />
                        //     </SafeAreaView>
                        : (errors)
                            ? <Text style={{color:'red', backgroundColor: 'black'}}>{ errors }</Text>
                            : <Text></Text>
                        
                    
                }

                <Button
                    onPress={() => navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        </ScrollView>
    )
}


async function searchApi(word: string) {
    const serviceResponse = await OwlBotAccessor.getWord(word)
    console.debug("OwlBotDictionary-searchApi-serviceResponse", serviceResponse);

    // if success
    if(!serviceResponse.err) 
        return serviceResponse.msg;
    else{
        console.debug("OwlBotDictionary-searchApi-sr2", serviceResponse.msg );
        // return { error: true, data: JSON.stringify( serviceResponse.msg ) };
        return { error: true, data: serviceResponse.msg.message };
    }
}

const logoutUser = () => {
    // redirect to home
    // return true;
}

/**
 * @TODO: test with small screen sizes
 */
const styles = StyleSheet.create({
    textInputWithCloseBtn: {
        borderColor: "#000011",
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    clearBtn:{
        alignContent: "center",
        textAlignVertical: "center"
    },
    clearBtnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.80,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "#cdcdcd", 
        // borderWidth:1,
        width: 30,
    },
    searchBar: {
        borderColor: "#000011",
        // borderWidth: 1,
        borderRadius: 5,
        // marginBottom: 5,
        width: "90%",
    },
    container: {
        flex: 1,
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
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

