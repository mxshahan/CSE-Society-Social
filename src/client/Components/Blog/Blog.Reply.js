import React from 'react';
import Row from '../Partials/Row';

const Reply = () => (
<Row className="blog-reply">
    <div className="profile col-sm-1">
        <img className="img-responsive rounded-circle profile-img" src="../assets/ishtiak.jpg"/>
    </div>

    <div className="col-sm-10">
        <h3 className="profile-name text-primary">Md Ishtiakur Rahman</h3>
        <div className="comment">
            <p>Hello World. This is very nice post Hello World. This is very nice post Hello World. This is very nice post Hello World. This is very nice post </p>
        </div> 
        <div className="like-comment-sec">
            <a href="" className="btn btn-default" type="">Like</a>
            <a href="" className="btn btn-default reply">Reply</a>
            <a href="" className="btn btn-default"><strong>2 min ago</strong></a>                    
        </div>           
    </div>
</Row>
);

export default Reply;