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

function HeaderSearchBar(props){
    return (
      <SafeAreaView style={[styles.statusBar]}>
        <View style={styles.container}>
          {/* LEFT BUTTON */}
          <View style={{flexDirection: 'row', position: 'absolute', left: 0}}>
            <TouchableOpacity 
              onPress={props.onCancel}
              style={[{alignItems: 'flex-start',justifyContent: 'center', padding: 15}]}>
              <Icon
                name='arrow-left'
                size={20}
                color={'white'}
                />
            </TouchableOpacity>
          </View>
          {/* CENTER BUTTON */}
          <View style={[styles.content, {alignItems: 'flex-end', justifyContent: 'center', position: 'relative'}]}>
            <SearchBar
              onCancel={props.onCancel}
              showLoading={true}
              placeholder="Realizar búsqueda"
              onChangeText={props._updateSearch}
              value={props.search}
              inputContainerStyle={{width: Metrics.screenWidth - 70,}}
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
      backgroundColor: '#393E42',
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
      backgroundColor: '#393E42',
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

export default HeaderSearchBar;
