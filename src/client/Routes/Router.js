import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

//COMPONENTS
import Homepage from '../Views/Homepage';
import Header from '../Components/Partials/Header';
import Footer from '../Components/Partials/Footer';
import NotFound from '../Views/NotFound';

//STYLES
import '../Styles/style.scss';
import Grid from 'material-ui';

const AppRouter = () => (
    <Router history={history}>
        <Grid>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={Homepage}/>    
            </Switch>
            <Footer/>
            <Switch>
                <Route component={NotFound}/>              
            </Switch>
        </Grid>
    </Router>
)

export default AppRouter;