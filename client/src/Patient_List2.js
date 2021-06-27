import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function PatientList() {
    return (
        <View style={PatientListStyles.PatientList}>
            <View style={PatientListStyles.Toolbar}>
                <View style={PatientListStyles.ToolbarBackground} />
                <Svg id='SignOut' />
                <Svg id='House' />
            </View>
            <View style={PatientListStyles.BigPatientBox} />
            <Text style={PatientListStyles.Patients}>
                Patients:
      </Text>
            <View style={PatientListStyles.Patient1}>
                <View style={PatientListStyles.Patient1Row} />
                <Text style={PatientListStyles.JaneDoe}>
                    Jane Doe
        </Text>
                <Text style={PatientListStyles.SymptomsChestpainCoughing}>
                    Symptoms: Chest pain, Coughing
        </Text>
            </View>
            <View style={PatientListStyles.Patient2}>
                <View style={PatientListStyles.Patient2Row} />
                <Text style={PatientListStyles.JohnDoe}>
                    John Doe
        </Text>
                <Text style={PatientListStyles.SymptomsDifficultyBreathing}>
                    Symptoms: Difficulty Breathing
        </Text>
            </View>
            <View style={PatientListStyles.Patient3}>
                <View style={PatientListStyles.Patient3Row} />
                <Text style={PatientListStyles.JohnSmith}>
                    John Smith
        </Text>
                <Text style={PatientListStyles.SymptomsBrokennose}>
                    Symptoms: Broken nose
        </Text>
            </View>
            <View style={PatientListStyles.Patient4}>
                <View style={PatientListStyles.Patient4Row} />
                <Text style={PatientListStyles.DanikaPena}>
                    Danika Pena
        </Text>
                <Text style={PatientListStyles.SymptomsSoreback}>
                    Symptoms: Sore back
        </Text>
            </View>
            <View style={PatientListStyles.Patient5}>
                <View style={PatientListStyles.Patient5Row} />
                <Text style={PatientListStyles.BobRoss}>
                    Bob Ross
        </Text>
                <Text style={PatientListStyles.SymptomsClickingjoints}>
                    Symptoms: Clicking joints
        </Text>
            </View>
            <View style={PatientListStyles.Patient6}>
                <View style={PatientListStyles.Patient6Row} />
                <Text style={PatientListStyles.LesterKeller}>
                    Lester Keller
        </Text>
                <Text style={PatientListStyles.SymptomsRedeyes}>
                    Symptoms: Red eyes
        </Text>
            </View>
            <View style={PatientListStyles.Patient7}>
                <View style={PatientListStyles.Patient7Row} />
                <Text style={PatientListStyles.GiacomoGibbs}>
                    Giacomo Gibbs
        </Text>
                <Text style={PatientListStyles.SymptomsBrokenarm}>
                    Symptoms: Broken arm
        </Text>
            </View>
        </View>
    )
}

const PatientListStyles = StyleSheet.create({
    PatientList: {
        position: 'relative',
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#ffffff',
    },
    Toolbar: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    ToolbarBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 75,
        height: window.innerHeight,
        backgroundColor: 'blue'
    },
    BigPatientBox: {
        position: 'absolute',
        left: 157.5,
        top: 65,
        width: 1680,
        height: 950,
        backgroundColor: '#c4c4c4',
        borderRadius: 15,
    },
    Patients: {
        position: 'absolute',
        left: 175,
        top: 65,
        width: 233,
        height: 93,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 64,
        fontWeight: '700',
        lineHeight: 75,
        textAlignVertical: 'center',
    },
    Patient1: {
        position: 'absolute',
        left: 198,
        top: 158,
        width: 1602,
        height: 70,
    },
    Patient1Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    JaneDoe: {
        position: 'absolute',
        left: 25,
        top: 17,
        width: 279,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsChestpainCoughing: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    Patient2: {
        position: 'absolute',
        left: 198,
        top: 283,
        width: 1602,
        height: 70,
    },
    Patient2Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    JohnDoe: {
        position: 'absolute',
        left: 25,
        top: 18,
        width: 279,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsDifficultyBreathing: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    Patient3: {
        position: 'absolute',
        left: 198,
        top: 408,
        width: 1602,
        height: 70,
    },
    Patient3Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    JohnSmith: {
        position: 'absolute',
        left: 25,
        top: 18,
        width: 279,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsBrokennose: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    Patient4: {
        position: 'absolute',
        left: 198,
        top: 533,
        width: 1602,
        height: 70,
    },
    Patient4Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    DanikaPena: {
        position: 'absolute',
        left: 25,
        top: 18,
        width: 279,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsSoreback: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    Patient5: {
        position: 'absolute',
        left: 198,
        top: 658,
        width: 1602,
        height: 70,
    },
    Patient5Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    BobRoss: {
        position: 'absolute',
        left: 25,
        top: 18,
        width: 279,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsClickingjoints: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    Patient6: {
        position: 'absolute',
        left: 198,
        top: 783,
        width: 1602,
        height: 70,
    },
    Patient6Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    LesterKeller: {
        position: 'absolute',
        left: 25,
        top: 18,
        width: 279,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsRedeyes: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    Patient7: {
        position: 'absolute',
        left: 198,
        top: 908,
        width: 1602,
        height: 70,
    },
    Patient7Row: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1600,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    GiacomoGibbs: {
        position: 'absolute',
        left: 25,
        top: 18,
        width: 315,
        height: 35,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },
    SymptomsBrokenarm: {
        position: 'absolute',
        left: 837,
        top: 8,
        width: 765,
        height: 55,
        color: '#000000',
        fontFamily: 'Yrsa, sans-serif',
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 56.25,
        textAlignVertical: 'center',
    },

})
