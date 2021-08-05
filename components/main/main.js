import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Home from './screen/home';
import Profile from './screen/profile';
import Category from './screen/category';
import Calendars from './screen/calendars';
import MenuDrawer from './screen/menudrawer';
import Settings from './screen/settings';


const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


const MainTab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

export default class Main extends React.Component {
    _MainBottomTab() {
        return (
            <View style={styles.container}>
                <MainTab.Navigator
                    tabBarOptions={{
                        inactiveBackgroundColor: '#fbfff7',
                        activeTintColor:'#78854f',
                        inactiveTintColor: '#C7CEB4',
                        showLabel: false,
                        tabStyle:{
                            height:wheight*0.1,
                            alignItems:'center',
                            justifyContent:'center',
                            paddingBottom:wheight*0.02,
                        },
                        safeAreaInsets:{
                            bottom:wheight*0.05,
                        }
                    }}

                    screenOptions={({route}) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Home') {
                                return <Ionicons name="home-sharp" size={wwidth*0.07} color={color} />;
                            }
                            else if (route.name === 'Profile') {
                                return <FontAwesome5 name="user-alt" size={wwidth*0.06} color={color} />;
                            }
                            else if (route.name === 'Calendars') {
                                return <Ionicons name="md-calendar-sharp" size={wwidth*0.06} color={color} />;
                            }
                            else if (route.name === 'Category') {
                                return <FontAwesome name="hashtag" size={wwidth*0.06} color={color} />;
                            }
                        }
                    })}>
                    <MainTab.Screen name="Home" component={Home} />
                    <MainTab.Screen name="Profile" component={Profile} />
                    <MainTab.Screen name="Calendars" component={Calendars} />
                    <MainTab.Screen name="Category" component={Category} />
                </MainTab.Navigator>
                <StatusBar style="auto" />
            </View>
        );
    }

    // _MainDrawerNav() {
    //     return(
    //         <MainDrawer.Navigator drawerContent={MenuDrawer}>
    //             <MainDrawer.Screen name="MainBottomTab" component={this._MainBottomTab} />
    //             <MainDrawer.Screen name="Settings" component={Settings} />
                
    //         </MainDrawer.Navigator>
    //     )
    // }

    _MainStack() {
        return (
            <MainStack.Navigator>
                <MainStack.Screen name="MainTab" component={this._MainBottomTab} options={{ headerShown: false }} />
                {/* <MainStack.Screen name="MainDrawerNav" component={this._MainDrawerNav} options={{headerShown:false}} /> */}
            </MainStack.Navigator>
        )
    }

    render() {
        return (
            // <View style={styles.container}>
            //     <MainStack.Navigator>
            //         <MainStack.Screen name="MainTab" component={this._MainBottomTab} options={{headerShown:false}} />
            //         {/* <MainStack.Screen name="MainDrawerNav" component={this._MainDrawerNav} options={{headerShown:false}} /> */}
            //     </MainStack.Navigator>
            // </View>

            <MainDrawer.Navigator
                drawerContent={(props) => <MenuDrawer {...props} />}
                screenOptions={{ swipeEnabled: false, }}
                drawerStyle={{
                    // backgroundColor: '#c6cbef',
                    width: wwidth * 0.8,
                }}
            >

                <MainDrawer.Screen name="MainBottomTab" component={this._MainBottomTab} />
                <MainDrawer.Screen name="Settings" component={Settings} />
            </MainDrawer.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
