
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Modal, TouchableHighlight, Image } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

/**
 * help from: https://www.robinwieruch.de/react-hooks-fetch-data
 */

export default function OwlBotDictionaryCollapsibledPane({props}) {
    const [ isCollapsed, setIsCollapsed ] = useState(true);
    const [ showModal, setShowModal ] = useState(false);

    console.debug("OwlBotDictionaryCollapsibledPane-data:", props);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                // onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                // }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setShowModal(!showModal);
                        }}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <React.Fragment>
                <Text
                    style={ styles.definition }
                    onPress={ ()=>{
                        setIsCollapsed(!isCollapsed);
                        // setShowModal(true);
                    } }
                >
                    <Text style={{fontWeight:"bold"}}>{ props.type+"\n" }</Text>
                    <Text>{ props.definition }</Text>
                </Text>
                <Collapsible 
                    collapsed={isCollapsed}
                >
                    <View>
                        <Text>example: { props.example }</Text>
                        <Image style={styles.picture} resizeMode="cover" source={{ uri: props.image_url }} />
                        <Text>emoji: { props.emoji }</Text>
                    </View>
                </Collapsible>
            </React.Fragment>
        </View>
    )
}

/**
 * success
 * {
    "definitions": [
        {
            "type": "noun",
            "definition": "a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.",
            "example": "I love reaching out into that absolute silence, when you can hear the owl or the wind.",
            "image_url": "https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg",
            "emoji": "🦉"
        }
    ],
    "word": "owl",
    "pronunciation": "oul"
    }
*/

/**
 * not found
 * [
    {
        "message": "No definition :("
    }
    ]
 */


const styles = StyleSheet.create({
    definition: {
        color: "#000011",
        backgroundColor: "#ffe042",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {},
    modalText: {},
    openButton: {},
    textStyle: {},
    container: {
        // marginTop: 5,
        // flexDirection: "row",
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#eeddee',
        width: "100%",
        borderColor: 'green',
        borderWidth: 1,
    },
    picture: {
        height: 70,
        width: 100
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

