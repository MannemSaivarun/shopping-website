import axios from 'axios';

//signup action constants
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';


//action creaters
export const SignupRequest = () => ({
    type: SIGNUP_REQUEST
})

export const SignupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data
})

export const SignupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error
})

export const signup = async (userData) => {
    console.log(userData, 'in signup action');

    // dispatch(SignupRequest());

    try {
        await axios.post("http://localhost:4000/user/signup", userData)
            .then((response) => {
                console.log(response.data);
                // dispatch(SignupSuccess(response.data))
            })
            .catch((error) => {
                console.log("error occured during signup", error);
            })
    } catch (error) {
        console.log("error raised in front end part in signup", error);
    }

}