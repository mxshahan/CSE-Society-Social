import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import styles from '../Styles/login.scss';
import Axios from 'axios';
import { connect } from 'react-redux';
import { startLogin } from '../Actions/auth';


class Register extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phnNumber: '',
    accountType: '',
    err: false
  }

  signupHandler = (e) => {
    e.preventDefault();
    Axios.post('/siu/signup', {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phnNumber: this.state.phnNumber,
      accountType: this.state.accountType,
    })
    .then((res) => {
      console.log(res.data)
      localStorage.setItem('auth', res.data.token);
      this.props.startLogin(res.data);

      this.setState({
        err: undefined
      })

      this.props.history.push('/');
    })
    .catch((e) => {
      this.setState({
        err: true
      })
      console.log('Error login', e)
    })
  }

  render(){
    const props = this.props;
    return (
      <section className="Login text-center">
        <Container>
          <Row>
            <div id="regLoginForm" className="col-sm-5">
              <form className="form-group" onSubmit={this.signupHandler} >
                <div className="closeBtnLogin" onClick={() => props.history.push('/')}><i className="fa fa-times-circle fa-2x"></i></div>
                <h2>Sign Up</h2>
                <input type="text" placeholder="First Name (Required)" className="" onChange={(e) => this.setState({
                  firstName: e.target.value
                })}/>
                <input type="text" placeholder="Last Name (Required)" className="" onChange={(e) => this.setState({
                  lastName: e.target.value
                })}/>
                <input type="email" placeholder="Email (Required)" className="" onChange={(e) => this.setState({
                  email: e.target.value
                })}/>
                <input type="password" placeholder="Password (Required)" className="" onChange={(e) => this.setState({
                  password: e.target.value
                })}/>
                <input type="number" placeholder="Phone Number" className="" onChange={(e) => this.setState({
                  phnNumber: e.target.value
                })}/>
                <select onChange={(e) => this.setState({
                  accountType: e.target.value
                })}>
                  <option value="-1">Select Acount Type</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Alumni">Alumni</option>
                  <option value="Student">Student</option>
                </select>
                <button className="btn btn-info">Register</button>
                <div className="d-flex createAccountBtn">
                  <label>Already have an account <Link to="/login">Login</Link></label>
                </div>
              </form>
              {this.state.err &&
                <div className="alert alert-warning">Sign Up Error</div>
              }
              {this.state.err === undefined &&
                <div className="alert alert-success">Successfull</div>
              }
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (data) => dispatch(startLogin(data))
})

export default connect(undefined, mapDispatchToProps)(Register);
