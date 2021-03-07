import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Homepage = () => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.mainTypo}>What can I translate for you today?</Text>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <Text style={styles.sectionTitle}>A Text-To-Speech mobile software</Text>
        </View>
        </>
    )
}

export default Homepage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f4f6ff',
        justifyContent: "space-around",
    },
    mainTypo: {
        flex: 0.2,
        color: '#2a46ff',
        fontFamily: "montserrat",
        fontSize: 28,
        height: 250,
        width: 250,
        position: 'relative',
        marginLeft: 30
    },
    sectionTitle: {
        alignSelf: 'center',
        color: '#333984',
        color: '#2a46ff',
        fontFamily: "montserrat",
        marginBottom: 50
    },
    logo: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 250,
        width: 250,
        marginTop: 80
    }
})
