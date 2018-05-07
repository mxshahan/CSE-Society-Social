import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import Container from '../Partials/Container';
import Row from '../Partials/Row';
import '../../Styles/Dashboard/profile.scss';
import storage from '../../Firebase/firebase';

class UserInfo extends React.Component{
  state = {
    uploadStatus: false,
    profile_picture: ''
  }
  handleFileUpload = () => {
    this.setState({
      uploadStatus: undefined,            
    })
    const file = e.target.files[0];        
    const storageRef = storage.ref('shuvojit/profile'+ file.name);
    const task = storageRef.put(file).then((res) => {
      this.setState({
          uploadStatus: true,
          //Getting the uploaded file URL
          profile_picture: res.metadata.downloadURLs[0]
      })
    }).catch((e)=>{
      console.log("Error", e)
    })
  }

  render(){
    const { user } = this.props;
    return (
      <div className="col-md-3">
        <div class="card">
          <div class="card-header text-center">
            <div className="rounded-circle m-3 profilePicture" style={{overflow: 'hidden'}}>
              <img className="img-fluid" src="/assets/avatar.png"/>
              <input 
                  ref={fileInput => this.fileInput = fileInput} 
                  type="file"
                  onChange={this.handleFileUpload}
                  style={{display: 'none'}}
              />
              <button className="btn btn-success-outline" onClick={() => this.fileInput.click()}><i className="fa fa-camera"></i></button>
            </div>
          {user && <h5>{user.firstName} {user.lastName}</h5> }
          </div>
          <div class="card-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link activeClassName="active" to="/myaccount" className="nav-link text-info"><i className="fa fa-user"></i> My Account</Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" to="/myaccount/blog" className="nav-link text-info"><i className="fa fa-file"></i> My Blog</Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" to="/myaccount/blog/create" className="nav-link text-info"><i className="fa fa-edit"></i> Post a Blog</Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" to="/myaccount/settings" className="nav-link text-info"><i className="fa fa-gear"></i> Account Setting</Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token, 
  user: state.auth.user
})


export default connect(mapStateToProps)(UserInfo);