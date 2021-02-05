import URL from '../../../url_backend';
const BASE_API = `${URL}cliente/`;

export const aGetDataProfile = (token, codigo) => async dispatch => {
    var data = {
        codigo_usuario: codigo
    }
    const query = await fetch(`${BASE_API}users/perfil/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token '+token,
        },
        body: JSON.stringify(data)
    })
    return query;
}