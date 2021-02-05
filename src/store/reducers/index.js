import { combineReducers } from 'redux';

import user from './user';
import marvel from './marvel';

const rootReducer = combineReducers({
    user,
    marvel,
})

export default rootReducer;