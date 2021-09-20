import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/ideaLogo.png")}
                />
                <Text style={styles.myStyle2}>UnBoredifyMe</Text>
                
            </View>
            <Text style={styles.myStyle2}>Add buttons</Text>
            

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoContainer: {
        position: 'absolute',
        top: 10,
        alignItems: 'center'
    },
    myStyle:{
        fontSize: 20,
        fontFamily:"Roboto",
        fontStyle:"italic",
        color:"#f7b239"
      },
      myStyle2:{
        fontSize: 20,
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontStyle:"normal",
        color:"#f7b239"
      }
});