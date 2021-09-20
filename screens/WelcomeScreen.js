import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
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
                <Text style={styles.myStyle}>Welcome to</Text>
                <Text style={styles.myStyle2}>UnBoredifyMe</Text>
                <Text style={styles.myStyle}>...cure your boredom</Text>
                
                
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
        top: 100,
        alignItems: 'center'
    },
    myStyle:{
        fontSize: 20,
        fontFamily:"Roboto",
        fontStyle:"italic",
        color:"#f7b239"
      },
      myStyle2:{
        fontSize: 50,
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontStyle:"normal",
        color:"#f7b239"
      }
})

export default WelcomeScreen;