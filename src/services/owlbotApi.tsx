
import React from "react";
import axios from 'axios';

import envConfig from "../../env";

const urlGetWord = "https://owlbot.info/api/v4/dictionary/"; // https://owlbot.info/api/v4/dictionary/owl

/**
 * @TODO: check accessing API
 */
export function getWord(word: string){
    return axios.get(urlGetWord + word, getAuthenticationHeader() )
        .then(
            res => {
                console.log("owlbotAccessor - getWord", res);
                if(res && res.status && res.status === 200)
                    return { err: false }
                else if(res && res.status && res.status === 404)
                    return { err: true, errMsg: res}
            }
        )
        .catch(error => {
            console.log("owlbotAccessor - getWord-Err", error);
            return { errMsg:error, err: true};
        });
}

/**
 * @TODO: verify request format
 */
function getAuthenticationHeader(){
    let apiKey = envConfig.owlbotApiKey;
    let authHeaders = "Token "+apiKey;
    // Authorization: Token {api_key}
    return { headers: authHeaders };
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

