import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip = { () => navigation.replace("Homepage") }
            onDone = { () => navigation.navigate("Homepage") }

            pages={[
                {
                backgroundColor: '#191414',
                image: <Image source={require('../assets/logo.png')} />,
                title: 'Welcome to SpeechMe',
                subtitle: 'Make your reading more enjoyable',
                },
                {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Translator',
                subtitle: 'Translate your fauvorite text to english',
                },
                {
                backgroundColor: '#345044',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Text-to-Speech',
                subtitle: 'High quality voice',
                },
                {
                backgroundColor: '#1db954',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Let your device talk',
                subtitle: 'Save hours of reading',
                },
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
