import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Routes/Router';
import configStore from './Store/Store';

const store = configStore()
const App = () => (
<Provider store={store}>
    <AppRouter/>
</Provider>
);

render(<App/>, document.getElementById('root'));