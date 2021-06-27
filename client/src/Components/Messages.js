import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ReactDOM from 'react-dom';

// Pages
import Homepage from './Homepage.js';
import PatientList from './Patient_List2.js';

// Images
import home_icon from './Images/home.png';
import signout_icon from './Images/sign-out.png';
import users_icon from './Images/users.png';
import message_icon from './Images/message.png';

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

function onClickMessage() {

}

function Messages() {
    return (
        <View style={MessageStyles.Messages}>
            <View style={MessageStyles.ToolbarBackground}>
                <img
                    src={home_icon}
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 10,
                        width: 55,
                    }}
                    alt="" />
                <TouchableOpacity onPress={onClickHome} style={MessageStyles.HomeButton} />

                <img
                    src={users_icon}
                    style={{
                        position: "absolute",
                        top: 120,
                        left: 10,
                        width: 55,
                    }}
                    alt="" />
                <TouchableOpacity onPress={onClickPatient} style={MessageStyles.PatientButton} />

                <img
                    src={message_icon}
                    style={{
                        position: "absolute",
                        top: 230,
                        left: 10,
                        width: 55,
                        height: 50,
                    }}
                    alt="" />
               
                <img
                    src={signout_icon}
                    style={{
                        position: "relative",
                        top: window.innerHeight - 60,
                        left: 17,
                        width: 45,
                    }}
                    alt="" />
                <TouchableOpacity onPress={onClickMessage} style={MessageStyles.MessageButton} />

                <TouchableOpacity onPress={onClickHome} style={MessageStyles.SignOutButton} />
            </View>
        </View>
        )
}

const MessageStyles = StyleSheet.create({
    Messages: {
        position: 'relative',
        width: window.innerWidth,
        height: window.innerHeight,
    },
    ToolbarBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 75,
        height: window.innerHeight,
        backgroundColor: 'blue',
    },
    HomeButton: {
        position: 'absolute',
        left: 0,
        top: 15,
        width: 75,
        height: 60,
        //backgroundColor: 'green'
    },
    PatientButton: {
        position: 'absolute',
        left: 0,
        top: 110,
        width: 75,
        height: 60,
    },
    MessageButton: {
        left: 0,
        top: 220,
        width: 75,
        height: 60,
        //backgroundColor: 'green'
    },
    SignOutButton: {
        left: 0,
        top: 800,
        width: 75,
        height: 60,
        //backgroundColor: 'green'
    },
})

export default Messages;