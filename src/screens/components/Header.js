import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Fragment,
  TouchableOpacity,
  StatusBar,
  Button
} from 'react-native';
import { Fonts, Colors, StylesGeneral } from '../../themes';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import URLMEDIA from '../../../url_server_media';

function Header(props){
    return (
      <SafeAreaView style={[styles.statusBar]}>
        {/* <StatusBar barStyle="light-content" backgroundColor={Colors.primary}/> */}
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
        <View style={styles.container}>
          {/* LEFT BUTTON */}
            <TouchableOpacity 
                onPress={props.onClick}
                style={[{alignItems: 'flex-start',justifyContent: 'center', position: 'absolute', left: 0, padding: 15}]}>
                <Image 
                source={require('../../../assets/icons/back-bk-ico.png')} 
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'cover',
                }}
                />
            </TouchableOpacity>
          {/* CENTER BUTTON */}
          <View style={[styles.content, {alignItems: 'center', justifyContent: 'center', position: 'relative'}]}>
            <Image 
              source={require('../../../assets/logo-completo-blanco.png')} 
              style={{
                width: 100,
                height: '100%',
                resizeMode: 'contain',
              }}
              />
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: Colors.primary,//
      position: 'relative'
    },
    statusBar:{
      ...Platform.select({
        ios: {
          height: 90 - 24,
        },
        android: {
          height: 90,
        },
      }),
      paddingTop: 30,
      backgroundColor: Colors.primary,
    },
    content: {
      flex: 1,
      // justifyContent:'center',
      // alignItems:'stretch',
      // alignContent: 'stretch'
    },
    title: {
      ...Fonts.fontTabBar,
      textTransform: 'uppercase',
      color: 'white',
      fontSize: 16
    }
})

  // function mapStateToProps(state){
  //   return {
  //     dataCoords: state.location.route
  //   }
  // }connect(mapStateToProps)()
export default Header;
