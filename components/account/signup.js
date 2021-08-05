import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native';

import Input from './acc_components/input';
import Button from './acc_components/button';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class SignUp extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.logosection}>
                    <Image
                        style={styles.logostyle}
                        source={require('../../image/viary_logo.png')}
                    />
                </View>
                <View style={styles.inputsection}>
                    <Input placeholder="아이디"/>
                    <Input placeholder="비밀번호"/>
                    <TouchableOpacity 
                    style={styles.tosubox}
                    activeOpacity={0.5}
                    onPress={()=>this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.tosutext}>이미 계정이 있으신가요? 로그인</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsection}>
                    <Button 
                    onpress={()=>this.props.navigation.navigate('ProfileSet')}
                    btntext="회원가입"/>
                </View>
            <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    logosection: {
        flex: 1,
        //   borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logostyle: {
        width: wwidth * 0.3,
        height: wwidth * 0.3,
    },

    inputsection: {
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center',
        //   borderWidth:1,
    },

    tosubox:{
        marginTop:15,
        borderBottomWidth:0.5,
    },
    
    tosutext:{
        color:'gray',
    },

    buttonsection:{
        flex:1,
    }
});
