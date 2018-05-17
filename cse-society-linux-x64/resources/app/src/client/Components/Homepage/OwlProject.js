import React from 'react';

const OwlProject = ({ data, ...props }) => (
<div className="item">
    <div className="card">
        <img className="card-img-top" src={data.image.length != 0 ? data.image[0] : '/assets/default.svg'} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{data.title && data.title.substring(0, data.title.indexOf(' ', 25))}</h5>
        <p className="card-text">{data.description && data.description.substring(0, data.description.indexOf(100, ' '))}</p>
        <p className="card-text"><small className="text-muted">Project Created: {data.date && data.date.substring(0, data.date.indexOf('T'))}</small></p>
        </div>
    </div>
</div>
);

export default OwlProject;