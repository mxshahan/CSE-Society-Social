import React from 'react';
import Axios from 'axios';
import { setBlog } from '../../Actions/blog';
import { connect } from 'react-redux'
import { deleteBlogFromAll } from '../../Actions/blog';
import Row from '../Partials/Row';
import { Link } from 'react-router-dom'
import DataCard from './DataCard';

class AdminNewsfeed extends React.Component{
  state = {
    newsfeed: false,
    cont: false
  }
  componentDidMount() {
      Axios.get(`/admin/newsfeed`).then((res) => {
        this.setState({
          newsfeed: res.data
        })
      }).catch((e) => {
        this.setState({
          newsfeed: undefined
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
    const newsfeed = this.state.newsfeed;
    // console.log('state', this.state.blog)
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
            <h2>Newsfeed</h2>
            <Link to="/dashboard/newsfeed/create" className="btn btn-info mb-4">Create New</Link>
            <Row>
              {newsfeed ? newsfeed.map((evnt) => {
                return (
                  <DataCard data={evnt} title="newsfeed"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminNewsfeed);