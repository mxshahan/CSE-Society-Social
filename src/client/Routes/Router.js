import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

// STYLES
import '../Styles/style.scss';
import Login from '../Views/Login';

// COMPONENTS
import Homepage from '../Views/Homepage';
import Header from '../Components/Partials/Header';
import Footer from '../Components/Partials/Footer';
import NotFound from '../Views/NotFound';
import Notice from '../Views/Notice';

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={Homepage}/>
                <Route path="/login" component={Login}/>
                <Route path="/notice" component={Notice}/>
                <Route component={NotFound}/>  
            </Switch>
            <Footer/>
        </div>
    </Router>
)

export default AppRouter;