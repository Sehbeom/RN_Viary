import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Input extends React.Component {
    render() {
        return (
            <View style={styles.inputbox}>
                <TextInput style={styles.inputst} placeholder={this.props.placeholder} />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputbox: {
        alignItems: 'center',
        justifyContent: 'center',

        width: wwidth * 0.8,
        height: wheight * 0.08,
        borderRadius: 20,

        borderWidth: 1,
        borderColor: '#78854F',

        margin: 5,

        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    inputst: {
        width: wwidth * 0.7,
        fontSize: wheight * 0.022,
    },
});
