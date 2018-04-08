import React, {Component} from 'react';
import Row from '../Partials/Row';
import OwlCarousel from 'react-owl-carousel';

const Projects = () => (
    <Row>
        <div className="col-md-12">
            <h2 className="section-heading">Student Projects</h2>
        </div>
              
        <OwlCarousel 
            className="owl-theme"
            loop margin={0} nav
            items={3}
        >        
            <div className="item">
                <div className="card">
                    <img className="card-img-top" src="assets/1.png" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <img className="card-img-top" src="assets/1.png" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <img className="card-img-top" src="assets/1.png" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </Row>
);

export default Projects;