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

function HeaderTitleBack(props){
    return (
      <SafeAreaView style={[styles.statusBar]}>
        <View style={styles.container}>
          {/* LEFT BUTTON */}
            <TouchableOpacity 
              onPress={props.onClick}
              style={[{alignItems: 'flex-start',justifyContent: 'center', position: 'absolute', left: 0, padding: 15}]}>
              <Icon
                name='arrow-left'
                size={20}
                color={Colors.primaryDark}
                />
            </TouchableOpacity>
          {/* CENTER BUTTON */}
          <View style={[styles.content, {alignItems: 'center', justifyContent: 'center', position: 'relative'}]}>
            <Text style={{...Fonts.fontBold, fontSize: 18, color: Colors.primaryDark, paddingTop: 5}} numberOfLines={1}>{props.descripcion}</Text>
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
      backgroundColor: Colors.primarySemiLight,//
      position: 'relative'
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
      backgroundColor: Colors.primary,
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

export default HeaderTitleBack;
