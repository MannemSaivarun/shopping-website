import axios from "axios";


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LoginSuccess = (data)=>({
    type:LOGIN_SUCCESS,
    payload:data
})

export const LoginFailure = (error)=>({
    type:LOGIN_FAILURE,
    payload:error
})

export const LoginRequest = ()=>({
    type:LOGIN_REQUEST
})

export const login = (userData,navigate)=>async (dispatch)=>{
    try {
        //console.log(userData);
    dispatch(LoginRequest());
    await axios.post('http://localhost:4000/user/login',userData)
    .then((response)=>{
        //console.log("login success",response.data)
        dispatch(LoginSuccess(userData));
        if(response.data.role === 'user'){
            navigate('/user');
        }else{
            navigate('/admin');
        }
    })
    .catch((error)=>{
        console.log("login failed",error)
        dispatch(LoginFailure(error))
    })
    } catch (error) {
        console.log("login failed in client",error)
    }


}