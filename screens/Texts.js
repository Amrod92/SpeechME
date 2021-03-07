import React, {useEffect , useState} from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image, SafeAreaView} from 'react-native';

import Voice from '@react-native-community/voice';

import TTS from '../components/TTS';
import Translator from '../api/Translator';

const Texts = () => {

  const [textTTS, setTextTTS] = useState();

  const onChange = (textValue) => setTextTTS(textValue);

  const [results, setResults] = useState([]);

  // Show/Hide Hook state for Translator API
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
      //Setting callbacks for the process status

      Voice.onSpeechResults = onSpeechResults;

  }, []);

  const onSpeechResults = (e) => {
      //Invoked when SpeechRecognizer is finished recognizing
      console.log('onSpeechResults: ', e);
      setResults(e.value);
  };

  const startRecognizing = async () => {
      //Starts listening for speech for a specific locale
      try {
          await Voice.start('en-GB');
          setResults([]);
      } catch (e) {
          //eslint-disable-next-line
          console.error(e);
      }
  };

  const audio2text = results[0];

  useEffect(() => {
    setTextTTS(audio2text)
  }, [audio2text]);

  
  return (
      <>
        <View style={styles.container}>
            <TTS
                usrText={textTTS}
            />
            <ScrollView
                contentContainerStyle={styles.textContainer}>
                <TextInput
                style={styles.secondaryTypo}
                placeholder="Message..."
                multiline={true}
                onChangeText={setTextTTS}
                value={textTTS}
                />
            </ScrollView>

            <Button
                title="Translate"
                style={styles.Translate}
                onPress={() => setShouldShow(!shouldShow)}/>
            {shouldShow ? (
                null
            ) : 
            <ScrollView contentContainerStyle={styles.translateContainer}>
                <Translator
                    value={textTTS}
                    style={styles.textToSpeech}
                />
            </ScrollView>
            }
            

            <TouchableHighlight  
                onPress={startRecognizing}
                style={styles.touchable} >
                <Image
                    style={styles.imageButton}
                    source={{
                        uri:
                            'https://thumbs.gfycat.com/BitesizedDevotedIbizanhound-max-1mb.gif',
                    }}
                />
            </TouchableHighlight>



        </View>
       
    </>
    )
}


export default Texts;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f4f6ff'
    },
    textContainer: {
        backgroundColor: '#f4f6ff',
        padding: 15,
        marginTop: -20
    },
    translateContainer: {
        backgroundColor: '#f4f6ff',
        padding: 15,
        marginTop: 5
    },
    mainTypo: {
        flex: 1,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2a46ff',
        width: 356,
        height: 621,
    },
    secondaryTypo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333984',
    },
    textToSpeech: {
        fontFamily: "montserrat",
        color: "#f4f6ff",
        marginTop: 7,
        marginLeft: 6,
    },
    touchable: {
        backgroundColor: '#333984',
    },
    imageButton: {
		width: 50,
		height: 50,
        marginLeft: 178,
        marginBottom: 4,
        marginTop: 6
	},
    Translate: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 150,
    },
})