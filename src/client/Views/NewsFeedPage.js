import React from 'react';
import Row from '../Components/Partials/Row';
import Container from '../Components/Partials/Container';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {
  FacebookShareCount,
  GooglePlusShareCount,

  FacebookShareButton,
  GooglePlusShareButton,

  FacebookIcon,
  GooglePlusIcon
} from 'react-share';
import siteurl from '../conf';
import SingleData from '../Components/Newsfeed';


class NewsFeedPage extends React.Component{
  state = {
    news: false,
    cont: false
  }

  componentDidMount() {
    Axios.get(`/admin/newsfeed`).then((res) => {
        this.setState({
            news: res.data
        })
    })
  }

  render(){
    return (
      <section id="notice-section">
        <Container>
          <div id="" className="section-heading">
              <h1 className="">Newsfeed</h1>
          </div>
          <Row>
            <div className="col-md-8">
              {this.state.news ? this.state.news.map((news) => {
                  return (
                    <SingleData data={news} lnk={this.props.location.pathname}/>
                  )
                }) : 'Loading...' }
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

export default NewsFeedPage;