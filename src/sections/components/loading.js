import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Metrics, Colors } from '../../themes';

function Loading(props){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/logo-intelli.png')} 
                style={styles.logo}
                />
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text>Cargando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        marginBottom: 5,
        height: Metrics.screenHeight/3.3,
        width: Metrics.screenWidth/1.9,
        marginTop: Metrics.screenHeight/45.0
    },
})

export default Loading;