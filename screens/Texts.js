import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Texts = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Texts</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')} />
        </View>
    )
}

export default Texts

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
