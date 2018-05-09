import React from 'react';
import { findDOMNode } from 'react-dom';
import Axios from 'axios';
import { connect } from 'react-redux'
import Editor from '../Editor';

class BlogCreate extends React.Component{
  handleSubmit = (data) => {
    Axios({
      method: 'post',
      url: `/siu/blog`,
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
      }
    }).then((res) => {
        this.props.AddBlog(res.data);
        this.setState({
          progress: 'Published',
          err: undefined
        });
        this.props.history.push('/myaccount/blog')
    }).catch((e) => {
        console.log(e)
    })
  }

  render() {
    return (
      <Editor AddNew={this.handleSubmit}/>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  blog: state.blog.all
});

const mapDispatchToProps = (dispatch) => ({
  AddBlog: (data) => dispatch(AddBlog(data)),
  setUserBlog: (data) => dispatch(setUserBlog(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogCreate);