import React from 'react';
import { Link } from 'react-router-dom';
import Row from '../Components/Partials/Row';
import Container from '../Components/Partials/Container';
import Axios from 'axios';
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
import FacebookIcon from 'react-share/lib/FacebookIcon';
import GooglePlusShareButton from 'react-share/lib/GooglePlusShareButton';
import GooglePlusIcon from 'react-share/lib/GooglePlusIcon';
import siteurl from '../conf';
import SingleData from '../Components/Newsfeed';


class Notice extends React.Component {
    state = {
        notice: false,
        cont: false, 
        total: 0,
        list: []
    }

    componentDidMount() {
        Axios.get(`/admin/notice`).then((res) => {
            this.setState({
                notice: res.data,
                total: parseInt(res.data.length/5)
            })
        })
    }

    render() {
        const notice = this.state.notice
        return (
        <section id="notice-section">
            <Container>
                <div id="" className="section-heading">
                    <h1 className="">Latest Notice</h1>
                </div>
                <Row>
                    <div className="col-md-8">
                        {notice ? notice.slice(0).reverse().map((notice) => {
                        return (
                            <SingleData data={notice} lnk={this.props.location.pathname}/>                        
                        )
                        }) : notice === undefined ? 'No Data Found' : 'Loading...' }
                        {}
                    </div>

                    <div className="col-md-4">
                        <div class="mb-2">
                            <a href="#"><img className="img-fluid rounded-corner" src="../assets/11.jpg"/></a>
                        </div>
                        <div class="mb-2">
                            <a href="#"><img className="img-fluid rounded-corner" src="../assets/10.jpg"/></a>
                        </div>
                        <div class="mb-2">
                            <a href="#"><img className="img-fluid rounded-corner" src="../assets/9.jpg"/></a>
                        </div>
                    </div>
                    {/* <div className="col-md-12 pagination">
                        <div className="col-md-8">
                            {this.state.list.map((page) => {
                                return page
                            })}
                        </div>
                    </div> */}
                </Row>
            </Container> 
        </section>
        )
    }
}

export default Notice