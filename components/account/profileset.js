import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import Input from './acc_components/input';
import Button from './acc_components/button';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class ProfileSet extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.iconbox}
                activeOpacity={0.6}>
                    <FontAwesome name="user-circle" size={wwidth*0.4} color="#78854F" />
                </TouchableOpacity>
                <View style={styles.inputbox}>
                    <Input placeholder="닉네임" />
                </View>
                <View style={styles.btnbox}>
                    <Button btntext="가입완료" onpress={()=>this.props.navigation.navigate('SuComplete')} />
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',

    },

    iconbox:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        // borderWidth:1,
    },

    inputbox:{
        flex:1,
        justifyContent:'center',
        // borderWidth:1,
    },

    btnbox:{
        flex:1,
        // borderWidth:1,
    }

});
