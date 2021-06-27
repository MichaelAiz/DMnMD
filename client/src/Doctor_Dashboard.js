import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Svg } from 'react-native-svg'
import ReactDOM from 'react-dom';

// Pages
import Homepage from './Homepage.js';
import PatientList from './Patient_List2.js';

// Images
import home_icon from './Images/home.png';
import signout_icon from './Images/sign-out.png';
import users_icon from './Images/users.png';

function onClickHome() {
    ReactDOM.render(
        <React.StrictMode>
            <Homepage />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

function onClickPatient() {
    ReactDOM.render(
        <React.StrictMode>
            <PatientList />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

function cancer() {
    alert("You have cancer!!!")
}

function DoctorDashboard() {
    return (
        <View style={DoctorDashboardStyles.DoctorDashboard}>
            <View style={DoctorDashboardStyles.ToolbarBackground} />
                <img
                    src={home_icon}
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 10,
                        width: 55,
                    }}/>
                <TouchableOpacity onPress={onClickHome} style={DoctorDashboardStyles.HomeButton} />
                <img
                    src={users_icon}
                    style={{
                        position: "absolute",
                        top: 120,
                        left: 10,
                        width: 55,
                    }} />
                <TouchableOpacity onPress={onClickPatient} style={DoctorDashboardStyles.PatientButton} />
                <img
                    src={signout_icon}
                    style={{
                        position: "relative",
                        top: window.innerHeight - 60,
                        left: 17,
                        width: 45,
                        //height: 50,
                    }} />

            <TouchableOpacity onPress={cancer} style={DoctorDashboardStyles.CancerButton} />    {/*Definitely not the cancer button*/}

            <View style={DoctorDashboardStyles.Box4} />
            <View style={DoctorDashboardStyles.Box3} />
            <View style={DoctorDashboardStyles.Box2} />
            <View style={DoctorDashboardStyles.Box1} />
            <Text style={DoctorDashboardStyles.MostRecentPatient}>
                Most Recent Patient
      </Text>
        </View>
    )
}

const DoctorDashboardStyles = StyleSheet.create({
    DoctorDashboard: {
        position: 'relative',
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#ffffff',
    },
    ToolbarBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 75,
        height: window.innerHeight,
        backgroundColor: 'blue',
    },
    Box4: {
        position: 'absolute',
        left: 1041,
        top: 11 * (window.innerHeight / 20),
        width: 775,
        height: (window.innerHeight /2) - 100,
        backgroundColor: '#e2e2e2',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: +2, height: 1 },
        shadowRadius: 10,
    },
    Box3: {
        position: 'absolute',
        left: 165,
        top: 11 * (window.innerHeight / 20),
        width: 775,
        height: (window.innerHeight / 2) - 100,
        backgroundColor: '#e2e2e2',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: +2, height: 1 },
        shadowRadius: 10,
    },
    Box2: {
        position: 'absolute',
        left: 1041,
        top: (window.innerHeight / 20),
        width: 775,
        height: (window.innerHeight / 2) - 100,
        backgroundColor: '#e2e2e2',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: +2, height: 1 },
        shadowRadius: 10,
    },
    Box1: {
        position: 'absolute',
        left: 165,
        top: (window.innerHeight / 20),
        width: 775,
        height: (window.innerHeight / 2) - 100,
        backgroundColor: '#e2e2e2',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: +2, height: 1 },
        shadowRadius: 10,
    },
    MostRecentPatient: {
        position: 'absolute',
        left: 165,
        top: (window.innerHeight / 20) + 5,
        width: 310,
        height: 46,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 35.15625,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    HomeButton: {
        position: 'absolute',
        left: 0,
        top: 15,
        width: 75,
        height: 60,
    },
    PatientButton: {
        position: 'absolute',
        left: 0,
        top: 110,
        width: 75,
        height: 60,
    },
    CancerButton: {
        position: "absolute",
        left: 300,
        top: 900,
        //backgroundColor: 'green',
        width: 50,
        height: 50,
    },
})

export default DoctorDashboard;