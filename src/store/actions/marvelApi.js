
const URL = 'https://gateway.marvel.com/';
const BASE_API = `${URL}v1/public/`;
import md5 from 'md5';


export const aDataComics = (limit, offest) => async dispatch => {
    const ts = 1;
    var msg = ts + '09617e9b0b801bfebab20fdb5ddaebd8b6b78fb6' + '06de8076edb29bfb7c0352ef71eec981';
    const HASH = '109617e9b0b801bfebab20fdb5ddaebd8b6b78fb606de8076edb29bfb7c0352ef71eec981' //md5(msg);
    const query = await fetch(`${BASE_API}comics?ts=${ts}&apikey=06de8076edb29bfb7c0352ef71eec981&hash=${HASH}&orderBy=title&limit=${limit}&offset=${offest}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Token '+token,
        },
    })
    return query;
}