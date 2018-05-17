import React from 'react';

const Header = () => (
    <div className="header-container">
        <div className="header-top dark ">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3 col-sm-6 col-md-9">
                        <div className="header-top-first clearfix">
                            <ul className="social-links circle small clearfix hidden-xs">
                                <li className="twitter"><a target="_blank" href="http://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                <li className="skype"><a target="_blank" href="http://www.skype.com/"><i className="fa fa-skype"></i></a></li>
                                <li className="linkedin"><a target="_blank" href="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                <li className="googleplus"><a target="_blank" href="http://plus.google.com/"><i className="fa fa-google-plus"></i></a></li>
                                <li className="youtube"><a target="_blank" href="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></a></li>
                                <li className="facebook"><a target="_blank" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                            </ul>
                            <div className="social-links hidden-lg hidden-md hidden-sm circle small">
                                <div className="btn-group dropdown">
                                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt"></i></button>
                                    <ul className="dropdown-menu dropdown-animation">
                                        <li className="twitter"><a target="_blank" href="http://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.skype.com/"><i className="fa fa-skype"></i></a></li>
                                        <li className="linkedin"><a target="_blank" href="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                        <li className="googleplus"><a target="_blank" href="http://plus.google.com/"><i className="fa fa-google-plus"></i></a></li>
                                        <li className="youtube"><a target="_blank" href="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></a></li>
                                        <li className="facebook"><a target="_blank" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="list-inline hidden-sm hidden-xs">
                                <li><i className="fa fa-map-marker pr-5 pl-10"></i>7 Boroughbridge Road, Birley, UK</li>
                                <li><i className="fa fa-phone pr-5 pl-10"></i>+44 079 8708-6739</li>
                                <li><i className="fa fa-envelope-o pr-5 pl-10"></i>info@domain.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-9 col-sm-6 col-md-3">
                        
                        <div id="header-top-second" className="clearfix text-right">
                            <nav>
                                <ul className="list-inline">
                                    <li><a className="link-light " href="page-login.html"><i className="fa fa-users pr-5"></i>Log In</a></li>
                                    <li><a className="link-light " href="page-signup.html"><i className="fa fa-user pr-5"></i>Sign Up</a></li>
                                </ul>
                            </nav>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <header className="header  fixed   clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="header-left clearfix">
                            <div id="logo" className="logo">
                                <a href="index.html"><h2 className="logo-font title pr-10">Training Academy</h2></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="header-right clearfix pull-right">
                            <div className="main-navigation  animated with-dropdown-buttons">
                                <nav className="navbar navbar-default" role="navigation">
                                    <div className="container-fluid">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                        <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                            <ul className="nav navbar-nav ">
                                                <li className="active"><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="#">Courses</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
);

export default Header;