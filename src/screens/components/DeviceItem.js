import React from 'react';
import { Fonts, Colors } from '../../themes';
import { Icon, ListItem,  Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

function DeviceItem(item){

    return (
        <TouchableOpacity onPress={item.onClick}>
            <ListItem bottomDivider>
                <Avatar source={{uri: (item.photo ? item.photo : 'https://co.myintelli.net/assets/images/device.b66380ce902149ccf25f53b580e2e774.png') }} style={{width: 80, height: 80}} />
                <ListItem.Content>
                    <ListItem.Title style={{...Fonts.fontSemiBold}}>{item.device_name}</ListItem.Title>
                    <ListItem.Subtitle style={{...Fonts.fontRegular}}>Modelo: {item.device_model}</ListItem.Subtitle>
                    <ListItem.Subtitle style={{...Fonts.fontRegular}}>Serial: {item.settings_device.serial}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content style={{justifyContent: 'flex-end', position: 'absolute', right: 0}}>
                {(item.settings_device.online == 0) ? 
                (
                    <Icon
                        name={'wifi-off'}
                        size={30}
                        color={Colors.danger}/> 
                )
                :
                (
                    <Icon
                        name={'wifi'}
                        size={30}
                        color={Colors.success}/> 
                )}
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    );
}

export default DeviceItem;
