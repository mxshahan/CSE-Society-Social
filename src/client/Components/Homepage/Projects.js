import React, {Component} from 'react';
import Row from '../Partials/Row';
import OwlCarousel from 'react-owl-carousel';
import OwlProject from './OwlProject';

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
            <OwlProject/>
            <OwlProject/>
            <OwlProject/>
        </OwlCarousel>
    </Row>
);

export default Projects;