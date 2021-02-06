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
import { Fonts, Colors, StylesGeneral, Metrics } from '../../themes';
import { SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

function HeaderMarvel(props){
    return (
      <SafeAreaView style={[styles.statusBar]}>
        <View style={styles.container}>
          {/* LEFT BUTTON */}
          <View style={{flexDirection: 'row', position: 'absolute', left: 0}}>
            <TouchableOpacity 
              onPress={props.onClick}
              style={[{alignItems: 'flex-start',justifyContent: 'center', padding: 15}]}>
              <Icon
                name='arrow-left'
                size={20}
                color={'white'}
                />
            </TouchableOpacity>
          </View>
          {/* CENTER BUTTON */}
          <View style={[styles.content, {alignItems: 'center', justifyContent: 'center', position: 'relative'}]}>
            <Image source={require('../../../assets/logo-marvel.jpg')} style={{width: 100, height: 55, resizeMode: 'contain'}} />
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
      backgroundColor: '#EA2328',
      position: 'relative'
    },
    statusBar:{
      ...Platform.select({
        ios: {
          height: 106,
        },
        android: {
          height: 106,
        },
      }),
      paddingTop: 40,
      backgroundColor: '#EA2328',
    },
    content: {
      flex: 1,
    },
    title: {
      ...Fonts.fontTabBar,
      textTransform: 'uppercase',
      color: Colors.primaryDark,
      fontSize: 16
    }
})

export default HeaderMarvel;
