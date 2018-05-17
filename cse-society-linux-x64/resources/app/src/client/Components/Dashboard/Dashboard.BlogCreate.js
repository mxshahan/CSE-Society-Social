import React from 'react';
import Editor from './Dashboard.Editor';

class DBblogCreate extends React.Component{
  render(){
    return (
      <div id="Dashboard">
        <div className="content-wrapper blogCreate">
          <div className="container-fluid">
            {/* Breadcrumbs*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
            {/* Icon Cards*/}
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-comments"></i>
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-support"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Area Chart Example*/}
            <div className="card mb-3 textEditor">
              <div className="card-header">
                <i className="fa fa-area-chart"></i> Write Your Thought</div>
              <div className="card-body">
                <Editor/>
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
          </div>
          {/* /.container-fluid*/}
          {/* /.content-wrapper*/}

          {/* Scroll to Top*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up"></i>
          </a>

            </div>
        </div>
    )
  }
}

export default DBblogCreate;