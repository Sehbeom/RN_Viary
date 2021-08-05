import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Preview extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.85}>
                    <View style={styles.previewbox}>
                        <View style={styles.datesection}>
                            <Text style={styles.datestyle}>{this.props.date}</Text>
                        </View>
                        <View style={styles.textsection}>
                            <Text style={styles.textstyle}>"{this.props.text}"</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:'white',
    marginTop:wheight*0.01,
    marginBottom:wheight*0.01,
  },
  previewbox:{
      width:wwidth*0.85,
      height:wheight*0.2,
      backgroundColor:'#5a5a5a',

      alignItems:'center',
      justifyContent:'center',

      borderRadius:10,

      shadowColor: '#000000',
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      shadowOffset: {
          width: 0,
          height: 3,
      },
  },
  datesection:{
      position:'absolute',

      height:wheight*0.02,
      justifyContent:'center',

      top:wheight*0.01,
      left:wwidth*0.03,
  },
  textsection:{
      alignItems:'center',
      justifyContent:'center',
  },

  datestyle:{
      fontSize:wwidth*0.035,
  },
  textstyle:{
      fontSize:wwidth*0.05,
  }
});
