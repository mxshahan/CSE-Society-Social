import React from 'react';
import Axios from 'axios';
import { setBlog } from '../../Actions/blog';
import { connect } from 'react-redux'
import { deleteBlogFromAll } from '../../Actions/blog';
import Row from '../Partials/Row';

class Event extends React.Component{
  state = {
    blog: false
  }
  componentDidMount(){
      Axios.get(`/siu/blog`).then((res) => {
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
    console.log('state', this.state.blog)
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
            <button className="btn btn-info mb-4">Create New</button>
            <Row>
              <div className="col-md-4 mb-4">
                <div className="card card-info">
                  <div className="card-header bg-dark text-white">Event Title</div>
                  <div className="card-body p-0">
                    <img className="img-fluid" src="/assets/card.jpg" alt="Event"/>
                    <p className="p-2">Lorem Ipsum Where does it come from? Contrary to popular belie</p>
                  </div>
                  <div className="card-footer">Card Footer</div>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);