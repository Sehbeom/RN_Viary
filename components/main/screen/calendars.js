import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Header from '../components/header';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Calendars extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header onpress={()=>this.props.navigation.openDrawer()}/>
                </View>
                <View style={styles.body}>
                    <View style={styles.calendarbox}>
                        <Calendar 
                        style={{width:wwidth,}}/>
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:'white',
  },
  header:{
      borderWidth:1,
      flex:1.5,

      width:wwidth,
  },
  body:{
      flex:8.5,
      alignItems:'center',
    //   justifyContent:'center',
  },
  calendarbox:{
      marginTop:wheight*0.1,
  },
});
