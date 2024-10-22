import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image,TouchableOpacity } from 'react-native';

const Acknowledge = () => {


    return(

        <View style={styles.container}>

        <Image
            source={require('../assets/rak-logo.jpg')} // Update with your logo's path
            style={styles.logo}
            resizeMode="contain" // Adjust as necessary
        />

        <Text style={[styles.label,{ marginTop: 20,marginBottom:40,fontSize: 20,color:'#21D375',fontWeight: 'bold',alignSelf:'center' }]}> Successfully Submitted! </Text>

        <Image
            source={require('../assets/signup-success.png')} // Update with your logo's path
            style={styles.logo}
            resizeMode="contain" // Adjust as necessary
        />

        <Text style={[styles.label,{ marginTop: 25,}]}> Our Representative will get in touch with you shortly </Text>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#FFF'
    },
    logo: {
        width: 200,  // Adjust width
        height: 150, // Adjust height
        alignSelf: 'center'
    },
    label: {
        margin: 8,
    },
});

export default Acknowledge;

