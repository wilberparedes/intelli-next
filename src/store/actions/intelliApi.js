import URL from '../../../url_backend';
const BASE_API = `${URL}`;


export const aLogin = (email, password) => async dispatch => {
    var data = {
        email: email.toLowerCase(),
        password
    }
    const query = await fetch(`${BASE_API}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return query;
}

export const aDevice = (token, limit, offest, search) => async dispatch => {
    const query = await fetch(`${BASE_API}devices?limit=${limit}&offset=${offest}&search=${search}&orderby=device_name ASC`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return query;
}