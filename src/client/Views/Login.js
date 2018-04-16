import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';


const Login = (props) => {
  return (
    <section className="Login text-center">
      <Container>
        <Row>
          <div id="LoginForm" className="col-sm-5">
            <form className="form-group">
              <div className="closeBtnLogin" onClick={() => props.loginForm(false)}><i className="fa fa-times-circle fa-2x"></i></div>
              <h2>Login</h2>
              <input type="text" placeholder="Username/Email" className=""/>
              <input type="password" placeholder="Password" className=""/>
              <div className="d-flex">
                <div className="mr-auto p-2">
                  <input type="checkbox" id="remember"/>
                  <label for="remember">Remember</label></div>
                <div className="p-2"><Link to="#">Forget</Link></div>
              </div>
              <button className="btn btn-info">Login</button>
              <div className="d-flex createAccountBtn">
                <label><Link to="#">Create an Account</Link></label>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
