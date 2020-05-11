
import React from "react";
import axios from 'axios';

import envConfig from "../../env";
import { owlBotConstants } from "../common/constants"


const urlGetWord = owlBotConstants.apiGetUrl; // https://owlbot.info/api/v4/dictionary/owl

/**
 * @TODO: handle 404 and other errors
 */
export function getWord(word: string){
    return axios.get(urlGetWord + word, setAuthenticationHeader() )
        .then(
            res => {
                // console.debug("owlbotAccessor - getWord", res);
                if(res && res.status && res.status === 200)
                    return { err: false, msg: res.data }
                // else if(res && res.status && res.status === 404){
                //     console.debug("owlbotAccessor status404:", res.data);
                //     return { err: false, msg: "Word not found" }
                // }
                else{
                    console.debug("owlbotAccessor statusUnknown:", res.data);
                    return { err: true, msg: res.data }
                }
            }
        )
        .catch(error => {
            console.debug("owlbotAccessor - getWord-Err", error);
            if(error.response && error.response.status===404)
                return { err: true, msg:{ message:"Word not found" } };
            return { err: true, msg:error };
        });
}

/**
 * adds the authorization header to direct_api requests
 */
function setAuthenticationHeader(){
    let apiKey = envConfig.owlbotApiKey;
    let authHeaders = "Token "+apiKey;
    // Authorization: Token {api_key}
    return { 
        headers: {
            "Authorization": authHeaders
        }
    };
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

