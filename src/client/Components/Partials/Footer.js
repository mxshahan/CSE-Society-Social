import React from 'react';
import Container from './Container';
import Row from './Row';
import { Link } from 'react-router-dom';
import FooterWidget from './Widget/Widget';

const Footer = () => (
    <div className="bg-dark text-light">
        <Container>
            <Row>
                <FooterWidget/>
            </Row>
        </Container>
    </div>
);

export default Footer;