import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Button, View, ImageBackground } from 'react-native';
import * as RootNavigation from './RootNavigation'
export default function Footer(props) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Welcome')}
            ><Text style={styles.myStyle}>Welcome</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('UnBoredifyMe')}
            ><Text style={styles.myStyle}>UnBoredifyMe</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('About')}
            ><Text style={styles.myStyle}>About</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#f7b239",
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 20
    },
    myStyle:{
        fontSize: 17,
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontStyle:"normal",
        color:"black"
      },
});