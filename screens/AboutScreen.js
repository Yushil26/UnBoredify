import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function AboutScreen(props) {
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
                <Text style={styles.myStyle}>Developer: Yushil Balram</Text>
                <Text style={styles.myStyle}>How to play:</Text>
                <Text style={styles.myStyle}>1. Pick an activity type</Text>
                <Text style={styles.myStyle}>2. Pick the number of people with you</Text>
                <Text style={styles.myStyle}>3. Pick how much an activity will cost</Text>
                <Text style={styles.myStyle}>4. Shake your device for new activities</Text>             
                
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
    myStyle:{
        fontSize: 20,
        fontFamily:"Roboto",
        fontStyle:"normal",
        color:"#f7b239"
      },
      myStyle2:{
        fontSize: 50,
        fontFamily:"Roboto",
        fontWeight: "normal",
        fontStyle:"normal",
        color:"#f7b239"
      }
})

export default AboutScreen;