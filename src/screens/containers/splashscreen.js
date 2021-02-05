import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native';

import { connect } from  'react-redux';
import { Colors, Metrics, } from '../../themes';

import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            permission: false,
            permissionGPS: false
        };
    }

    async componentDidMount(){
        await this.statePermissioGPS();
        const cpermission = await AsyncStorage.getItem('@permission');
        if(cpermission == 'no'){
            if(this.state.permissionGPS){
                AsyncStorage.setItem('@permission', 'si');
                this.props.navigation.navigate('Loading');
            }else{
                AsyncStorage.setItem('@permission', 'no');
                this.props.navigation.navigate('SliderPermission');
            }
        }else{
            if(this.state.permissionGPS){
                AsyncStorage.setItem('@permission', 'si');
                this.props.navigation.navigate('Loading');
            }else{
                AsyncStorage.setItem('@permission', 'no');
                this.props.navigation.navigate('SliderPermission');
            }
        }
    }

    async statePermissioGPS(){
        const locationPermission = Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_ALWAYS;
        check(locationPermission)
        .then((result) =>{
            switch (result) {
                case RESULTS.DENIED:
                    this.setState({permissionGPS: false});
                    break;
                case RESULTS.GRANTED:
                    this.setState({permissionGPS: true});
                    break;
                case RESULTS.BLOCKED:
                    this.setState({permissionGPS: false});
                    break;
            }
        })
        .catch((error) =>{  this.setState({permissionGPS: false}); })
    }

    render(){

        return(
            <SafeAreaView style={[styles.safContainer, { backgroundColor: Colors.primary }]}>
                <Image source={require('../../../assets/logo-splash.png')} style={{width: 170, height: 170} } />
                <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    imageBackground: {
        flex: 1,
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        alignContent: 'stretch',
        resizeMode: 'contain'
    }
});


export default connect(null, null)(SplashScreen);