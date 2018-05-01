import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import styles from '../Styles/login.scss';


const Register = (props) => {
  return (
    <section className="Login text-center">
      <Container>
        <Row>
          <div id="regLoginForm" className="col-sm-5">
            <form className="form-group">
              <div className="closeBtnLogin" onClick={() => props.history.goBack()}><i className="fa fa-times-circle fa-2x"></i></div>
              <h2>Sign Up</h2>
              <input type="text" placeholder="First Name" className=""/>
              <input type="text" placeholder="Last Name" className=""/>
              <input type="text" placeholder="Username" className=""/>
              <input type="text" placeholder="Email" className=""/>
              <input type="password" placeholder="Password" className=""/>
              <div className="d-flex">
                <div className="mr-auto p-2">
                  <input type="checkbox" id="remember"/>
                  <label for="remember">Remember</label></div>
                <div className="p-2"><Link to="#">Forget</Link></div>
              </div>
              <button className="btn btn-info">Register</button>
              <div className="d-flex createAccountBtn">
                <label>Already have an account <Link to="/login">Login</Link></label>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
