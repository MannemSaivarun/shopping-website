import {LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT} from '../actions/Loginaction';
const InitialState = {
    loading:false,
    isAuthenticated: false,
    token: null,
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
                loading: false,
                isAuthenticated: true,
                user: { id: action.payload.userId, role: action.payload.role },
                token: action.payload.token,
                error: null
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case LOGOUT:
            return InitialState;
            
        default:
            return state;
    }
}