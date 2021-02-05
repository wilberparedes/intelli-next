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

function HeaderTitleTabs(props){
    return (
      <SafeAreaView style={[styles.statusBar]}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
        <View style={styles.container}>
          {/* LEFT BUTTON */}
            {/* <TouchableOpacity 
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
            </TouchableOpacity> */}
          {/* CENTER BUTTON */}
          <View style={[styles.content, {alignItems: 'center', justifyContent: 'center', position: 'relative'}]}>
            <Text style={{...Fonts.fontBold, fontSize: 18, color: 'white', paddingTop: 5}} numberOfLines={1}>{props.descripcion}</Text>
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
      paddingTop: 25,
      backgroundColor: Colors.primary,
    },
    content: {
      flex: 1,
    },
    title: {
      ...Fonts.fontTabBar,
      textTransform: 'uppercase',
      color: 'white',
      fontSize: 16
    }
})

export default HeaderTitleTabs;
