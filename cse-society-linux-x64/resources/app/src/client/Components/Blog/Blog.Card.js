import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
const BlogCard = ({ blog, ...props }) => (
    <div className="col-md-6">
        <div>
            <div id="blog-item" className="card">
                <div className="img-responsive" style={{overflow: "hidden"}}>
                    {blog.image.length>0 ? <img width="100%" className="img-responsive img-rounded" src={blog.image[0]}/> 
                    : 
                    <img width="100%" className="img-responsive img-rounded" src="assets/default.svg"/>}
                </div>
                <div id="blog-item-content" className="card-body">
                    <h4 className="title">{blog.title}</h4>
                    <p className="description">{blog.description.substring(0, 80)} 
                        <Link className="btn text-danger" to={`/blog/${blog._id}`}>Read More</Link>
                    </p>
                    <p className="writer"><b>Writer:</b> {blog.user && blog.user.firstName} {blog.user && blog.user.lastName} {!blog.user && 'No Name'}</p>
                    <p className="date">{
                        blog.date.substring(0, 10)
                        // blog.date.substring(0, blog.date.indexOf('T'))
                    }</p>
                </div>
            </div>
        </div>    
    </div>
);

export default BlogCard;