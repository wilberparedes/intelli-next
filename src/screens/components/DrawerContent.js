import React from 'react';
import {View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import {Fonts, Colors, Functions} from '../../themes';

import DrawerItem from './DrawerItem';

const DrawerContent = (props) => {

    const { modules } = props;
    
    return(
        <>
            <DrawerContentScrollView {...props} style={{flex:1}} >
                <View style={{}}>
                    <View style={styles.drawerContent}>

                        <Drawer.Section style={styles.drawerSection}>

                            <DrawerItem 
                                // icon={data.setting_module_config.icon}
                                title={'MARVEL API'} 
                                onPress={() => props.navigation.push('MarvelHome')} 
                                />
                            {(modules) && (
                                Object.values(modules).map((data, i) => 
                                    <DrawerItem 
                                        key={i}
                                        icon={data.setting_module_config.icon}
                                        title={data.module} 
                                        onPress={() => (data.id_module == 13 ? props.navigation.push('Device') : Functions.alertOK('Alerta', 'Opción muy pronto disponible') )} 
                                        />
                                )
                            )}

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
        dataUser: state.user.dataUser,
        token: state.user.token,
        modules: state.user.modules,
    };
}
  
  export default connect(mapStateToProps)(DrawerContent);