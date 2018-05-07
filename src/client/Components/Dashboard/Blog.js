import React from 'react';

class AdminBlog extends React.Component{
  render(){
    return(
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
      <div className="card mb-3">
      <div className="card-header">
        <i className="fa fa-table"></i> Data Table Example</div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Comments</th>
                <th>Post date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>
                  <button><i className="fa fa-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}

export default AdminBlog;