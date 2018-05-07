import React from 'react'
import { Link } from 'react-router-dom'
import { LogoutUser } from '../../Actions/auth';
import { connect } from 'react-redux'

class DashboardSidebar extends React.Component{
  render(){
    const {isAuthenticated, LogoutUser, user, ...props} = this.props;
    console.log(user)
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <Link class="navbar-brand" to="/">Homepage</Link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
            <Link class="nav-link" to="/dashboard">
              <i class="fa fa-fw fa-dashboard"></i>
              <span class="nav-link-text">Dashboard</span>
            </Link>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
            <Link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#blog" data-parent="#exampleAccordion">
              <i class="fa fa-fw fa-edit"></i> 
              <span class="nav-link-text">Blog</span>
            </Link>
            <ul class="sidenav-second-level collapse" id="blog">
              <li>
                <Link to="/dashboard/blog">All Blog</Link>
              </li>
              <li>
                <Link to="/dashboard/blog/create">Add New</Link>
              </li>
            </ul>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
            <Link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseExamplePages" data-parent="#exampleAccordion">
              <i class="fa fa-fw fa-file"></i>
              <span class="nav-link-text">Example Pages</span>
            </Link>
            <ul class="sidenav-second-level collapse" id="collapseExamplePages">
              <li>
                <Link to="login.html">Login Page</Link>
              </li>
              <li>
                <Link to="register.html">Registration Page</Link>
              </li>
              <li>
                <Link to="forgot-password.html">Forgot Password Page</Link>
              </li>
              <li>
                <Link to="blank.html">Blank Page</Link>
              </li>
            </ul>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
            <Link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseMulti" data-parent="#exampleAccordion">
              <i class="fa fa-fw fa-sitemap"></i>
              <span class="nav-link-text">Menu Levels</span>
            </Link>
            <ul class="sidenav-second-level collapse" id="collapseMulti">
              <li>
                <Link to="#">Second Level Item</Link>
              </li>
              <li>
                <Link to="#">Second Level Item</Link>
              </li>
              <li>
                <Link to="#">Second Level Item</Link>
              </li>
              <li>
                <Link class="nav-link-collapse collapsed" data-toggle="collapse" to="#collapseMulti2">Third Level</Link>
                <ul class="sidenav-third-level collapse" id="collapseMulti2">
                  <li>
                    <Link to="#">Third Level Item</Link>
                  </li>
                  <li>
                    <Link to="#">Third Level Item</Link>
                  </li>
                  <li>
                    <Link to="#">Third Level Item</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
            <Link class="nav-link" to="#">
              <i class="fa fa-fw fa-link"></i>
              <span class="nav-link-text">Link</span>
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav sidenav-toggler">
          <li class="nav-item">
            <Link to="#" class="nav-link text-center" id="sidenavToggler">
              <i class="fa fa-fw fa-angle-left"></i>
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <form class="form-inline my-2 my-lg-0 mr-lg-2">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="Search for..."/>
                <span class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
          </li>

          <li class="dropdown authContainer">
            <button class="btn bg-transparent dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img width="25px" style={{marginRight: '5px'}} className="img-responsive rounded-circle" src="/assets/avatar.png" alt="User Image"/> 
              <span className="hidden-xs">{user ? `${user.firstName} ${user.lastName}`: 'Admin'}</span>
            </button>
              <ul className="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenuButton">
                <li className="user-header text-white text-center bg-dark">
                    <img width="80px" className="img-responsive rounded-circle" src="/assets/avatar.png" alt="User Image"/>
                    <p>
                    {user ? `${user.firstName} ${user.lastName}`: 'Admin'}
                    <small>Admin panel</small>
                    </p>
                </li>
                <li className="user-footer">
                    <div className="float-left">
                    <a href="#" className="btn btn-default btn-flat"><i className="fa fa-user"></i> Profile</a>
                    </div>
                    <div className="float-right">
                        <Link to="#" className="btn btn-default btn-flat" onClick={() => {
                            localStorage.clear();
                            LogoutUser();
                        }}>
                            <i className="fa fa-paper-plane"></i> Logout
                        </Link>
                    </div>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
