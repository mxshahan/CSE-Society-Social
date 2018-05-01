import React from 'react';
import Row from '../Partials/Row';
import Reply from './Blog.Reply';

const BlogComment = () => (
    <Row>
    <div className="col-md-9">
      <div id="comment-sec" className="inner-blog-content clearfix">
        <Row>
            <div className="profile col-sm-1">
                <img className="img-responsive rounded-circle profile-img" src="../assets/ishtiak.jpg"/>
            </div>
            <div className="col-sm-10">
                <h3 className="profile-name">Md Ishtiakur Rahman</h3>
                <textarea placeholder="add a comment"></textarea>                
            </div>
            <div className="col-sm-1 sendBtn">
                <button className="btn btn-info">Send</button>
            </div>
        </Row>
      </div>
      <div id="last-comment" className="inner-blog-content clearfix">
        <Row>
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
                <Reply/>         
            </div>
        </Row> 
      </div>    
    </div>
    <div className="col-md-3"></div>
    </Row>
)

export default BlogComment;