import URL from '../../../url_backend';
import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
    Button
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { HomeCategory, Settings, MyOrders, AcercaDe , empty} from '../../screens';
import URLMEDIA from '../../../url_server_media';

import { connect } from 'react-redux';

import { Fonts, StylesGeneral, Colors, Metrics, Functions } from '../../themes';
// import { NavigationActions } from 'react-navigation';
import { BottomTabBarWrapper, MultiBarButton, MultiBarProvider } from 'react-native-multibar';


import API from '../../../providers/api';
import Header from '../../sections/components/headerPri';
import styles from '../../themes/Style-general';

import Icon from 'react-native-vector-icons/SimpleLineIcons';


function HomeScreen({  navigation, user }) {
  const [value, onChangeText] = React.useState("xxxxxx");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {alignSelf: 'center'},
      headerTitle: props => <Image 
        source={require('../../../assets/logo-completo-blanco.png')} 
        style={{
          width: 100,
          height: '100%',
          resizeMode: 'contain',
        }}
        />,
      headerRight: props => 
          <Image 
            source={{
              uri: URLMEDIA+user.fotoperfil,
            }} 
            style={{
              width: 55,
              height: 55,
              resizeMode: 'contain',
            }}
      />,
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: Colors.primary }
    });

    
  }, [navigation, value]);
    
  const Tab = createBottomTabNavigator();

  return (
    <MultiBarProvider
      initialExtrasVisible={false}
      >
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Inicio') {
              return (
                <Image
                  style={stylesTab.icon}
                  source={ focused ? require('../../../assets/ico-inicio.png') : require('../../../assets/ico-inicio.png')}
                  />
              );
            } else if(route.name === 'PQR'){
              return (
                <Image
                  style={stylesTab.icon}
                  source={require('../../../assets/ico-pqr.png')}
                  />
              );
            }
            else if(route.name === 'Acerca de'){
              return (
                <Image
                  style={stylesTab.icon}
                  source={require('../../../assets/ico-us.png')}
                  />
              );
            }
            else if (route.name === 'Configuración') {
              return (
                <Image
                  style={stylesTab.icon}
                  source={require('../../../assets/ico-setting.png')}
                  />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          style:{
            backgroundColor: Colors.primary,
            borderTopColor: Colors.gris,
            borderTopWidth: 1,
            height: 60,
            paddingVertical: 0
          },
          // showLabel:false
        }}
    
  >
    <Tab.Screen name="Inicio" component={HomeCategory}  />
    {/* options={{ tabBarBadge: 3 }} */}

    <Tab.Screen name="PQR" component={empty} />

    <Tab.Screen
        name="Mi Billetera"
        component={empty}
        options={{
          tabBarButton: () => (
            <MultiBarButton
              onPress={() => navigation.navigate('MyWallet') }// navigation.navigate('MyOrders')
              style={{
                width: 63, height: 63
              }}
              >
              <Image
                style={{width: 63, height: 63, flex:1}}
                source={require('../../../assets/ico-wallet.png')}
              />
            </MultiBarButton>
          )
        }}
      />

    <Tab.Screen name="Acerca de" component={AcercaDe} />
    <Tab.Screen name="Configuración" component={empty} />
  </Tab.Navigator>

  
  
   </MultiBarProvider>
  );
}

const stylesTab = StyleSheet.create({
  icon:{
    width: 30, 
    height: 30, 
    // flex:1, 
    // alignContent: 'stretch', 
    // resizeMode: 'contain'
  },  
  font:{
    ...Fonts.fontRegular,
    color: 'white',
    fontSize: 10,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  user: state.user.dataUser,
  tokenData: state.user.token
});
export default connect( mapStateToProps, null )(HomeScreen);