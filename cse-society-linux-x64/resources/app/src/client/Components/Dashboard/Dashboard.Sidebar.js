import React from 'react'
import { Link } from 'react-router-dom'
import { LogoutUser } from '../../Actions/auth';
import { connect } from 'react-redux'

class DashboardSidebar extends React.Component{
  render(){
    const {isAuthenticated, LogoutUser, user, ...props} = this.props;
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <Link class="navbar-brand" to="/">Homepage</Link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
            <Link class="nav-link" to="/dashboard/blog" >
              <i class="fa fa-fw fa-edit"></i> 
              <span class="nav-link-text">Blog</span>
            </Link>
            <Link class="nav-link" to="/dashboard/event" >
              <i class="fa fa-fw fa-leaf"></i> 
              <span class="nav-link-text">Event</span>
            </Link>
            <Link class="nav-link" to="/dashboard/notice" >
              <i class="fa fa-fw fa-info-circle"></i> 
              <span class="nav-link-text">Notice</span>
            </Link>
            <Link class="nav-link" to="/dashboard/result" >
              <i class="fa fa-fw fa-list-ul"></i> 
              <span class="nav-link-text">Result</span>
            </Link>
            <Link class="nav-link" to="/dashboard/newsfeed" >
              <i class="fa fa-fw fa-life-ring"></i> 
              <span class="nav-link-text">Newsfeed</span>
            </Link>
            <Link class="nav-link" to="/dashboard/project" >
              <i class="fa fa-fw fa-fw fa-edit"></i> 
              <span class="nav-link-text">Student Project</span>
            </Link>
            {/* <ul class="sidenav-second-level collapse" id="blog">
              <li>
                <Link to="/dashboard/blog">All Blog</Link>
              </li>
              <li>
                <Link to="/dashboard/blog/create">Add New</Link>
              </li>
            </ul> */}
          </li>
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
            <Link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseMulti" data-parent="#exampleAccordion">
              <i class="fa fa-fw fa-sitemap"></i>
              <span class="nav-link-text">Users</span>
            </Link>
            <ul class="sidenav-second-level collapse" id="collapseMulti">
              <li>
                <Link to="#">Teachers</Link>
              </li>
              <li>
                <Link to="#">Alumni</Link>
              </li>
              <li>
                <Link to="#">Students</Link>
              </li>
            </ul>
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
              <span className="hidden-xs">{'Admin'}</span>
            </button>
              <ul className="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenuButton">
                <li className="user-header text-white text-center bg-dark">
                    <img width="80px" className="img-responsive rounded-circle" src="/assets/avatar.png" alt="User Image"/>
                    <p>
                    {'Admin'}
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
  isAuthenticated: !!localStorage.getItem('auth'),
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
