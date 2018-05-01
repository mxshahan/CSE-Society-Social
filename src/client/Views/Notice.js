import React from 'react';
import { Link } from 'react-router-dom';
import Row from '../Components/Partials/Row';
import Container from '../Components/Partials/Container';

const Notice = () => (
    <section id="notice-section">
        <div className="container">
            <Container>
                <div id="" className="section-heading">
                    <h1 className="">Latest Notice</h1>
                </div>
                <Row>
                    <div className="col-md-8">
                        <div className="notice-content">
                            <Row>
                                <div className="col-md-8">
                                    <Link to="#"><h3>Lorem Ipsum is simply dummy text</h3></Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                                </div>
                                <div className="col-md-4">
                                    <img src="assets/card.jpg" alt="Card" width="100%"/>
                                </div>
                            </Row>
                        </div>
                        <div className="notice-content">
                            <Row>
                                <div className="col-md-8">
                                    <Link to="#"><h3>Lorem Ipsum is simply dummy text</h3></Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                                </div>
                                <div className="col-md-4">
                                    <img src="assets/card.jpg" alt="Card" width="100%"/>
                                </div>
                            </Row>
                        </div>
                        <div className="notice-content">
                            <Row>
                                <div className="col-md-8">
                                    <Link to="#"><h3>Lorem Ipsum is simply dummy text</h3></Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                                </div>
                                <div className="col-md-4">
                                    <img src="assets/card.jpg" alt="Card" width="100%"/>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12">
                            <div id="single-blog-right-content">
                                <a href="#"><img className="img-responsive img-rounded" src="../assets/11.jpg"/></a>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div id="single-blog-right-content">
                                <a href="#"><img className="img-responsive img-rounded" src="../assets/10.jpg"/></a>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div id="single-blog-right-content">
                                <a href="#"><img className="img-responsive img-rounded" src="../assets/9.jpg"/></a>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container> 
        </div>
    </section>
)

export default Notice