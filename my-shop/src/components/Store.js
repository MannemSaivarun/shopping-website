
import { combineReducers , applyMiddleware} from 'redux'; 
import { legacy_createStore as createStore} from 'redux'
import SignupReducer from './reducers/Signupreducer';
import { LoginReducer } from './reducers/Loginreducer';
import {thunk} from "redux-thunk";


const rootReducer = combineReducers({
    signup : SignupReducer,
    login : LoginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
