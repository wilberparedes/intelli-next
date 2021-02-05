import React, { Component } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
    Alert,
    BackHandler,
    Switch,
    TouchableHighlight,
    // CheckBox,
    StatusBar
 } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CheckBox from '@react-native-community/checkbox';

import { connect } from  'react-redux';
import { Colors, Metrics, StylesGeneral, Fonts, Functions } from '../../themes';


import {  
    Input,
    Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

// import Header from '../../sections/components/header-access';
// import API from '../../../providers/api';


class HomeAccess extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading:false,
            username: '',
            password: '',
            rememberMe: false,
            userId: null
        };        
    }

    async componentDidMount(){
        // OneSignal.addEventListener('ids', (device) => {
        //     this.setState({ userId:device.userId });
        // });

        const username2 = await AsyncStorage.getItem('@storage_Key');
        const pass = await AsyncStorage.getItem('@pass');
        console.log(username2);
        this.setState({ 
            rememberMe: username2 ? true : false ,
            username: username2 || "",
            password: pass || "",
        });

        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('HomeAccess');
            return true;
        });

        console.log(this.props)

    }

    UNSAFE_componentWillUnmount(){
        this.backHandler.remove();
    }


    registerHandlePress = () => {
        this.props.navigation.navigate('Register');
    }

    ForgotPasswordHandlePress = () => {
        this.props.navigation.navigate('ForgotPassword');
    }

    toggleRememberMe = value => {
        this.setState({ rememberMe: value })
        if (value === true) {
            //user wants to be remembered.
            this.rememberUser();
        }
        else{
            this.forgetUser();
        }
    }
    
    rememberUser = async () => {
        await AsyncStorage.setItem('@storage_Key', this.state.username);
        await AsyncStorage.setItem('@pass', this.state.password);
    }

    forgetUser = async () => {
        await AsyncStorage.removeItem('@storage_Key');
        await AsyncStorage.removeItem('@pass');
    }

    switchRemember = () =>{
        if(this.state.rememberMe){
            this.setState({rememberMe: false});
        }else{
            this.setState({rememberMe: true});
        }
    }

    loginHandlePress = async () => {
        console.log('aqui voy..');
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        console.log(this.state);
        if(this.state.username.trim() == ''){
            Functions.alertOK('Mensaje', 'Por favor, ingresar su Correo Electrónico.', true);
            return false;
        }
        else if(reg.test(this.state.username) === false){
            Functions.alertOK('Mensaje', 'Correo Electrónico no es correcto.', true);
            return false;
        }
        else if(this.state.password.trim() == ''){
            Functions.alertOK('Mensaje', 'Por favor, ingrese su Contraseña', true)
        }
        else {
            this.setState({loading: true});
            const rLogin = API.Login(this.state.username, this.state.password, 'CO', 'Atlántico', 'Barranquilla') //this.props.detailsLocality.country, this.props.detailsLocality.administrative_area_level_1, this.props.detailsLocality.locality
                .then((data) => data.json())
                .then((dataJson) => {
                    console.log(dataJson);
                    if(dataJson.ok){
                        const token = dataJson.token;
                        this.props.dispatch({
                            type: 'SET_USER',
                            payload: {
                                token,
                                userData: dataJson.usuario
                            }
                        })
                        // this.props.navigation.navigate('Loading');
                        // this.props.dispatch(
                        //     NavigationActions.navigate({
                        //       routeName: 'Loading'
                        //     })
                        // )
                          
                    }else{
                        this.setState({loading: false});
                        Functions.alertOK('Advertencia', dataJson.message, true);
                    }
                })
                .catch((error) => {
                    this.setState({loading: false});
                    console.error("erroraa");
                    console.error(error);
                });
        }
    }
    

    render(){

        return(
            <SafeAreaView style={[styles.safContainer, { backgroundColor: Colors.primarySemiLight }]}>
                {/* <ImageBackground source={require('../../../assets/image-home-login.png')} style={styles.imageBackground} > */}

                    {/* <Header onPress={()=> { this.props.navigation.navigate('HomeAccess'); }} /> */}

                    <View style={styles.container}>
                        
                        <Image 
                            source={require('../../../assets/logo-intelli.png')} 
                            style={styles.logo}
                            />

                        <KeyboardAvoidingView style={{ width: '100%'}} behavior="padding" keyboardVerticalOffset={1} enabled>

                            <Input
                                placeholder='Correo electrónico'
                                underlineColorAndroid={'transparent'} 
                                leftIcon={
                                    <Icon
                                        name='envelope'
                                        size={30}
                                        color={Colors.primary}
                                        />
                                }
                                containerStyle={StylesGeneral.marginverticalInput}
                                inputStyle={StylesGeneral.inputTextPrimary}
                                keyboardType={'email-address'}
                                autoCompleteType={'email'}
                                textContentType={'emailAddress'}
                                inputContainerStyle={StylesGeneral.inputWhiteWithBorder}
                                placeholderTextColor={Colors.placeholderColorPrimary}
                                onChangeText={(value) => this.setState({username: value.toLowerCase()})}
                                value={this.state.username}
                                />

                            <Input
                                placeholder='Contraseña'
                                underlineColorAndroid={'transparent'} 
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={30}
                                        color={Colors.primary}
                                    />
                                }
                                containerStyle={StylesGeneral.marginverticalInput}
                                inputStyle={StylesGeneral.inputTextPrimary}
                                inputContainerStyle={StylesGeneral.inputWhiteWithBorder}
                                placeholderTextColor={Colors.placeholderColorPrimary}
                                textContentType={'password'}
                                secureTextEntry
                                onChangeText={(value) => this.setState({password: value})}
                                value={this.state.password}
                                />

                            <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent:'flex-end', alignContent:'flex-start', textAlign:'center', marginvertical: 16, paddingVertical: 16 }}>
                                <CheckBox value={this.state.rememberMe}  tintColors={{ true: Colors.second, false: Colors.second }} onValueChange={(value) => this.toggleRememberMe(value)}/>
                                <Text onPress={()=> { this.switchRemember() }} style={[styles.textWhite, {fontSize: 16, textAlign: 'left', color: '#fff'}]}>Recuérdame</Text>
                            </View>
                        </KeyboardAvoidingView>

                        {/* <Button
                            title="Iniciar Sesión"
                            titleStyle={StylesGeneral.fontPrimaryButton}
                            buttonStyle={StylesGeneral.buttonSecond}
                            containerStyle={[{ width: '100%', paddingHorizontal: 10 }, StylesGeneral.marginvertical]}
                            onPress={this.loginHandlePress}
                            // loading={this.state.loading}
                            // disabled={this.state.loading}
                            /> */}
                        <Button
                            title="Iniciar Sesión"
                            titleStyle={StylesGeneral.fontPrimaryButton}
                            buttonStyle={StylesGeneral.buttonSecond}
                            containerStyle={[{ width: '100%', }, StylesGeneral.marginvertical]}
                            // onPress={() => this.props.navigation.navigate('Loading') }
                            />
                        
                    </View>
                
                
                {/* </ImageBackground> */}
                <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark}/>

            </SafeAreaView>
        )

    }

}

const styles = StyleSheet.create({
    safContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    screen: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        flex:1
    },
    imageBackground: {
        // flex: 1,
        // height: Metrics.screenHeight,
        // width: Metrics.screenWidth,
        // alignContent: 'stretch',
        // resizeMode: 'contain'
    },
    container: {
        ...StylesGeneral.paddingContent,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        // width: 250,
        // height: 250,
        resizeMode: 'contain',
        marginBottom: 5,
        height: Metrics.screenHeight/5,
        width: Metrics.screenWidth/1.5,
        // marginTop: Metrics.screenHeight/70.0
    },
    contentText:{
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    textWhite:{
        ...Fonts.fontText,
        flex:1,
        fontSize: 16,
        color: Colors.second,
        paddingVertical: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        textAlign:'center'
    },
    contentButton:{
        width:'100%',
        textAlign: 'right',
        flexDirection: 'row',
    },
    //nuevo
    textButton:{
        ...StylesGeneral.fontPrimaryButton
    }
    // 0px 4px 4px rgba(0, 0, 0, 0.25);
})

function mapStateToProps(state){
    return{
        uuid: state.user.uuid,
    }
}
export default connect(mapStateToProps)(HomeAccess);
