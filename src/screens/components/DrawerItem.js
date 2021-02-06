import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Fonts, Colors } from '../../themes';
import { connect } from 'react-redux';

import { TouchableRipple } from 'react-native-paper';

import {  
  Icon,
} from 'react-native-elements';

function DrawerItem(props){

  const icon = (props.icon && props.icon.split(" ")[1] ? props.icon.split(" ")[1].split("-")[1] : null)
    return (
        <TouchableRipple onPress={props.onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12,paddingHorizontal: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {(icon) && (
                    <Icon
                      name={icon}
                      type='font-awesome'
                      color={Colors.primary}/>
                  )}
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
