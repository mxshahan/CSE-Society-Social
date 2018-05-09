import React from 'react';

const Model = ({data}) => (
  <div className="modal fade" id={data._id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">{data.firstName} {data.lastName}</h5>
        </div>
        <div className="modal-body">
          <table>
            <tr>
              <td>Email: </td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Phone Number: </td>
              <td>{data.phnNumber}</td>
            </tr>
            <tr>
              <td>Blog Created </td>
              <td>{data.blog.length}</td>
            </tr>
            <tr>
              <td>Account Type: </td>
              <td>{data.accountType}</td>
            </tr>
            {data.accountType.toLowerCase() === 'student' && 
            <div className="p-0 m-0">
              <tr>
                <td>Roll Number:</td>
                <td>{data.student.roll_no}</td>
              </tr>
              <tr>
                <td>Registration Number:</td>
                <td>{data.student.reg}</td>
              </tr>
              <tr>
                <td>Semester:</td>
                <td>{data.student.semester}</td>
              </tr>
            </div>
            }
            <tr>
              <td>Member Since </td>
              <td>{data.createdAt.substring(0, data.createdAt.indexOf('T'))}</td>
            </tr>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export default Model;