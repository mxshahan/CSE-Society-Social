import React from 'react';
import { Link } from 'react-router-dom';

const DataCard = ({ data, ...props }) => (
  <div className="col-md-4 mb-4">
  <div className="card card-info">
    <div className="card-header bg-dark text-white">{data.title}</div>
    <div className="card-body p-0">
      <Link to={`/${props.title}#${data._id}`}><img className="img-fluid" src={data.image.length!=0 ? data.image[0] : '/assets/default.svg'} alt="Event"/></Link>
      <p className="p-2">{data.description.substring(0, data.description.indexOf(' ', 150))}</p>
    </div>
    <div className="card-footer"><Link to={`/${data.title}#${data._id}`}>View Details</Link></div>
  </div>
</div>
);

export default DataCard