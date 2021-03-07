import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,  
  Button,
  Image
} from 'react-native';

import TTS from 'react-native-tts';


const tts = ({ usrText }) => {

    const handleVoice = (ttsText) => {
        TTS.speak(ttsText, {
        androidParams: {
            KEY_PARAM_PAN: -1,
            KEY_PARAM_VOLUME: 0.5,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
        })
    }

    
  return (
    <>
          <View style={styles.textBox}>            
               
            <Button
              style={styles.button}
              title="Text-To-Speech"
              onPress={() => handleVoice(usrText)}            
            />

          </View>
                  
    </>
  );
}

const styles = StyleSheet.create({
  textBox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 6,
    marginTop: 5
  },
  button: {
    textAlign: 'center'
  }
});

export default tts;
