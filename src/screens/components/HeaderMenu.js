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
} from 'react-native';
import { Fonts, Colors, StylesGeneral } from '../../themes';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {  
    Button,
} from 'react-native-elements';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';

function HeaderMenu(props){

    console.log('props');
    console.log(props);
    return (
        <SafeAreaView style={[styles.statusBar, {backgroundColor: Colors.primarySemiLight}]}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.primaryDark} />
            <View style={styles.container}>
                {/* LEFT BUTTON */}
                <View>
                  <TouchableOpacity 
                      onPress={() => props.navigation.toggleDrawer()}
                      style={{padding: 16, top: 0}}
                      >
                      <Icon
                          name='menu'
                          size={30}
                          color={'black'}
                          />
                  </TouchableOpacity>
                </View>


                <TouchableOpacity 
                    style={{ padding: 10,  flexDirection: 'row', maxWidth: 150, minWidth: 150, justifyContent: 'center', alignItems: 'center'}}>
                    <Image 
                      source={require('../../../assets/logo-intelli.png')} 
                      style={{
                        width: '100%',
                        height: 80,
                        resizeMode: 'contain',
                      }}
                      />
                </TouchableOpacity>
            
                {/* RIGHT B0UTTON */}
                <View style={{width: 50, height: 50}}/>
                {/* LEFT BUTTON */}
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      alignContent: 'center',
      position: 'relative',
      // backgroundColor: 'red'
    },
    statusBar:{
      ...Platform.select({
        ios: {
          height: 66,
        },
        android: {
          height: 66,
        },
      }),
      backgroundColor: 'transparent',
      zIndex: 999999
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

export default HeaderMenu;
