import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import '../Styles/blog.scss';
import Row from '../Components/Partials/Row';
import BlogCard from '../Components/Blog/Blog.Card';
import BlogSidebar from '../Components/Blog/Blog.Sidebar';
import { setBlog } from '../Actions/blog';

class Blog extends Component{
    state = {
        blog: false
    }
    componentDidMount(){
        Axios.get(`http://localhost:5000/siu/blog`).then((res) => {
            // console.log(res);
            this.props.setBlog(res.data);
            this.setState({
                blog: true
            })
        }).catch((e) => {
            console.log('Error getting message', e);
            throw e;
        })
    }

    render() {
        return (
            <section id="blog-section">
                {this.state.blog ?
                <div class="container">
                    <div className="section-heading">
                        <h3>Blog</h3>
                        <div className="float-right">
                        {this.props.isAuthenticated ?
                            <Link to="/myaccount/blog/create"><button className="btn btn-outline-secondary">Add New Blog</button></Link>
                        : <p className="alert alert-light">If you want to post a blog please <Link to="/login">Login</Link></p>}
                        </div>
                    </div>
                    <Row>
                        <div class="col-md-9">
                            <Row>
                                {Object.values(this.props.blog.all).map((blog, key) => <BlogCard key={key} blog={blog}/>)}
                            </Row>
                        </div>
                        <div class="col-md-3 p-0">
                            <BlogSidebar/>
                            <BlogSidebar/>
                            <BlogSidebar/>
                            <BlogSidebar/>
                            <BlogSidebar/>
                        </div>
                    </Row> {/*end of row */}                 
                </div>
                :
                <div className="container"> 
                    <p>Loading...</p>
                </div>}
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    blog: state.blog,
    isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    setBlog: (data) => dispatch(setBlog(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);