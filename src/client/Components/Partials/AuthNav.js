import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './Container';
import { LogoutUser } from '../../Actions/auth';

const AuthNav = ({isAuthenticated, LogoutUser, ...props}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top">

    <Container>
        {isAuthenticated ? 
        <ul class="navbar-nav ml-auto navbar-auth">
            <li className="nav-item">                        
                <Link to="/dashboard" className="nav-link">
                    <i className="fa fa-user"></i> Dashbaord
                </Link>
            </li>
            <li className="nav-item">                                           
                <Link to="#" className="nav-link" onClick={() => {
                    localStorage.clear();
                    LogoutUser();
                }}>
                    <i className="fa fa-sign-out-alt"></i> Logout
                </Link>
            </li>
        </ul> 
        : 
        <ul class="navbar-nav ml-auto navbar-auth">
            <li className="nav-item">                        
                <Link to="/login" className="nav-link"> <i className="fa fa-user"></i> Login</Link>
            </li>
            <li className="nav-item">                                           
                <Link className="nav-link" to="register"><i className="fa fa-user-plus"></i> Register</Link>
            </li>
        </ul>
        }
    </Container>
</nav>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
    LogoutUser: () => dispatch(LogoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);