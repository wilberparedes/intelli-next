function tellevo(state = false, action){
    switch(action.type){
        case 'SET_VIAJE': {
            return {...state, ...action.payload }
        }
        case 'REMOVE_ALLTELLEVO':{
            return false;
        }
        default:
            return state;
    }
}

export default tellevo;