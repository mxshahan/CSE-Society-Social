import React from 'react';
import Row from '../Components/Partials/Row';
import Container from '../Components/Partials/Container';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
import FacebookIcon from 'react-share/lib/FacebookIcon';
import GooglePlusShareButton from 'react-share/lib/GooglePlusShareButton';
import GooglePlusIcon from 'react-share/lib/GooglePlusIcon';
import siteurl from '../conf';
import SingleData from '../Components/Newsfeed';


class EventPage extends React.Component{
  state = {
    event: false,
    cont: false
  }
  componentDidMount() {
      Axios.get(`/admin/event`).then((res) => {
        this.setState({
          event: res.data
        })
      }).catch((e) => {
        this.setState({
          event: undefined
        })
      })
  }


  render(){
    const event = this.state.event;
    return (
      <section id="notice-section">
        <Container>
          <div id="" className="section-heading">
              <h1 className="">Events</h1>
          </div>
          <Row>
          <div className="col-md-8">
              {event ? event.map((event) => {
                  return (
                    <SingleData data={event} lnk={this.props.location.pathname}/>
                  )
                }) : event === undefined ? 'No Data Found' : 'Loading...' }
                {}
            </div>

            <div className="col-md-4">
                <div className="col-md-12">
                    <div id="single-blog-right-content">
                        <a href="#"><img className="img-responsive img-rounded" src="../assets/11.jpg"/></a>
                    </div>
                </div>
                
                <div className="col-md-12">
                    <div id="single-blog-right-content">
                        <a href="#"><img className="img-responsive img-rounded" src="../assets/10.jpg"/></a>
                    </div>
                </div>
                
                <div className="col-md-12">
                    <div id="single-blog-right-content">
                        <a href="#"><img className="img-responsive img-rounded" src="../assets/9.jpg"/></a>
                    </div>
                </div>
            </div>
          </Row>
        </Container>
      </section>
    )
  }
}

export default EventPage;