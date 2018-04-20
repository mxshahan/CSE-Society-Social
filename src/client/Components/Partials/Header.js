import React, {Component} from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import Login from '../../Views/Login'
import Register from '../../Views/Register';
import { connect } from 'react-redux';

class Header extends Component{
    state = {
        loginForm: false,
        registerForm: false
    }

    render(){
        return (
            <header>
                {this.state.loginForm ? <Login loginForm={(val) => {
                    if (val.register) {
                        this.setState({
                            registerForm: true
                        })
                    } 
                    if (!val.login) {
                        this.setState({
                            loginForm: false
                        });
                    }
                }}/> : ''}

                {this.state.registerForm ? <Register registerForm={(val) => {
                    if (val.login) {
                        this.setState({
                            loginForm: true
                        })
                    } 
                    if (!val.register) {
                        this.setState({
                            registerForm: false
                        });
                    }
                }}/> : ''}
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top">

                        <Container>
                            {this.props.isAuthenticated ? 
                            <ul class="navbar-nav ml-auto navbar-auth">
                                <li className="nav-item">                        
                                    <Link to="/dashboard" className="nav-link">
                                        <i className="fa fa-user"></i> Dashbaord
                                    </Link>
                                </li>
                                <li className="nav-item">                                           
                                    <Link to="#" className="nav-link" onClick={() => {
                                        localStorage.clear();
                                        this.props.history.push('/');
                                    }}>
                                        <i className="fa fa-exit"></i> Logout
                                    </Link>
                                </li>
                            </ul> 
                            : 
                            <ul class="navbar-nav ml-auto navbar-auth">
                                <li className="nav-item">                        
                                    <div 
                                        className="nav-link" 
                                        onClick={() => {
                                        this.setState({
                                            loginForm: true
                                        })
                                    }} >
                                        <i className="fa fa-user"></i> Login
                                    </div>
                                </li>
                                <li className="nav-item">                                           
                                    <div className="nav-link" onClick={() => {
                                        this.setState({
                                            registerForm:true
                                        })
                                    }}>
                                        <i className="fa fa-user-plus"></i> Register
                                    </div>
                                </li>
                            </ul>
                            }
                        </Container>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-warning navbar-bottom">
                        <Container>
                            <Link className="navbar-brand" to="/">Logo</Link>
                            <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/notice">Notice <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link" to="/blog">Blog <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/event">Events <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/gallery">Gallery <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/news">Newsfeed <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})
  
export default connect(mapStateToProps)(Header);
