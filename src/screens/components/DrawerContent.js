import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Alert, StatusBar, Linking} from 'react-native';
import {connect} from 'react-redux';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, RadioButton, Paragraph, TouchableRipple, Switch } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import {Fonts, Colors, StylesGeneral, Metrics} from '../../themes';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import DrawerItem from './DrawerItem';

const DrawerContent = (props) => {

    // console.log('..........................');
    // console.log(props);


    const { dataUser } = props;
    
    return(
        <>
            <DrawerContentScrollView {...props} style={{flex:1}} >
                <View style={{}}>
                    <View style={styles.drawerContent}>
                        <TouchableNativeFeedback style={styles.userInfoSection} onPress={() => props.navigation.push('MyProfile')}>
                            <View style={{flexDirection: 'row'}}>
                                <Avatar.Image
                                    source={{
                                    uri:
                                        URL_MEDIA + dataUser.foto,  
                                    }}
                                    size={50}
                                    />
                                <View style={{marginLeft: 10}}>
                                    <Title style={styles.title}>{dataUser.nombres} {dataUser.apellidos}</Title>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Rating readonly={true} imageSize={16} ratingColor='#F3911A' type='custom' fractions={1} startingValue={parseFloat(dataUser.valoracion)} style={{marginRight: 5}}  />
                                        <Text style={{...Fonts.fontRegular, color: Colors.gris, fontSize: 12}}>({dataUser.cantidad_valoraciones})</Text>
                                    </View>
                                    <Caption style={styles.caption}>Viajes 115</Caption>
                                </View>
                            </View>
                            <Image
                                source={require('../../../assets/icons/right-gris-ico.png')}
                                style={{width: 15, height: 15, marginRight: 15}}
                                />
                        </TouchableNativeFeedback>

                        <Drawer.Section style={styles.drawerSection}>
                                    
                                {/* <DrawerItem 
                                    icon={require('../../../assets/icons/billetera_menu.png')} 
                                    title={'Mi Billetera'} 
                                    onPress={() => props.navigation.push('MyWallet')} 
                                    />
                                <DrawerItem 
                                    icon={require('../../../assets/icons/historial-ico.png')} 
                                    title={'Viajes'} 
                                    onPress={() => props.navigation.push('MisViajes')} 
                                    />
                                <DrawerItem 
                                    icon={require('../../../assets/icons/referidos-ico.png')} 
                                    title={'Plan Referidos'} 
                                    onPress={() => props.navigation.push('Referidos')} 
                                    /> */}

                        </Drawer.Section>
                        <Drawer.Section>
                            {/* title="Preferences" */}
                            {/* <DrawerItem 
                                icon={require('../../../assets/icons/locator-hover-ico.png')} 
                                title={'Quiero ser Partner'} 
                                onPress={() => Linking.openURL('https://appllevame.com/portal/partner/')} 
                                /> */}
                        </Drawer.Section>
                    </View>
                    
                </View>
            </DrawerContentScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        paddingLeft: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // 
        flex: 1,
        borderBottomColor: Colors.grisHr,
        borderBottomWidth: .5
    },
    title: {
        ...Fonts.fontBold,
        fontSize: 16,
        color: Colors.primary,
        marginBottom: -5
    },
    caption: {
        ...Fonts.fontRegular,
        fontSize: 10,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
});

function mapStateToProps(state) {
    return {
      datauuid: state.user.uuid,
      country: state.user.country,
      location: state.location.location.coords,
      detailsCurrency: state.location.currency,
      dataUser: state.user.dataUser,
      token: state.user.token,
    };
  }
  
  export default connect(mapStateToProps)(DrawerContent);