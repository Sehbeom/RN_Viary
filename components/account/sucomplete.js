import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Input from './acc_components/input';
import Button from './acc_components/button';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class SuComplete extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconbox}>
                    <AntDesign 
                    style={{        
                        shadowColor: '#000000',
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                     }} 
                    name="checkcircle" size={wwidth*0.4} color="#78854F" />
                    <Text style={styles.compltext}>가입완료!</Text>
                </View>
                <View style={styles.textbox}>
                    {/* <Text style={styles.textst}>{this.props.username} 님!</Text> */}
                    <View style={{borderBottomWidth:0.5, }}>
                        <Text style={styles.textst}>장세범 님!</Text>
                    </View>
                    <Text style={styles.textst}>viary의 회원이 되신 걸 환영합니다!</Text>
                </View>
                <View style={styles.btnbox}>
                    <View>
                        <Button btntext="시작하기" onpress={()=>this.props.navigation.popToTop()} />
                    </View>
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
        flex:1.1,
        alignItems:'center',
        justifyContent:'flex-end',
        // borderWidth:1,
    },

    compltext:{
        fontSize:wwidth*0.05,
        fontWeight:'bold',
        marginTop:15,
        color:'#78854F',
    },

    textbox:{
        flex:0.9,
        justifyContent:'center',
        alignItems:'center',

        // borderWidth:1,
    },

    textst:{
        fontSize:wwidth*0.04,
        marginTop:15,
        color:'#676767',
    },

    btnbox:{
        flex:1,
        // borderWidth:1,
    }

});
