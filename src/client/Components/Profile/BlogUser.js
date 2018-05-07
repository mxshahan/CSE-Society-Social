import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from '../Partials/Container';
import Row from '../Partials/Row';
import BlogListView from '../Profile/BlogListView';
import BlogGridView from '../Profile/BlogGridView';
import '../../Styles/user.scss'
import UserContent from './UserContent';
import { deleteBlog } from '../../Actions/auth';
import Axios from 'axios';


class UserBlog extends React.Component{
  state = {
    view: false,
    blog: false
  }

  componentDidMount(){
    Axios.get(`http://localhost:5000/siu/blog/userblog`, {
      headers: {
        'auth': localStorage.getItem('auth')
      }
    }).then((res) => {
      this.setState({
        blog: res.data
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  componentWillMount(){
    this.props.user && 
    this.setState({
      blog: this.props.user.blog
    });
  }

  componentDidUpdate() {
    // console.log(this.props.user)
  }

  deleteBlog = (id) => {
    Axios.delete(`http://localhost:5000/siu/blog/${id}`, {
      headers: {
        'auth': localStorage.getItem('auth')
      }
    }).then((res) => {
      this.props.deleteBlog(id),
      this.setState({
        blog: this.props.user.blog
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  render(){
    const blog = this.state.blog;
    return (
    <UserContent>
      <div class="card">
        <div class="card-header">
          <h4 className="float-left">Profile</h4>
          <h4 className="float-right px-1">
            <i className={`fa fa-th px-1 btn ${this.state.view && `btn-info`}`} onClick={() => {
              this.setState({
                view: true
              })
            }}></i>
          </h4>
          <h4 className="float-right px-1">
            <i className={`fa fa-list px-1 btn ${!this.state.view && `btn-info`}`} onClick={() => {
              this.setState({
                view: false
              })
            }}></i>
          </h4>
        </div>
        <div class="card-body blogs">
          <Row>
            {this.state.view ? 
              blog && blog.map((blog) => <BlogGridView deleteBlog={this.deleteBlog} key={blog._id} blog={blog}/>)
              : 
              blog && blog.map((blog) => <BlogListView deleteBlog={this.deleteBlog} key={blog._id} blog={blog}/>)
            }
            {!blog && 
            <div className="text-center text-info alert alert-warning">
              <h1>Loading...</h1>
              <p>Please Wait</p>
            </div>}
          </Row>
        </div>
      </div>
    </UserContent>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = (dispatch, props) => ({
  deleteBlog: (id) => dispatch(deleteBlog(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserBlog);