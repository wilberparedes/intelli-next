import React from 'react';
import { Fonts, Colors, Metrics } from '../../themes';
import { Image, View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, ListItem,  Avatar } from 'react-native-elements';


const WIDTH = Metrics.screenWidth / 2 - 24;

function MarvelComicItem(item){
    const date = new Date(item.dates[0].date);

    return (
        <TouchableWithoutFeedback onPress={item.onClick}>
            <View style={styles.listItem}>
                <Image
                    style={styles.image}
                    source={{uri: item.thumbnail.path + '.' + item.thumbnail.extension }}
                />
                <View style={{padding: 5}}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                    <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{date.getFullYear()}</Text>
                    <Text style={styles.price} numberOfLines={1} ellipsizeMode='tail'>$ {item.prices[0].price}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    
    listItem: {
        maxWidth: WIDTH,
        flex:0.5,
        margin: 8,
        backgroundColor: 'white',
        elevation : 2,
        marginBottom: 8,
        borderRadius: 4,
    },
    image:{
        width: WIDTH,
        height: WIDTH + 90,
        flex: 1,
        resizeMode: 'cover'
    },
    title: {
        ...Fonts.fontSemiBold,
        fontSize: 14,
    },
    subtitle:{
        ...Fonts.fontSemiBold,
        fontSize: 12,
        color: Colors.gris,
    },
    price: {
        ...Fonts.fontBold,
        fontSize: 12,
        color: Colors.danger,
    }
})

export default MarvelComicItem;
