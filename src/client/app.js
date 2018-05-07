import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Routes/Router';
import configStore from './Store/Store';
// STYLES
import './Styles/style.scss';
import { startLogin, LogoutUser, setUser } from './Actions/auth';
import Axios from 'axios';

const store = configStore()
const App = (
<Provider store={store}>
    <AppRouter/>
</Provider>
);

// const Admin = (
// <Provider store={store}>
//     <AdminRouter/>
// </Provider>
// )

// if (localStorage.getItem('admin')){
//     render(Admin, document.getElementById('root'));
// } else {
//     render(App, document.getElementById('root'));
// }
render(App, document.getElementById('root'));

if (localStorage.getItem('auth')) {
    store.dispatch(startLogin({ token: localStorage.getItem('auth') }))
} else {
    store.dispatch(LogoutUser())    
}

