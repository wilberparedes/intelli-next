import {
    Alert
} from 'react-native';

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

class Functions  {


    
    alertOK(title, message, cancel) {
        Alert.alert(
            title,
            message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: cancel},
        );
    }

    alertLogout(title, message, cancel, props) {
        Alert.alert(
            title,
            message,
            [
                {text: 'Aceptar', onPress: 

                () => {
                    props.dispatch({
                        type: 'REMOVE_USER'
                    })
                    props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'Loading',
                                    params: { user: 'jane' },
                                },
                            ],
                        })
                    );
                }
                },
            ],
            {cancelable: cancel},
        );
    }

    alertOKTitle(title, message, cancel) {
        Alert.alert(
            title,
            message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: cancel},
        );
    }

    getValueDiscount(value, porDiscount, currencyData){
        try {
            
            const descuento = porDiscount / 100;
            const totaldescuento = descuento * value;
            return this.getValueFormat(totaldescuento, currencyData);

        } catch (e) {
            console.log(e)
            return 'Error';
        }
    }

    getValueWithDiscount(value, porDiscount, currencyData){
        try {
            
            const condescuento = (value * porDiscount) / 100;
            const Total = (value-condescuento)
            return this.getValueFormat(Total, currencyData);

        } catch (e) {
            console.log(e)
            return 'Error';
        }
    }

    
    getValueFormat(value, currencyData, NumDecimal = 2, decimal = ",", thousands = "."){
        try {
            const valueorg = value;
            NumDecimal = Math.abs(NumDecimal);
            NumDecimal = isNaN(NumDecimal) ? 2 : NumDecimal;
        
            const negativeSign = value < 0 ? "-" : "";
        
            let i = parseInt(value = Math.abs(Number(value) || 0).toFixed(NumDecimal)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;
            
            const Monto1 = currencyData.currency_symbol + ' ' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (NumDecimal ? decimal + Math.abs(value - i).toFixed(NumDecimal).slice(2) : "");
            const Monto2 = currencyData.currency_symbol + ' ' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (NumDecimal ? decimal + Math.abs(value - i).toFixed(NumDecimal).slice(2) : "") + ' ' + currencyData.currency_iso;
            var obj = {
                "valformat": Monto1,
                "valCompleto": Monto2,
                "valinit": valueorg
            }
            return obj;

        } catch (e) {
            console.log(e)
            return 'Error';
        }
    }

    statePermissioGPS(){
        const locationPermission = Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_ALWAYS;
        // const storagePermission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
        check(locationPermission)
        .then((result) =>{
            // console.log(result);
                return RESULTS;
           
            // switch (result) {
            // case RESULTS.DENIED:
            //     return false;
            //     break;
            // case RESULTS.GRANTED:
            //     return true;
            //     break;
            // case RESULTS.BLOCKED:
            //     return false;
            //     break;
            // }
        })
        .catch((error) =>{ return false; })
    }

    statePermissioStorage(){
        const storagePermission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
        check(storagePermission)
        .then((result) =>{
            console.log(result);
            // switch (result) {
            // case RESULTS.DENIED:
            //     return false;
            //     break;
            // case RESULTS.GRANTED:
            //     return true;
            //     break;
            // case RESULTS.BLOCKED:
            //     return false;
            //     break;
            // }
        })
        .catch((error) =>{ return false; })
    }

    getKilometros(lat1, lon1, lat2, lon2)
    {
        km = 111.302;
        //1 Grado = 0.01745329 Radianes    
        degtorad = 0.01745329;
        //1 Radian = 57.29577951 Grados
        radtodeg = 57.29577951;

        dlong = (lon2 - lon1); 
        dvalue = (Math.sin(lat2 * degtorad) * Math.sin(lat1 * degtorad)) + (Math.cos(lat2 * degtorad) * Math.cos(lat1 * degtorad) * Math.cos(dlong * degtorad)); 
        dd = Math.acos(dvalue) * radtodeg; 
        return Math.round((dd * km), 2) * 1000;
    }

}



export default new Functions();