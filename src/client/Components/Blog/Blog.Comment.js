import React from 'react';
import { connect } from 'react-redux'
import Row from '../Partials/Row';
import Reply from './Blog.Reply';
import SingleComment from './Blog.SingleComment';
import Axios from 'axios';
import { addComment } from '../../Actions/blog';

class BlogComment extends React.Component{
    state = {
        comment: '',
        blogComment: ''
    }

    componentWillMount(){
    }

    commentPost = (e) => {
        e.preventDefault();
        Axios({
            method: 'post',
            url: `http://localhost:5000/siu/cmnt/${this.props.blogID}`,
            data: {
              comment: this.state.comment
            },
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('auth')
            }
          }).then((res) => {
            //   console.log(res.data)
              this.props.addComment(res.data);
            //   this.props.blgCmd(res.data) // Sending data to previous component
              this.setState({
                progress: 'Published',
                err: undefined,
                blogComment: res.data
              })
          }).catch((e) => {
              console.log(e)
          })
    }

    render(){
        const { comments, user, blogID, curUser } = this.props;
        return (
            <Row>
                <div className="col-md-9">
                {curUser ? 
                <div id="comment-sec" className="inner-blog-content clearfix">
                    <Row>
                        <div className="profile col-sm-1">
                            <img className="img-responsive rounded-circle profile-img" src="../assets/avatar.png"/>
                        </div>
                        <div className="col-sm-10">
                            <h3 className="profile-name">{curUser && `${curUser.firstName} ${curUser.lastName}`}</h3>
                            <textarea placeholder="add a comment" onChange={(e) => {
                                this.setState({
                                    comment: e.target.value
                                })
                            }}></textarea>                
                        </div>
                        <div className="col-sm-1 sendBtn">
                            <button className="btn btn-info" onClick={this.commentPost}>Post</button>
                        </div>
                    </Row>
                </div>
                : 
                <span className="badge badge-warning text-center">Please Login to Comment.</span>}

                    <div id="last-comment" className="inner-blog-content clearfix">
                        {comments.length > 0 ? comments.slice(0).reverse().map((comment) => <SingleComment comment={comment}/>) : 'No Comments Available'}
                    </div>    
                </div>
                <div className="col-md-3"></div>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    curUser: state.auth.user, // Current User
});

const mapDispatchToProps = (dispatch) => ({
    addComment: (cmnt) => dispatch(addComment(cmnt))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(BlogComment);