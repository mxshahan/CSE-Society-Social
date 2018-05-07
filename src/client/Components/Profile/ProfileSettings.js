import React from 'react';
import UserContent from './UserContent';
import Row from '../Partials/Row';

class ProfileSettings extends React.Component{
  state = {
    status: false
  }

  EditProfile = () => {
    this.setState({
      status: true
    })
  }

  render() {
    return (
      <UserContent>
        <div className="section-heading">
          <h3>Account Setting <button className="btn btn-info float-right" onClick={this.EditProfile}><i className="fa fa-edit"></i> Edit</button></h3>
        </div>
          {this.state.status ?
          <form className="form-group">
            <input className="form-control" type="text" placeholder="Firstname"/><br/>
            <input className="form-control" type="text" placeholder="Lastname"/><br/>
            <input className="form-control" type="text" placeholder="Email" disabled="disabled"/><br/>
            <input className="form-control" type="text" placeholder="Firstname"/><br/>
            <input className="form-control" type="text" placeholder="Firstname"/><br/>
            <button className="btn btn-info">Update</button>
          </form>
          :          
          <table className="table table-light">
            <tr className="mb-1">
              <td>Name:</td>
              <td className="text-right">Ahsan Asif</td>
            </tr>
            <tr className="mb-1">
              <td>Email:</td>
              <td className="text-right">ahsanasif@nothing.com</td>
            </tr>
            <tr className="mb-1">
              <td>Phone Number:</td>
              <td className="text-right">+8801717454512</td>
            </tr>
            <tr className="mb-1">
              <td>Account Type:</td>
              <td className="text-right">Teacher</td>
            </tr>
          </table>
          }
      </UserContent>
    )
  }
}

export default ProfileSettings;