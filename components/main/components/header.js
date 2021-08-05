import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerbox}>
                    <View style={styles.menubox}>
                        <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={()=>this.props.onpress()}>
                            <Feather name="menu" size={wheight*0.05} color="#3b5217" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.titlestyle}>
                        Viary
                    </Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerbox:{
      width:wwidth,
      height:wheight*0.12,

      backgroundColor:'#78854f',

      borderBottomStartRadius:40,
      borderBottomEndRadius:40,

      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      paddingTop:wheight*0.02,
  },

  menubox:{
      position:'absolute',
    //   borderWidth:1,
      left:wwidth*0.05,
      top:wheight*0.046,

  },

  titlestyle:{
      color:'white',
      fontSize:wwidth*0.08,
      fontWeight:'bold',

  }
});
