import React from 'react';
import { Link } from 'react-router-dom';
// import styles from '../Styles/notfound.scss';


function NotFound() {
  return (
    <div className="normal">
      <h1 className="title">Ops! 404 Error - Page not found</h1>
      {/* <img src="./assets/yay.jpg" alt=""/> */}
      <ul className="list">
        <li>You might type wrong <code>URL</code>. Check out the url.</li>
        <li><Link to="/">Go Home</Link></li>
      </ul>
    </div>
  );
}

NotFound.propTypes = {
};

export default NotFound;
