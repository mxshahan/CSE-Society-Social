import React from 'react';
import Axios from 'axios';
import { setBlog } from '../../Actions/blog';
import { connect } from 'react-redux'
import { deleteBlogFromAll } from '../../Actions/blog';
import Row from '../Partials/Row';
import { Link } from 'react-router-dom'
import DataCard from './DataCard';

class AdminProject extends React.Component{
  state = {
    project: false,
    cont: false
  }
  componentDidMount() {
      Axios.get(`/admin/project`).then((res) => {
        this.setState({
          project: res.data
        })
      }).catch((e) => {
        this.setState({
          project: undefined
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
    const project = this.state.project;
    // console.log('state', this.state.blog)
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
            <h2>Student Project</h2>
          
            <Link to="/dashboard/project/create" className="btn btn-info mb-4">Create New</Link>
            <Row>
              {project ? project.map((evnt) => {
                return (
                  <DataCard data={evnt} title="Student Project"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminProject);