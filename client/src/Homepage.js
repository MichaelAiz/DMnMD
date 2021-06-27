import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import background_image from './Images/istockphoto-1220059380-612x612-blur.png';
import logo_image from './Images/DMnMD Logo 2.png';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import DoctorDashboard from './Doctor_Dashboard';

function onClick() {
    ReactDOM.render(
        <React.StrictMode>
            <DoctorDashboard />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

function Homepage() {
    return (
        <View style={HomepageStyles.Homepage}>
            <img
                src={background_image}
                style={{
                    width: window.innerWidth,
                    height: window.innerHeight
                }} />
            <img
                src={logo_image}
                style={{
                    position: "absolute",
                    left: 15,
                    top: 5,
                    width: 199,
                    height: 64
                }} />
            <img
                src={logo_image}
                style={{
                    position: "absolute",
                    left: (window.innerWidth / 2) - (513 / 2),
                    top: 164,
                    width: 513,
                    height: 165
                }} />
            {/*<View style={HomepageStyles.LoginButton}>*/}
            {/*    <View style={HomepageStyles.Rectangle2} />*/}
            {/*    <Text style={HomepageStyles.LoginText}>*/}
            {/*        Login*/}
            {/*    </Text>*/}
            {/*</View>*/}

            {/*<View style={HomepageStyles.LoginButton2}>*/}
            {/*    <Button*/}
            {/*        title="Login"*/}
            {/*        color="#a900e4"*/}

            {/*     />*/}
            {/*</View>*/}

            <TouchableOpacity onPress={onClick} style={HomepageStyles.LoginButton3}>
                <Text style={HomepageStyles.LoginButton3Text}> Login </Text>
            </TouchableOpacity>

            <Text style={HomepageStyles.GetStarted}>
                Get Started
      </Text>
            <Text style={HomepageStyles.TheFutureofMedicalScreeningandDiagnosis}>
                The Future  of Medical
                Screening and Diagnosis
      </Text>
        </View>
    )
}

const HomepageStyles = StyleSheet.create({
    Homepage: {
        position: 'relative',
        width: window.innerWidth,
        height: window.innerHeight,
        borderColor: '#000000',
        borderWidth: 0,
    },
    //LoginButton: {
    //    position: 'absolute',
    //    left: 1780,
    //    top: 30,
    //    width: 120,
    //    height: 40,
    //},
    //Rectangle2: {
    //    position: 'absolute',
    //    left: 0,
    //    top: 0,
    //    width: 120,
    //    height: 40,
    //    backgroundColor: '#a900e4',
    //    borderRadius: 9,
    //},
    //LoginText: {
    //    position: 'absolute',
    //    left: 10,
    //    top: 2,
    //    width: 99,
    //    height: 37,
    //    color: '#ffffff',
    //    fontFamily: 'Yrsa, sans-serif',
    //    fontSize: 30,
    //    fontWeight: '700',
    //    lineHeight: 35.15625,
    //    textAlign: 'center',
    //    textAlignVertical: 'center',
    //},
    GetStarted: {
        position: 'absolute',
        left: window.innerWidth - 380,
        top: 30,
        width: 200,
        height: 40,
        color: '#ffffff',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 35.15625,
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    TheFutureofMedicalScreeningandDiagnosis: {
        position: 'absolute',
        left: (window.innerWidth / 2) - (950 / 2) + 30,
        top: '40%',
        width: 950,
        height: 234,
        color: '#ffffff',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 96,
        fontWeight: '700',
        lineHeight: 112.5,
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15
    },
    //LoginButton2: {
    //    position: 'absolute',
    //    left: 1765,
    //    top: 30,
    //    width: 120,
    //    height: 80,
    //},
    LoginButton3: {
        position: 'absolute',
        left: window.innerWidth - 150,
        top: 30,
        width: 100,
        height: 35,
        backgroundColor: "#a900e4",
        padding: 5,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: +1, height: 1 },
        shadowRadius: 5,
    },
    LoginButton3Text: {
        marginTop: 1,
        textAlign: "center",
        color: "white",
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
})

export default Homepage;