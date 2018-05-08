import React from 'react';
import Axios from 'axios';
import { setBlog } from '../../Actions/blog';
import { connect } from 'react-redux'
import { deleteBlogFromAll } from '../../Actions/blog';

class AdminBlog extends React.Component{
  state = {
    blog: false
  }
  componentDidMount(){
      Axios.get(`http://localhost:5000/siu/blog`).then((res) => {
          this.setState({
              blog: {
                all: res.data
              }
          })
          this.props.setBlog(res.data);
          
      }).catch((e) => {
          console.log('Error getting message', e);
          throw e;
      })
  }

  componentWillMount(){
    this.setState({
      blog: this.props.blog
    })
  }
  
  deleteBlog = (id) => {
    Axios.delete(`http://localhost:5000/siu/blog/${id}`).then((res) => {
      this.props.deleteBlog(id),
      this.setState({
        blog: this.props.blog
      })
    }).catch((e) => {
      throw e;
      console.log(e)
    })
  }
  


  render(){
    console.log('state', this.state.blog)
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
      <div className="card mb-3">
      <div className="card-header">
        <i className="fa fa-table"></i> Data Table Example</div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Comments</th>
                <th>Post date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Comments</th>
                <th>Post date</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {this.state.blog && this.state.blog.all && Object.values(this.state.blog.all).map((blog, key) => {
                return ( 
                <tr>
                  <td>{blog.title}</td>
                  <td>{blog.description.substring(0, 50)}</td>
                  <td>{blog.user && `${blog.user.firstName} ${blog.user.lastName}`}</td>
                  <td>{blog.comments.length}</td>
                  <td>{blog.date.substring(0, blog.date.indexOf('T'))}</td>
                  <td>
                    <i className="fa fa-trash btn btn-danger" onClick={() => {
                      this.deleteBlog(blog._id)
                    }}></i>
                  </td>
                </tr>
                )
              }) }
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.auth.user,
  blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
  setBlog: (data) => dispatch(setBlog(data)),
  deleteBlog: (id) => dispatch(deleteBlogFromAll(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminBlog);