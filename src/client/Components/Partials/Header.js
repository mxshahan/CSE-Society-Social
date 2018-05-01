import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import Container from './Container';
import Login from '../../Views/Login'
import Register from '../../Views/Register';
import NavBar from './NavBar';

const Header = (props) => (
    <header>
        <div>
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
                    <NavBar/>
                </Container>
            </nav>
        </div>
    </header>
)
  
export default Header;
