import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import Axios from 'axios';
import { connect } from 'react-redux';
import { startLogin } from '../Actions/auth';


class Login extends React.Component{
  state = {
    email: '',
    password: '',
    err: false
  }

  loginHandler = (e) => {
    e.preventDefault();
    Axios.post('/siu/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then((res) => {
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

  render() {
    const props = this.props;
    return (
      <section className="Login text-center">
        <Container>
          <Row>
            <div id="regLoginForm" className="col-sm-5">
              <form className="form-group" onSubmit={this.loginHandler} >
                <div className="closeBtnLogin" onClick={() => props.history.push('/')}><i className="fa fa-times-circle fa-2x"></i></div>
                <h2>Login</h2>
                <input required="required" type="email" placeholder="Email" className="" onChange={(e) => this.setState({
                  email: e.target.value
                })}/>
                <input required type="password" placeholder="Password" className=""onChange={(e) => this.setState({
                  password: e.target.value
                })}/>
                <div className="d-flex">
                  <div className="mr-auto p-2">
                    <input type="checkbox" id="remember"/>
                    <label for="remember">Remember</label></div>
                  <div className="p-2"><Link to="#">Forget</Link></div>
                </div>
                <input type="submit" className="btn btn-info" defaultValue="Login"/>
                <div className="d-flex createAccountBtn">
                  <label><Link to="/register">Create an Account</Link></label>
                </div>
              </form>

              {this.state.err &&
                <div className="alert alert-warning">Login Error</div>
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

export default connect(undefined, mapDispatchToProps)(Login);
