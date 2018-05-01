import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Routes/Router';
import configStore from './Store/Store';
// STYLES
import './Styles/style.scss';
import { startLogin, LogoutUser } from './Actions/auth';

const store = configStore()
const App = (
<Provider store={store}>
    <AppRouter/>
</Provider>
);

render(App, document.getElementById('root'));

if (localStorage.getItem('auth')) {
    store.dispatch(startLogin({token: localStorage.getItem('auth')}))
} else {
    store.dispatch(LogoutUser())    
}

