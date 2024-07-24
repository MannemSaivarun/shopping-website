import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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
export const logout = () => ({
    type: LOGOUT
  });

export const login = (userData,navigate)=>async (dispatch)=>{
    try {
        //console.log(userData);
    dispatch(LoginRequest());
    await axios.post('http://localhost:4000/user/login',userData)
    .then((response)=>{
        //console.log("login success",response.data)
        const token = response.data.token;
        const decodedUser = jwtDecode(token);
        
        const userId = decodedUser.userId;
        const role = decodedUser.role
        //console.log("doecode",decodedUser,role,userId)
        dispatch(LoginSuccess({token,userId,role}));
        if(role === 'user'){
            window.history.replaceState(null, null, `/user/${userId}`);
            navigate(`/user/${userId}`, { replace: true });
        }else{
            window.history.replaceState(null, null, `/admin/${userId}`);
            navigate(`/admin/${userId}`, { replace: true });
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