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
import Dashboard from '../Components/Dashboard';
import Member from '../Views/Member';
import UserProfile from '../Views/UserProfile';
import BlogUser from '../Components/Profile/BlogUser';
import BlogCreate from '../Components/Profile/Blog.Create';
import ProfileSettings from '../Components/Profile/ProfileSettings';
import ProfileRoute from './ProfileRoute';
import AdminRoute from './AdminRoute';
import AdminLogin from '../Views/AdminLogin';
import PublicRoute from './PublicRouter';
import AdminBlog from '../Components/Dashboard/Blog';
import Event from '../Components/Dashboard/Event';
import EventPage from '../Views/EventPage';
import NewsFeed from '../Components/Homepage/NewsFeed';
import NewsFeedPage from '../Views/NewsFeedPage';
import Contact from '../Views/Contact';
import Gallery from '../Views/Gallery';

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
                <AdminRoute path="/dashboard" exact={true} component={Dashboard}/>                
                <AdminRoute path="/dashboard/blog" exact={true} component={AdminBlog}/>                
                <AdminRoute path="/dashboard/event" exact={true} component={Event}/>                
                <AdminRoute path="/dashboard/notice" exact={true} component={AdminBlog}/>                
                <AdminRoute path="/dashboard/result" exact={true} component={AdminBlog}/>                
                <AdminRoute path="/dashboard/newsfeed" exact={true} component={AdminBlog}/>                
                <Route path="/admin" component={AdminLogin}/>

                <PrivateRoute path="/blog/create" component={BlogCreate}/>

                <ProfileRoute path="/myaccount" exact={true} component={UserProfile}/>   
                <ProfileRoute path="/myaccount/blog" exact={true} component={BlogUser}/>   
                <ProfileRoute path="/myaccount/blog/create" exact={true} component={BlogCreate}/>   
                <ProfileRoute path="/myaccount/settings" exact={true} component={ProfileSettings}/> 

                <Route path="/"component={Homepage} exact={true}/>
                <PublicRoute path="/login" component={Login}/>
                <PublicRoute path="/register" component={Register}/>
                <Route path="/member" component={Member}/>
                <Route path="/notice" component={Notice}/>
                <Route path="/event" component={EventPage}/>
                <Route path="/news" exact={true} component={NewsFeedPage}/>
                <Route path="/contact" exact={true} component={Contact}/>
                <Route path="/gallery" exact={true} component={Gallery}/>
                {/* <Route path="/news/:id" exact={true} component={SingleNews}/> */}
                <Route path="/blog" exact={true} component={Blog}/>
                <Route path="/blog/:id" exact={true} component={SingleBlog}/>
                <Route component={NotFound}/> 
            </Switch>
            <Footer/>
        </div>
    </Router>
)

export default AppRouter;