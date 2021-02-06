import { actions } from '../../store';
import React, { Component } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    BackHandler,
    StatusBar
 } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import { connect } from  'react-redux';
import { Colors, Metrics, StylesGeneral, Fonts, Functions } from '../../themes';

import {  
    Input,
    Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class HomeAccess extends Component {

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
        if (value === true) this.rememberUser();
        else this.forgetUser();
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
        this.setState({rememberMe: !this.state.rememberMe});
    }

    loginHandlePress = async () => {
        const { aLogin } = this.props;
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
            console.log(this.props);
            const rLogin = aLogin(this.state.username, this.state.password)
                .then((data) => data.json())
                .then((dataJson) => {
                    console.log(dataJson);
                    if(!dataJson.error){
                        const token = dataJson.token;
                        this.props.dispatch({
                            type: 'SET_TOKEN',
                            payload: {
                                token
                            }
                        })
                        this.props.dispatch({
                            type: 'SET_USER',
                            payload: {
                                ...dataJson.user
                            }
                        })
                        this.props.dispatch({
                            type: 'SET_MODULES',
                            payload: {
                                ...dataJson.modules
                            }
                        })
                        this.props.dispatch({
                            type: 'SET_ALL',
                            payload: {
                                ...dataJson
                            }
                        })
                        this.props.navigation.dispatch(
                            CommonActions.reset({
                              index: 0,
                              routes: [
                                {
                                  name: 'Loading',
                                  params: { user: 'init' },
                                },
                              ],
                            })
                        );
                          
                    }else{
                        this.setState({loading: false});
                        Functions.alertOK('Advertencia', this.rMessage(dataJson.msg), true);
                    }
                })
                .catch((error) => {
                    this.setState({loading: false});
                    console.error("erroraa");
                    console.error(error);
                });
        }
    }
    
    rMessage = (e) => {
        let msg = "";
        switch (e) {
            case "invalid_credentials":
                msg = "Contraseña incorrecta, por favor, verifique e intente de nuevo.";
                break;
            case "user_blocked":
                msg = "Usuario bloqueado temporalmente, por demasiados intentos por iniciar sesión.";
                break;
            default:
                msg = "Ocurrió un error al tratar de iniciar sesión, por favor, intente de nuevo."
                break;
        }
        return msg
    }
    

    render(){

        return(
            <SafeAreaView style={[styles.safContainer, { backgroundColor: Colors.primarySemiLight }]}>

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
                                onChangeText={(value) => this.setState({username: value})}
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

                            <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent:'flex-end', alignContent:'flex-start', textAlign:'center', marginvertical: 16, paddingVertical: 16 , marginHorizontal: 5}}>
                                <CheckBox value={this.state.rememberMe}  tintColors={{ true: Colors.second, false: Colors.second }} onValueChange={(value) => this.toggleRememberMe(value)}/>
                                <Text onPress={()=> { this.switchRemember() }} style={[styles.textWhite, {fontSize: 16, textAlign: 'left', color: '#fff'}]}>Recuérdame</Text>
                            </View>
                        </KeyboardAvoidingView>
                      
                        <Button
                            title="Iniciar Sesión"
                            titleStyle={StylesGeneral.fontPrimaryButton}
                            buttonStyle={StylesGeneral.buttonSecond}
                            containerStyle={[{width: Metrics.screenWidth - 16 }, StylesGeneral.marginvertical]}
                            onPress={this.loginHandlePress}
                            loading={this.state.loading}
                            disabled={this.state.loading}
                            />
                        
                    </View>

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
})

function mapStateToProps(state){
    return{
    }
}


const mapDispatchToProps = dispatch => ({
    aLogin: (email, password) => 
        dispatch(actions.intelliapi.aLogin(email, password)),
    dispatch
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeAccess);
