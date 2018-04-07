import React from 'react';
import ReactDOM, { render } from 'react-dom';
import AppRouter from './Routes/Router';

const App = () => (
    <div>
        <AppRouter/>
    </div>
)

render(<App/>, document.getElementById('root'));

