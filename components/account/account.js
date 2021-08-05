import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../appstart/splash';
import Login from './login';
import SignUp from './signup';
import ProfileSet from './profileset';
import SuComplete from './sucomplete';



const AccountStack = createStackNavigator();

export default class Account extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AccountStack.Navigator>
                    <AccountStack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
                    <AccountStack.Screen name="Login" component={Login} options={{ headerBackTitleVisible: false, title:'로그인'}} />
                    <AccountStack.Screen name="SignUp" component={SignUp} options={{ headerBackTitleVisible: false, title:'회원가입' }} />
                    <AccountStack.Screen name="ProfileSet" component={ProfileSet} options={{ headerBackTitleVisible: false, title:'프로필 설정' }} />
                    <AccountStack.Screen name="SuComplete" component={SuComplete} options={{ headerBackTitleVisible: false, title:'가입 완료' }} />
                </AccountStack.Navigator>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
