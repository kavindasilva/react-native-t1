
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"
// import Accordion from 'react-native-collapsible/Accordion';
// import CollapsedDefinition from "../dictionary/owlbotCollapsedContent"
import { owlBotConstants } from "../common/constants"
import Ex from "../qrscanner/ex1";
import EvilIcon from 'react-native-vector-icons/EvilIcons';

/**
 * @TODO: 
 */

export default function qrScannerMain({ navigation }) {
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

                <Text style={styles.welcome}>QR scanner testing</Text>

                <Ex />
                
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

