import React, {Component} from 'react';
import Row from '../Partials/Row';
import { Link } from 'react-router-dom'
const Notice = ({data}) => (
    <Link to={`/notice#${data._id}`}>
        <div className="notice">
            <div className="card text-white bg-info">
                <div className="card-header">Posted on: {data.date.substring(0, data.date.indexOf('T'))}</div>
                <div className="card-body">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.description.substring(0, data.description.indexOf(' ', 100))}</p>
                </div>
            </div>
        </div>
    </Link>
);

export default Notice;