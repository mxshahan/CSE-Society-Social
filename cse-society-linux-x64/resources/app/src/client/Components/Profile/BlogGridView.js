import React from 'react'
import { Link } from 'react-router-dom'
import DeleteBlog from './DeleteBlog';

const BlogGridView = ({ blog, ...props }) => (
<div className="col-md-4 col-sm-6 mb-3">
  <div className="card">
    <div className="card-header">
      <Link to={`/blog/${blog._id}`}><h5>{blog.title}</h5></Link>
    </div>
    <div className="card-body p-0">
      {blog.image.length>0 ? <img className="img-fluid" src={blog.image[0]}/> 
      : 
      <img className="img-fluid" src="/assets/default.svg"/>}
      <p className="p-2">{blog.description.substring(0, 50)}</p>
    </div>
    <div className="card-footer">
      <small>Created At: {blog.date.substring(0, blog.date.indexOf('T'))}</small>
      <DeleteBlog deleteItem={(id) => {
        props.deleteBlog(id)
      }} id={blog._id}/>
    </div>
  </div>
</div>
)

export default BlogGridView;