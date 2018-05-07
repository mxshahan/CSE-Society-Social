import React from 'react';
import { Link } from 'react-router-dom'

const Card = (props) => (
<div className="col-md-4 text-center">  
  <div class="card bg-light">
    <div class="card-body">
      <img src="/assets/avatar.png" className="rounded-circle" width="100px"/>
      <h3>John Doe</h3>
      <p className="text-secondary">Software Engineer</p>
    </div> 
    <div class="card-footer"><Link to="#" className="">View Details</Link></div>
  </div>
</div>
)

export default Card;