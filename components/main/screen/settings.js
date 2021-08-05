import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Page</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});
