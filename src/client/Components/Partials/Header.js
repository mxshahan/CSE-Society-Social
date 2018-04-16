import React, {Component} from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import Login from '../../Views/Login'

class Header extends Component{
    state = {
        loginForm: false
    }

    loginClick = () => {
        this.setState({
            loginForm: true
        })
    }

    render(){
        return (
            <header>
                {this.state.loginForm ? <Login loginForm={(val) => {
                    if(!val) {
                        this.setState({
                            loginForm: false
                        })
                    }
                }}/> : ''}
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top">
                        <Container>
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">                        
                                    <div onClick={this.loginClick} className="nav-link"><i className="fa fa-user"></i> Login</div>
                                </li>
                                <li className="nav-item">                                           
                                    <div className="nav-link"><i className="fa fa-user-plus"></i> Register</div>
                                </li>
                            </ul>
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
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Notice <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">Blog <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Events <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Gallery <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Newsfeed <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
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
export default Header;