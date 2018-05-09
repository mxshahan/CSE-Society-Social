import React from 'react';
import Row from '../Partials/Row';
import Reply from './Blog.Reply';

const SingleComment = ({ comment }) => (
<Row>
    <div className="profile col-sm-1">
        <img className="img-responsive rounded-circle profile-img" src="../assets/avatar.png"/>
    </div>
    <div className="col-sm-10">
        <h3 className="profile-name text-primary">{comment && comment.user.firstName} {comment && comment.user.lastName}</h3>
        <div className="comment">
            <p>{comment && comment.comment}</p>
        </div> 
        <div className="like-comment-sec">
            <a href="" className="btn btn-default" type="">Like</a>
            {/* <a href="" className="btn btn-default reply">Reply</a> */}
            <a href="" className="btn btn-default"><strong>2 min ago</strong></a>                    
        </div>  
        {/* <Reply/>          */}
    </div>
</Row> 
)

export default SingleComment;