import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Dimensions,TouchableOpacity, Animated,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: new Animated.Value(0),
            position: new Animated.ValueXY({x:0,y:0}),
            waitingtime:new Animated.Value(0),
            fadeVal:new Animated.Value(0),
            isFaded : false,
        };
    }

    componentDidMount() {
        // this._moveX();
    }

    _moveX(){
        Animated.decay(
            this.state.position,{
                // toValue : {x:0,y:0},
                velocity:-0.2,
            }
        ).start(()=>this._fadeIn());
    }

    _waitAnimate(){
        Animated.timing(this.state.waitingtime,{
                delay:500,
            }
        ).start(()=>this._moveX());
    }

    _fadeIn(){
        Animated.timing(this.state.fadeVal,{
            toValue:1,
            duration:800,
        }).start(()=>{this.setState({isFaded:true})});
    }

    render() {
        return (
            <LinearGradient 
            colors={['#FFFFA0', '#E6F2D9']}
            style={styles.container}>
                <View style={styles.logobox}>
                    <Animated.View 
                    style={{
                        transform:[
                            {translateY:this.state.position.y},
                        ],
                        }}>
                        <Image 
                        style={styles.logostyle} 
                        source={require('../../image/viary_logo.png')}
                        onLoad={()=>this._waitAnimate()} 
                        />
                        <Text style={styles.logotext}>viary</Text>
                    </Animated.View>
                </View>
                <View style={styles.btnbox}>
                    <Animated.View style={{
                        opacity:this.state.fadeVal,
                        // borderWidth:1,
                        width:wwidth*0.8,
                        height:wheight*0.19,
                
                        justifyContent:'space-around',
                        alignItems:'center',
                        }}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.btnst}
                            onPress={()=>{
                                if(this.state.isFaded === true){
                                this.props.navigation.navigate('Login')
                            }
                                }}>
                            <Text style={styles.textst}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.btnst}
                            onPress={()=>{
                                if(this.state.isFaded === true){
                                this.props.navigation.navigate('SignUp')
                                }
                                }}>
                            <Text style={styles.textst}>회원가입</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logobox: {
    },

    logostyle: {
        width: wwidth * 0.3,
        height: wwidth * 0.3,
    },

    logotext: {
        color: '#78854F',
        fontSize: wwidth * 0.15,
        //   fontFamily:'Sunflower-Medium'
    },

    btnbox:{
        top:wheight*0.55,
        // borderWidth:1,
        width:wwidth*0.8,
        height:wheight*0.19,

        justifyContent:'space-around',
        alignItems:'center',
        position:'absolute',
    },

    btnst:{
        // borderWidth:1,
        width:wwidth*0.8,
        height:wheight*0.07,

        borderRadius:20,

        backgroundColor:'white',

        alignItems:'center',
        justifyContent:'center',

        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    textst:{
        fontSize:wwidth*0.045,
        color:'#78854f',
    }

});
