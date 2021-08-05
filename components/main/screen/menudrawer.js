import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default function MenuDrawer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.profileset}>
                <FontAwesome name="user-circle" size={wwidth * 0.3} color="#C7CEB4" />
                <Text style={styles.nickname}>닉네임</Text>
                <TouchableOpacity 
                activeOpacity={0.5}
                style={styles.editbtn}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Edit</Text>
                </TouchableOpacity>
            </View>
            <DrawerItem
                label="Logout"
                icon={({ focused, color, size }) => <MaterialIcons name="logout" size={wwidth * 0.08} color="#78854f" />}
                onPress={() => props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Account' }],
                })}
                labelStyle={styles.labelst}
            />
            <DrawerItem
                label="Settings"
                icon={({focused,color,size})=><Ionicons name="settings" size={wwidth*0.08} color="#78854f" />}
                onPress={() => props.navigation.navigate('Settings')}
                labelStyle={styles.labelst}
            />
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileset:{
    //   borderWidth:1,
      width:'100%',
      height:'40%',
      alignItems:'center',
      justifyContent:'center',

      paddingTop:wheight*0.06,
  },

  nickname:{
      fontSize:wwidth*0.08,
      marginTop:wheight*0.03,
      color:'#78854f',
  },

  editbtn:{
      position:'absolute',
    //   borderWidth:1,
      width:wwidth*0.11,
      height:wheight*0.025,
      borderRadius:20,
      
      alignItems:'center',
      justifyContent:'center',

      right:wwidth*0.13,
      bottom:wheight*0.13,

      backgroundColor:'#78854f'

  },

  labelst:{
      fontSize:wwidth*0.08,
      color:'#78854f',
      marginBottom:2,
  },

});
