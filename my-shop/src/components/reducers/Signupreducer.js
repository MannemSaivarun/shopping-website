import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actions/Signupaction";

const InitialState = {
    loading:false,
    user:null,
    error:null
}

const SignupReducer = (state=InitialState, action)=>{
    switch (action.type) {
        case SIGNUP_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload
            }
        case SIGNUP_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}

export default SignupReducer