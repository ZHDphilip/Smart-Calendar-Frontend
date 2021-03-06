import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import App from './App';
import store from  './store';
import decoder from 'jwt-decode'
import {syncInfoAct} from './mypages/login/store/creator'
const token =localStorage.getItem('storeTOKEN')
// const userName = localStorage.getItem('storeuserName')
if(token)
{
    try 
    {
        store.dispatch(syncInfoAct(token));
    }
    catch
    {
        // localStorage.removeItem('storeuserName');
        localStorage.removeItem('storeTOKEN')
        window.location.href = '/login';
    }
    
}

ReactDOM.render(
<Provider store = {store}>
    <App/>
</Provider>, 
document.querySelector('#root'))