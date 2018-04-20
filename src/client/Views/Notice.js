import React from 'react';
import Row from '../Components/Partials/Row';
import Container from '../Components/Partials/Container';

const Notice = () => (
    <section id="notice-section">
        <div className="container-fluid">
            <Container>
                <div id="notice-header">
                    <h1 className="text-center">Latest Notice</h1>
                </div>
                <Row>
                    <div className="col-md-8">
                        <div className="notice-content">
                            <Row>
                                <div className="col-md-12">
                                    <h2>Lorem Ipsum is simply dummy text</h2>
                                </div>
                                <div className="col-md-8">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                                </div>
                                <div className="col-md-4">
                                    <img src="assets/card.jpg" alt="Card" width="100%"/>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </Row>
            </Container> 
        </div>
    </section>
)

export default Notice