import React from 'react';

// COMPONENTS
import Slider from '../Components/Homepage/Slider';
import NewsFeed from '../Components/Homepage/NewsFeed';
import Notices from '../Components/Homepage/Notices';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import Projects from '../Components/Homepage/Projects';

const Contact = () => (
  <div>
    <section>
      <Container>
            <h2 className="text-center">Contact US</h2><br/>
        <Row>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div class="well well-sm">
                  <form class="form-horizontal" method="post">
                      <fieldset>
                          <div class="form-group">
                            <input id="email" name="email" type="text" placeholder="Email Address" class="form-control"/>
                          </div>

                          <div class="form-group">
                            <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control"/>
                          </div>

                          <div class="form-group">
                            <textarea class="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
                          </div>

                          <div class="form-group">
                            <div class="col-md-12 text-center">
                              <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                            </div>
                          </div>
                      </fieldset>
                  </form>
              </div>
          </div>
          <div className="col-md-2"></div>
        </Row>
      </Container>   
    </section>
  </div>
);

export default Contact;