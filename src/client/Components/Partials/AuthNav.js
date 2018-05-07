import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './Container';
import { LogoutUser, setUser } from '../../Actions/auth';
import Axios from 'axios';
import UserProfileDropdown from './UserProfileDropdown';


class AuthNav extends React.Component{
    state = {
        user: false
    }

    render(){
        const {isAuthenticated, LogoutUser, ...props} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top">
                <Container className="authContainer">
                    {isAuthenticated ? 
                    <ul className="navbar-nav ml-auto navbar-auth nav navbar-nav">
                        {/* <li className="nav-item">                        
                            <Link to="/dashboard" className="nav-link">
                                <i className="fa fa-user"></i> Dashbaord
                            </Link>
                        </li>

                        <li className="nav-item">                        
                            <Link to="#" className="nav-link" onClick={() => {
                                localStorage.clear();
                                LogoutUser();
                            }}>
                                <i className="fa fa-paper-plane"></i> Sign Out
                            </Link>
                        </li> */}
                        <UserProfileDropdown/>
                        {/* <li className="nav-item dropdown"> 
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                <img width="25px" className="img-responsive rounded-circle" src="/assets/avatar.png" alt="User Image"/>
                                <span className="hidden-xs">{this.state.user.firstName} {this.state.user.lastName}</span>
                            </Link>  
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="user-header text-white text-center bg-dark">
                                    <img width="80px" className="img-responsive rounded-circle" src="/assets/avatar.png" alt="User Image"/>
                                    <p>
                                    {this.state.user.firstName} {this.state.user.lastName}
                                    <small>Member since {this.state.user.createdAt}</small>
                                    </p>
                                </li>
                                <li className="user-footer">
                                    <div className="float-left">
                                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div className="float-right">
                                        <Link to="#" className="btn btn-default btn-flat" onClick={() => {
                                            localStorage.clear();
                                            LogoutUser();
                                        }}>
                                            <i className="fa fa-sign-out-alt"></i> Logout
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </li> */}
                    </ul> 
                    : 
                    <ul className="navbar-nav ml-auto navbar-auth">
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
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
    LogoutUser: () => dispatch(LogoutUser()),
    userData: (data) => dispatch(setUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);