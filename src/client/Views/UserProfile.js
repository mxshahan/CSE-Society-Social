import React from 'react';
import { Link } from 'react-router-dom'
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import BlogListView from '../Components/Profile/BlogListView';
import BlogGridView from '../Components/Profile/BlogGridView';
import '../Styles/user.scss';
import UserContent from '../Components/Profile/UserContent'


class UserProfile extends React.Component{
  state = {
    view: false
  }
  render(){
    console.log(this.state.view)
    return (            
      <UserContent>
        <Row>
          <div className="col-md-4">
            <div class="card text-center">
              <div className="card-header bg-info text-light">
                Total Blog
              </div>
              <div className="card-body">
                <Row>
                  <div className="col-sm-4">
                    <span><i className="fa fa-circle text-success"> <small>Active</small></i></span>
                    <small>231</small>
                  </div>
                  <div className="col-sm-4">
                    <span><i className="fa fa-circle text-warning"> <small>Pending</small></i></span>
                    <small>231</small>
                  </div>
                  <div className="col-sm-4">
                    <span><i className="fa fa-circle text-danger"> <small>Declined</small></i></span>
                    <small>231</small>
                  </div>
                </Row>
              </div>
              
              <div className="card-footer">
                <Link to="/myaccount/blog">View Details</Link>
              </div>
            </div>
          </div>
        </Row>
      </UserContent>
    )
  }
}

export default UserProfile;