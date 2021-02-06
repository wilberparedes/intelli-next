import { actions } from '../../store';
import React, { useEffect, useState  } from 'react';
import { connect } from  'react-redux';
import { Text, Image, View } from 'react-native';
import HeaderMenu from '../components/HeaderMenu';
import { Fonts, Metrics } from '../../themes';

const Home = (props) => {
  const { userData } = props;

  useEffect(() => {
  }, []);

  return (
    <>
    <HeaderMenu {...props }/>
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'white'}}>

      <Image source={require('../../../assets/logo-splash.png')} style={{width: Metrics.screenWidth - 20, height: Metrics.screenWidth - 20, maxWidth: 200, maxHeight: 200 }} />

      <Text style={{...Fonts.fontBold, fontSize: 22,  }}>Bienvenid@,
        <Text style={{ textTransform: 'capitalize'}}> {userData.user_name}</Text>
      </Text>

    </View>
    
    </>
  );
};

function mapStateToProps(state) {
  return {
      userData: state.user.dataUser,
      tokenData: state.user.token,
      modules: state.user.modules,
  }
}

export default connect(mapStateToProps)(Home);
