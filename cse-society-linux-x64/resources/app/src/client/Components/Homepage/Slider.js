import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';

const Slider = () => (
    <div id="slider">
        <OwlCarousel 
            className="owl-theme"
            loop margin={0} nav
            items={1}
        >
            <div className="item">
                <img src="assets/1.png" alt="Slider 1"/>
            </div>
            <div className="item">
                <img src="assets/2.png" alt="Slider 2"/>
            </div>
            <div className="item">
                <img src="assets/2.png" alt="Slider 3"/>
            </div>
        </OwlCarousel>
    </div>
)
export default Slider;