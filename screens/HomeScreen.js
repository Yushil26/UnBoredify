import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { ShakeEventExpo } from '../accelerometer';

export default function HomeScreen() {
  
  let [activity, setActvity] = React.useState('')
  let [type, setType] = React.useState('')
  let [participants, setParticipants] = React.useState('')

  const fetchApiCall = () => {
    fetch("http://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(response => {
        setActvity(response.activity);
        setType(response.type)
        setParticipants(response.participants)
      })
      .catch(err => {
        console.log(err);
      });
      

  }
  
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/ideaLogo.png")}
                />
                <Text style={styles.myStyle2}>UnBoredifyMe</Text>
            </View>

            <View style={styles.heading}>
              <Text style={styles.title}>Press the button below or shake for a new activity</Text>
              <TouchableOpacity onPress={fetchApiCall}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Get Activity</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.button2}>
                <Text style={styles.myStyle}>Activity</Text>
                <Text style={styles.buttonText}>{activity}</Text>
                <Text style={styles.myStyle}>Type</Text>
                <Text style={styles.buttonText}>{type.charAt(0).toUpperCase()+ type.slice(1)}</Text>
                <Text style={styles.myStyle}>Participants needed</Text>
                <Text style={styles.buttonText}>{participants}</Text>
              </View>
             </View>    
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container2: {
      position: 'absolute',
      top: 250,
      alignItems: 'center'
    },
    heading: {
      position: 'absolute',
      top: 150,
      alignItems: 'center'
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
        fontStyle:"normal",
        color:"black"
      },
      myStyle2:{
        fontSize: 20,
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontStyle:"normal",
        color:"#f7b239"
      },
      title: {
        fontSize: 15,
        color: '#fff'
      },
      button: {
        padding: 20,
        marginVertical: 15,
        borderRadius:10,
        backgroundColor: '#f7b239',
        alignItems: 'center'
      },
      button2: {
        top: 50, 
        padding: 20,
        marginVertical: 15,
        borderRadius:10,
        backgroundColor: '#f7b239',
        alignItems: 'center'
      },
      buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        alignItems: 'center'
      }
});