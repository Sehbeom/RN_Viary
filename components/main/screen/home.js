import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Dimensions, ScrollView, SafeAreaView } from 'react-native';

import Preview from '../components/preview';
import Header from '../components/header';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header onpress={()=>this.props.navigation.openDrawer()}/>
                </View>
                <ScrollView style={{flex:8.5}}>
                    <View style={styles.body}>
                        <Preview date="2021년 07월 12일" text="오늘 즐거웠다."/>
                        <Preview date="2021년 07월 12일" text="오늘 즐거웠다."/>
                        <Preview date="2021년 07월 12일" text="오늘 즐거웠다."/>
                        <Preview date="2021년 07월 12일" text="오늘 즐거웠다."/>
                        <Preview date="2021년 07월 12일" text="오늘 즐거웠다."/>
                    </View>
                </ScrollView>
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
    //   borderWidth:1,
      flex:0.18,

      alignItems:'center',
      justifyContent:'center',

      width:wwidth,
  },
  body:{
      width:wwidth,
      alignItems:'center',
      justifyContent:'center',
  }
});
