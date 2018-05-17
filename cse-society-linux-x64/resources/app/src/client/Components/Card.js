import React from 'react';
import { Link } from 'react-router-dom'
import Model from './Model';

const Card = ({ data }) => (
<div className="col-md-4">  
  <div class="card bg-light text-center">
    <div class="card-body">
      <img src="/assets/avatar.png" className="rounded-circle" width="100px"/>
      <h3>{data.firstName} {data.lastName}</h3>
      <p className="text-secondary">{data.email}</p>
    </div> 
    <div class="card-footer">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${data._id}`}>
      View Details 
    </button>
    </div>
  </div>
  <Model data={data}/>
</div>
)

export default Card;