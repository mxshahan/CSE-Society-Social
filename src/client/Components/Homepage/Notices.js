import React, {Component} from 'react';
import Notice from './Notice';

const Notices = () => (
    <div className="col-md-5 col-sm-6 col-xs-12">
        <h2 className="section-heading">Notices</h2>
        <div className="notices bg-light">
            <Notice/>
            <Notice/>
            <Notice/>
            <Notice/>
            <Notice/>
            <Notice/>
            <Notice/>
            <Notice/>
        </div>
    </div>
);

export default Notices;