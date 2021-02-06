import { actions } from '../../store';
import React, { useEffect, useState  } from 'react';
import { connect } from  'react-redux';
import { Text, Image, View } from 'react-native';
import HeaderMenu from '../components/HeaderMenu';
import { Fonts, Metrics } from '../../themes';
import HeaderTitleBack from '../components/HeaderTitleBack';

import MapView, { Marker, AnimatedRegion, ProviderPropType, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class Maps extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      initialRegion: {
        latitude: 4.672921, 
        longitude: -74.105759,
        latitudeDelta: 0.0040,
        longitudeDelta: 0.0040,
      },
      myPosition: undefined
    }
  }

  componentDidMount() {
    this.getPosition();
  }

  mapReadyInit = () => {
    this.getPosition();
  }

  getPosition = async() => {  
    console.log('------------------- getPosition ---------------------');
    await Geolocation.getCurrentPosition(
        async(position) => {
            this.setState({ myPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude } });
            this.map_init.animateToRegion({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0040,
              longitudeDelta: 0.0040,
            }, 30);
        },
        (error) => {
            console.log(error);
            if (error.code == 1) {
                // this.checkPermission();
            } else {
                // Alert.alert('Error de GPS', 'No se pudo obtener la ubicación del usuario.\nCódigo de error:' +error.code);
                this.getPosition();
            }
        }, { enableHighAccuracy: true, maximumAge: 15000, timeout: 10000 }
    )

}
  mapStyle = [{
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }]
  },
  {
      "featureType": "poi.business",
      "stylers": [{
          "visibility": "off"
      }]
  },
  {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "off"
      }]
  },
  {
      "featureType": "transit",
      "stylers": [{
          "visibility": "off"
      }]
  }
  ];


  render(){
    
    const { myPosition, initialRegion } = this.state;

    return (
      <>
        <HeaderTitleBack descripcion={'Mapa'} onClick={() => this.props.navigation.goBack()} />
        <View style={{ flex: 1, backgroundColor: 'white'}}>
          <MapView 
            ref = { map => {this.map_init = map}}
              onMapReady = { this.mapReadyInit }
              style = {{ flex: 1, position: 'relative' } }
              initialRegion = { initialRegion }
              customMapStyle = { this.mapStyle } 
              >
              {(myPosition) && ( 
                <Marker.Animated 
                  ref = {marker => { this.marker = marker; } }
                  coordinate = { myPosition } />
              )}
          </MapView>
        </View>
      </>
    );
  }

};

function mapStateToProps(state) {
  return {
      userData: state.user.dataUser,
      tokenData: state.user.token,
  }
}

export default connect(mapStateToProps)(Maps);
