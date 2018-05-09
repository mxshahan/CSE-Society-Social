import React from 'react';
import Axios from 'axios';
import { setBlog } from '../../Actions/blog';
import { connect } from 'react-redux'
import { deleteBlogFromAll } from '../../Actions/blog';
import Row from '../Partials/Row';
import { Link } from 'react-router-dom'
import DataCard from './DataCard';

class Result extends React.Component{
  state = {
    result: false,
    cont: false
  }
  componentDidMount() {
      Axios.get(`/admin/result`).then((res) => {
        this.setState({
          result: res.data
        })
      }).catch((e) => {
        this.setState({
          result: undefined
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
    const result = this.state.result;
    // console.log('state', this.state.blog)
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
            <h2>Result</h2>
          
            <Link to="/dashboard/result/create" className="btn btn-info mb-4">Create New</Link>
            <Row>
              {result ? result.map((evnt) => {
                return (
                  <DataCard data={evnt} title="result"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Result);