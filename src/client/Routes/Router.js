import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// COMPONENTS
import Homepage from '../Views/Homepage';
import Header from '../Components/Partials/Header';
import Footer from '../Components/Partials/Footer';
import NotFound from '../Views/NotFound';
import Notice from '../Views/Notice';
import Blog from '../Views/Blog';
import Login from '../Views/Login';
import SingleBlog from '../Components/Blog/SingleBlog';
import PrivateRoute from './PrivateRoute';
import Register from '../Views/Register';
import AuthNav from '../Components/Partials/AuthNav';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <AuthNav/>
            <Header/>
            {/* <nav>
                <ul>
                    <li><NavLink exact={true} activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/blog">blog</NavLink></li>
                    <li><NavLink activeClassName="active" to="/notice">notice</NavLink></li>
                </ul>
            </nav> */}
            <Switch>
                <Route path="/"component={Homepage} exact={true}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/notice" component={Notice}/>
                <Route path="/blog" exact={true} component={Blog}/>
                <PrivateRoute path="/blog/:id" exact={true} component={SingleBlog}/>
                <Route component={NotFound}/>  
            </Switch>
            <Footer/>
        </div>
    </Router>
)

export default AppRouter;