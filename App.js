import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Account from './components/account/account';
import Main from './components/main/main';



const RootStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Account" component={Account} options={{headerShown:false}} />
          <RootStack.Screen name="Main" component={Main} options={{headerShown:false}} />
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
