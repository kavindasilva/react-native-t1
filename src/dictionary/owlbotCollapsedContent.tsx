
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Modal, TouchableHighlight } from 'react-native';
import * as OwlBotAccessor from "../services/owlbotApi"
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

/**
 * help from: https://www.robinwieruch.de/react-hooks-fetch-data
 */

export default function OwlBotDictionaryCollapsibledPane(props: any) {
    // const [ searchQuery, setSearchQuery ] = useState("");
    // const [ type, setType ] = useState("");
    // const [ wordDefinition, setWordDefinition ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isCollapsed, setIsCollapsed ] = useState(true);
    const [ showModal, setShowModal ] = useState(false);

    console.debug("OwlBotDictionaryCollapsibledPane-data:", props.data);
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
                    onPress={ ()=>{
                        setIsCollapsed(!isCollapsed);
                        // setShowModal(true);
                    } }
                >
                    { props.data.type+"\n" }
                    { props.data.definition }
                </Text>
                <Collapsible 
                    collapsed={isCollapsed}
                    // collapsedHeight={10}
                    // style={ { height: "20px" } }
                >
                    <Text>collapre content</Text>
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

