//signup action constants
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';


//action creaters
export const SignupRequest = ()=>({
    type: SIGNUP_REQUEST
})

export const SignupSuccess = (data)=>({
    type: SIGNUP_SUCCESS,
    payload:data
})

export const SignupFailure = (error)=>({
    type: SIGNUP_FAILURE,
    payload:error
})

export const signup =(UserData)=>{
    console.log(UserData);
}