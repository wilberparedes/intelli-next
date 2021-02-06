import * as React from 'react';
import { Linking } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SplashScreen, SliderPermission, Loading, HomeAccess, App1, Home, Device, Maps, MarvelHome, DetailsComicMarvel} from '../screens';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';

import DrawerContent from '../screens/components/DrawerContent';


const Drawer = createDrawerNavigator();
function MyDrawer(props) {
  return(
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
        drawerPosition={'left'}
        >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
  );
}


  const stackApp = createStackNavigator();
  const MenuStackApp = () => (
    <stackApp.Navigator initialRouteName="Home" headerMode="none">
      <stackApp.Screen 
        name="Home" 
        component={MyDrawer} 
        />
      <stackApp.Screen 
        name="Device" 
        component={Device} 
        />
      <stackApp.Screen 
        name="Maps" 
        component={Maps} 
        />
      <stackApp.Screen 
        name="MarvelHome" 
        component={MarvelHome} 
        />
      <stackApp.Screen 
        name="DetailsComicMarvel" 
        component={DetailsComicMarvel} 
        />
    </stackApp.Navigator>
    );

const Stack = createStackNavigator();
const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const AppStack = ({user, tokenData, allUser}) => {

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  let [token, setToken] = React.useState(null);
  const getToken = async () => {
    token = tokenData;
    setToken(token);
  };

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;
          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };
    if (!isReady) {
      restoreState();
    }
    //FIN PERSIST NAVIGATION
    if (tokenData) {
      getToken();
    }

  }, [isReady, getToken, user, tokenData]);

  if (!isReady) {
    return null;
  }

  return(
      
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>
        <Stack.Navigator headerMode="none" initialRouteName="SplashScreen"> 
          <Stack.Screen name="HomeAccess" component={HomeAccess} />
          <Stack.Screen 
            name="App" 
            component={MenuStackApp} 
            />
          <Stack.Screen name="SliderPermission" component={SliderPermission} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Loading" component={Loading} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const mapStateToProps = state => ({
  allUser: state.user,
  user: state.user.dataUser,
  tokenData: state.user.token
});
export default connect( mapStateToProps, null )(AppStack);