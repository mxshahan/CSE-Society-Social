import React from 'react';
import { findDOMNode } from 'react-dom';
import Axios from 'axios';
import { connect } from 'react-redux'
import Editor from '../Editor';
import { AddBlog } from '../../Actions/blog';
import { setUserBlog } from '../../Actions/auth';

class AdminResult extends React.Component{

  handleSubmit = (data) => {
    Axios({
      method: 'post',
      url: `/admin/result`,
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
      }
    }).then((res) => {
        // this.props.AddBlog(res.data);
        // console.log('ddd',res.data);
        this.setState({
          progress: 'Published',
          err: undefined
        });
        this.props.history.push('/dashboard/result');
    }).catch((e) => {
        console.log(e)
    })
  }

  render() {
    return (
      <div id="Dashboard">
        <div className="content-wrapper">
          <Editor title="Result" AddNew={this.handleSubmit}/>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminResult);