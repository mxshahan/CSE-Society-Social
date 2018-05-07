import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { LogoutUser, setUser } from '../../Actions/auth';
import Axios from 'axios';

class UserProfileDropdown extends React.Component{
  state = {
    user: false
  }
  componentDidMount(){
    Axios.get('http://localhost:5000/siu/user', {
      headers: {
        'auth': localStorage.getItem('auth')
      }
    }).then((res) => {
      this.props.userData(res.data)
      this.setState({
        user: res.data
      })
    }).catch((e) => {
      localStorage.clear();
      this.props.LogoutUser();
      console.log(e)
    })
  }

  render() {
    const { token, LogoutUser, userData, ...props} = this.props;
    const user = this.state.user;
    return (
      <div>
        {this.state.user ? 
        <li className="nav-item dropdown"> 
          <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <img width="40px" className="img-responsive rounded-circle px-2 py-1" src="/assets/avatar.png" alt="User Image"/>
              <span className="hidden-xs">{user.firstName} {user.lastName}</span>
          </Link>  
          <ul className="dropdown-menu dropdown-menu-right">
              <li className="user-header text-white text-center bg-dark">
                  <img width="80px" className="img-responsive rounded-circle" src="/assets/avatar.png" alt="User Image"/>
                  <p>
                  {user.firstName} {user.lastName}
                  <small>Member since {user.createdAt.substring(0, 4)}</small>
                  </p>
              </li>
              <li className="user-footer">
                  <div className="float-left">
                  <Link to="/myaccount" className="btn btn-default btn-flat">Profile</Link>
                  </div>
                  <div className="float-right">
                      <Link to="#" className="btn btn-default btn-flat" onClick={() => {
                          localStorage.clear();
                          LogoutUser();
                      }}>
                          <i className="fa fa-sign-out-alt"></i> Logout
                      </Link>
                  </div>
              </li>
          </ul>
        </li>  
        : <span className="text-light p-2">'Please Wait...'</span> }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token, 
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser()),
  userData: (data) => dispatch(setUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileDropdown);