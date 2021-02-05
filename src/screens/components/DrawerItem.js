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

import { Avatar, Title, Caption, Drawer, RadioButton, Paragraph, TouchableRipple, Switch } from 'react-native-paper';

import {  
    Button,
} from 'react-native-elements';

// import URLMEDIA from '../../../url_server_media';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

function DrawerItem(props){
    return (
        <TouchableRipple onPress={props.onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12,paddingHorizontal: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image 
                        source={props.icon} 
                        style={{
                          width: 30,
                          height: 30,
                          resizeMode: 'contain',
                        }}
                        />
                    <Text style={{...Fonts.fontRegular, marginLeft: 25}}>{props.title}</Text> 
                </View>
                <View>
                  <Image
                      source={require('../../../assets/icons/right-gris-ico.png')}
                      style={{width: 10, height: 10, marginRight: 0}}
                      />
                </View>
            </View>
        </TouchableRipple>
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
      position: 'absolute',
      top: 10,
      left: 0,
      right: 0,
      paddingTop: 0,
      backgroundColor: 'transparent',
      zIndex: 999
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

export default DrawerItem;
