import React from 'react';
import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';
// import DashboardSidebar from '../Components/Dashboard/Dashboard.Sidebar';
import '../Styles/Dashboard/index.scss'
import '../Styles/Dashboard/sb-admin.scss'
import Row from '../Components/Partials/Row';
import Container from '../Components/Partials/Container';
import UserInfo from '../Components/Profile/UserInfo';

const ProfileRoute = ({isAuthenticated, component: Component, ...rest}) => (
    isAuthenticated ? (
        <Route {...rest} component={(props)=> (
            <section id="profile-blog-section">
                <Container>
                    <Row>
                        <Component {...props}/>

                        <UserInfo/>
                    </Row>
                </Container>
            </section>
        )}/>
    ) 
    :<Redirect to="/login"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})

export default connect(mapStateToProps)(ProfileRoute);