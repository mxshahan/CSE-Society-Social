import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import BlogComment from './Blog.Comment';
import BlogAd from './BlogAd';
import Container from '../Partials/Container';
import { getSingleBlog, getSingle } from '../../Actions/blog';


class SingleBlog extends React.Component{
    state = {
        single: false
    }
    componentDidMount(){
        if (this.props.blogAll) {
            this.props.getFromBlog();
            this.setState({
                single: true
            })
            console.log('pre')
        } else {
            console.log('post')
            Axios.get(`http://localhost:5000/siu/blog/${this.props.match.params.id}`).then((res) => {
                // console.log(res);
                this.props.getOneBlog(res.data);
                this.setState({
                    single: true
                })
            }).catch((e) => {
                console.log('Error getting message', e);
                throw e;
            })
        }
    }

    render(){
        const single = this.props.single;
        // console.log(this.state.single)
        console.log(this.props.singleBlog())
        
        return (
        <section id="single-blog-sec">
            {this.props.single ? 
            <div id="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                        <div className="clearfix inner-blog-content card-body">
                            <div id="single-blog-head-sec">
                                
                                <img className="img-responsive rounded-circle profile-img" src="../assets/5.jpg"/>
                                <div className="single-blog-head">
                                    <p id="single-blog-title" className="clearfix">
                                    <a href="#"><b>{single.title}</b></a>
                                    </p>
                                    <p className="date">{moment(single.date).format('D/M/Y')}</p>
                                </div>
                                <span className="pull-right follow-btn" href="#" id="blog-follow">Follow</span>
                            </div> 
                            <div id="blog-maincontent-sec">
                                <h2 className="title text-center"> {single.title} </h2> 
                                <img className="img-responsive" src="../assets/2.jpg"/>
                                <p className="content-p">{single.description}</p> 
                                
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                            <BlogAd/>
                            <BlogAd/>
                            <BlogAd/>
                        </div>
                    </div>
                    <BlogComment/>   
                </div>
            </div>
            : 
            <Container>
                <p>Loading...</p>     
            </Container>
            }
        </section>
        )
    }
}


const mapStateToProps = (state, props) => ({
    blogAll: state.blog.all,
    single: state.blog.single
})

const mapDispatchToProps = (dispatch, props, getState) => ({
    getOneBlog: (data) => dispatch(getSingleBlog(data)),
    getFromBlog: () => dispatch(getSingle(props.match.params.id)),
    singleBlog: () => getState().blog.all
}) 


export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);