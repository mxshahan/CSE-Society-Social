import React from 'react';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';

class Gallery extends React.Component{
  render(){
    return (
      <Container>
        <Row>
          <div className="col-md-3">
            <div className="card">
              <div classNames="card-body">
                <img className="img-fluid" src="/assets/card.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div classNames="card-body">
                <img className="img-fluid" src="/assets/card.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div classNames="card-body">
                <img className="img-fluid" src="/assets/card.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div classNames="card-body">
                <img className="img-fluid" src="/assets/card.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div classNames="card-body">
                <img className="img-fluid" src="/assets/card.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div classNames="card-body">
                <img className="img-fluid" src="/assets/card.jpg"/>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Gallery;