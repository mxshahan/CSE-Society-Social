import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import Axios from 'axios';
import { connect } from 'react-redux';


class Login extends React.Component{
  state = {
    email: '',
    password: ''
  }

  loginHandler = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/siu/signin', this.state)
    .then((res) => {
      localStorage.setItem('auth', res.data.token);
    })
    .catch((e) => {
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
                <div className="closeBtnLogin" onClick={() => props.loginForm({login: false, register: false})}><i className="fa fa-times-circle fa-2x"></i></div>
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
                  <label><Link to="#" onClick={() => {
                    props.loginForm({login: false, register: true});
                  }}>Create an Account</Link></label>
                </div>
              </form>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!localStorage.getItem('auth')
})

export default connect(mapStateToProps)(Login);
