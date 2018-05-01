import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
const BlogCard = ({ blog, ...props }) => (
    <div class="col-md-6">
        <div>
            <div id="blog-item" class="card">
                <div className="img-responsive" style={{height: "200px", overflow: "hidden"}}>
                    {blog.image.length>0 ? <img width="100%" class="img-responsive img-rounded" src={blog.image[0]}/> 
                    : 
                    <img width="100%" class="img-responsive img-rounded" src="assets/default.svg"/>}
                </div>
                <div id="blog-item-content" class="card-body">
                    <h4 class="title">{blog.title}</h4>
                    <p class="description">{blog.description.substring(0, 120)} <Link className="text-danger" to={`/blog/${blog._id}`}>Read More</Link></p>
                    <p class="writer"><b>Writer:</b> {blog.user.firstName} {blog.user.lastName} </p>
                    <p class="date">{
                        moment(blog.date).format('D/M/Y')
                        // blog.date.substring(0, blog.date.indexOf('T'))
                    }</p>
                </div>
            </div>
        </div>    
    </div>
);

export default BlogCard;