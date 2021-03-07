import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
const axios = require('axios');


const Translator = ({ value }) => {

    const [translate, setTranslate] = useState([])

    const respo = useEffect(()=>{
      textResponse
    }, [])
  
    const textResponse = axios.post('https://speechme-api.herokuapp.com/textTranslate', {
      info: 'API-Translator',
      message: value
    })
    .then(response => {
      setTranslate(response.data[0]);
      // console.log(translate);
    })
    .catch(error => {
      console.log(error);
    });

    return (
        <View>
            <Text>{translate}</Text>
        </View>
    )
}

export default Translator
