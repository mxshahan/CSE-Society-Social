import React from 'react';
import Axios from 'axios';
import { setBlog } from '../../Actions/blog';
import { connect } from 'react-redux'
import { deleteBlogFromAll } from '../../Actions/blog';
import Row from '../Partials/Row';
import { Link } from 'react-router-dom'
import DataCard from './DataCard';

class Notice extends React.Component{
  state = {
    notice: false,
    cont: false
  }
  componentDidMount() {
      Axios.get(`/admin/notice`).then((res) => {
        this.setState({
          notice: res.data
        })
      }).catch((e) => {
        this.setState({
          notice: undefined
        })
      })
  }
  
  deleteBlog = (id) => {
    Axios.delete(`/siu/blog/${id}`).then((res) => {
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
    const notice = this.state.notice;
    // console.log('state', this.state.blog)
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
            <h2>notice</h2>
          
            <Link to="/dashboard/notice/create" className="btn btn-info mb-4">Create New</Link>
            <Row>
              {notice ? notice.map((evnt) => {
                return (
                  <DataCard data={evnt} title="notice"/>
                )
              })
              : 'Loading... '}
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notice);