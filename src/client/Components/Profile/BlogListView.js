import React from 'react'
import Row from '../Partials/Row';
import moment from 'moment';
import { Link } from 'react-router-dom'
import DeleteBlog from './DeleteBlog';
const BlogListView = ({ blog, ...props }) => (
<div className="col-md-12 mb-4">
  <div className="card">
    <div className="card-header">
      <Link to={`/blog/${blog._id}`}><h5>{blog.title}</h5></Link>
    </div>
    <div className="card-body p-0">
      <Row>
        <div className="col-md-3">
          {blog.image.length>0 ? <img className="img-fluid" src={blog.image[0]}/> 
          : 
          <img className="img-fluid" src="/assets/default.svg"/>}
        </div>
        <div className="col-md-9 p-2">
          <p>{blog.description.substring(0, 150)}</p>
        </div>
      </Row>
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

export default BlogListView;