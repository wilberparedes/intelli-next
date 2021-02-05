
import URL from '../../../url_backend';
const BASE_API = `${URL}restaurante/`;

export const DataHome = (token, currencyData, codigo, direccionpedido) => async dispatch => {
    var data = {
        ...currencyData,
        ...direccionpedido,
        codigo
    }
    console.log(data);
    const query = await fetch(`${BASE_API}users/home/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token '+token,
        },
        body: JSON.stringify(data)
    })
    
    return query;
}