import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.buttonbox}
                activeOpacity={0.7}
                onPress={()=>this.props.onpress()}
                >
                <Text style={styles.buttonst}>{this.props.btntext}</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonbox: {
        alignItems: 'center',
        justifyContent: 'center',

        width: wwidth * 0.8,
        height: wheight * 0.07,
        borderRadius: 50,

        // borderWidth:1,
        backgroundColor: '#78854F',

        margin: 5,

        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    buttonst: {
        // width:wwidth*0.7,
        fontSize: wheight * 0.02,
        fontWeight: 'bold',
        color: 'white',

    },
});
