import React, { Component } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Alert,
    BackHandler,
    StatusBar
 } from 'react-native';

import { connect } from  'react-redux';
import { Colors, Metrics, StylesGeneral, Fonts, Functions } from '../../themes';

import {  
    Button,
} from 'react-native-elements';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import Swiper from 'react-native-swiper';

class SliderPermission extends Component{

    constructor(props){
        super(props);
        this.state = {
            permission: false,
            permissionGPS: false
        };      
        this.locationPermission = Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_ALWAYS;
    }

    async componentDidMount(){
        await this.statePermissioGPS();
        const cpermission = await AsyncStorage.getItem('@permission');
        if(cpermission != 'no'){
            if(this.state.permissionGPS){
                AsyncStorage.setItem('@permission', 'si');
                this.props.navigation.navigate('Loading');
            }else{
                AsyncStorage.setItem('@permission', 'no');
            }
        }else{
            if(this.state.permissionGPS){
                AsyncStorage.setItem('@permission', 'si');
                this.props.navigation.navigate('Loading');
            }
        }
        this.setState({ 
            permission: cpermission  == 'no' ? false : true
        });
    }

    //PERMISOS
    checkPermissionStatus = (permission) => {
        check(permission)
        .then((result) =>{
            switch (result) {
                case RESULTS.DENIED:
                    this.requestPermission(permission);
                break;
                case RESULTS.GRANTED:
                    if(permission === this.locationPermission)
                        this.setState({permissionGPS: true});
                    
                    if (this.state.permissionGPS) {
                        this.setState({permission: true});
                    }
                break;
                case RESULTS.BLOCKED:
                    this.permissionErrorNotification();
                break;
            }
        })
        .catch((error) =>{ console.error('errorrrr', error)})
    }
        

    permissionErrorNotification = () => {
        Alert.alert(
            'Se necesitan permisos adicionales',
            'Llévame necesita acceder al GPS de tu dispositivo para funcionar, por favor concede los permisos para continuar usando la aplicación.',
            [
            {text: 'Entendido', onPress: () => BackHandler.exitApp()}
            ]
        );
    }

    requestPermission = (permission) => {
        request(permission)
        .then((result) => {
            switch (result) {
            case RESULTS.DENIED:
                // console.log('The permission has not been requested / is denied but requestable',);
                this.permissionErrorNotification();
                break;
            case RESULTS.GRANTED:
                if(permission === this.locationPermission)
                    this.setState({permissionGPS: true, indexSwiper: 1});

                if(this.state.permissionGPS){
                    this.setState({permission: true});
                }
                break;
            case RESULTS.BLOCKED:
                // console.log('The permission is denied and not requestable anymore');
                this.permissionErrorNotification();
                break;
            }
        })
        .catch((error) => {})
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
                    this.setState({permissionGPS: true, indexSwiper: 1});
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
            <SafeAreaView style={[styles.safContainer, { backgroundColor: Colors.primarySemiLight }]}>
                  <StatusBar barStyle="dark-content" backgroundColor={Colors.primarySemiLight}/>
                    <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={this.state.indexSwiper}> 
                        <View style={styles.slide1}>
                            <View style={styles.sliders}>
                                {/* <Image 
                                    source={require('../../../assets/permission_gps.png')} 
                                    style={styles.logo}
                                    /> */}
                            </View>
                            <View styles={styles.buttons}>
                                <Text style={styles.title}>Solicitando permiso GPS</Text>
                                <Text style={styles.text}>{ this.state.permissionGPS ? 'Gracias por concedernos el permiso, puedes continuar deslizando hacia la derecha.' : 'Llévame necesita acceder al  GPS de tu dispositivo para funcionar, por favor concede los permisos a la aplicación persionando en el botón "Conceder", y luego permitir.' }</Text>
                                <Button
                                    title={ this.state.permissionGPS ? 'Permitido' : 'Conceder' }
                                    titleStyle={StylesGeneral.fontPrimaryButton}
                                    buttonStyle={StylesGeneral.buttonSecond}
                                    containerStyle={StylesGeneral.marginvertical}
                                    onPress={() => this.checkPermissionStatus(this.locationPermission)}
                                    disabled={this.state.permissionGPS}
                                    /> 
                            </View>
                        </View>
                        

                        <View style={styles.slide4}>
                            {(this.state.permission) && ( <View style={styles.sliders}>
                                {/* 
                                <Image 
                                    source={require('../../../assets/permission_complete.png')} 
                                    style={styles.logo}
                                    /> 
                                */}
                            </View>)}

                            {(this.state.permission) && ( <Text style={styles.title}>Te damos la bienvenida a </Text>)}
                            {(this.state.permission) && (<Image 
                                    source={require('../../../assets/logo-intelli.png')} 
                                    style={{marginTop: -10,width: 150, height: 50, resizeMode: 'contain',}}
                                    />
                                    )}
                                
                            <Text style={styles.text}>{ this.state.permission ? '¡Ya puedes ingresar a nuestra plataforma!' : 'Para ingresar a la aplicación es necesario conceder los permisos.'}</Text>
                            {(this.state.permission) && ( 
                                <Button
                                    title="Ingresar"
                                    titleStyle={StylesGeneral.fontPrimaryButton}
                                    buttonStyle={StylesGeneral.buttonSecond}
                                    
                                    containerStyle={[{ width: '100%' }, StylesGeneral.marginvertical]}
                                    onPress={() => this.props.navigation.navigate('Loading') }
                                    />
                            )}
                        </View>
                    </Swiper>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    logo: {
        resizeMode: 'contain',
        height: 250,
        width: 250,
    },
    title: {
        ...Fonts.fontBold,
        marginVertical: 5,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primarySemiLight,
        padding: 20
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primarySemiLight,
        padding: 20
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primarySemiLight,
        padding: 20
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primarySemiLight,
        padding: 20
    },
    buttons:{
    },
    text: {
        ...Fonts.fontRegular,
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    }
})

export default connect(null, null)(SliderPermission);
