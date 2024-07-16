import {LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS} from '../actions/Loginaction';
const InitialState = {
    loading:false,
    user:null,
    error:null
}

export const LoginReducer = (state=InitialState, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                error:null
            }
    
        default:
            return state;
    }
}