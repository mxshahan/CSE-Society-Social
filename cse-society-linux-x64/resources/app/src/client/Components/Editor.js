import React from 'react';
import { findDOMNode } from 'react-dom';
import Axios from 'axios';
import { connect } from 'react-redux'
import $ from 'jquery';
import Row from './Partials/Row';
import Container from './Partials/Container';
import '../Styles/texteditor.scss';
import storage from '../Firebase/firebase';
import { AddBlog } from '../Actions/blog';
import UserContent from './Profile/UserContent';
import { setUserBlog } from '../Actions/auth';

class Editor extends React.Component{
  state = {
    title: '',
    description: '',
    image: [],
    progress: false,
    blog: false,
    uploadStatus: false,
    err: false
  }
  
  componentDidMount() {
    // this.props.blog ? '' : this.props.history.push('/blog')
  }

  handleFileUpload = (e) => {
    this.setState({
        uploadStatus: 'Please Wait...',            
    })
    const file = e.target.files[0];        
    const storageRef = storage.ref('shuvojit/'+ file.name);
    const task = storageRef.put(file).then((res) => {
      this.setState({
          uploadStatus: 'Uploaded Successfully!',
          upload: true,
          //Getting the uploaded file URL
          image: [res.metadata.downloadURLs[0]]
      })
    }).catch((e)=>{
      console.log("Error", e)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, image } = this.state;
    const data = {
      title, description, image
    }
    if (title && description){
      this.setState({
        progress: 'Published'
      })
    } else {
      this.setState({
        err: 'Error with warning'
      })
    }
    this.props.AddNew(data);
  }

  render(){
    return (
      <UserContent>
        <div className="section-heading">
            <h3>Add New {this.props.title && this.props.title}</h3>
        </div>
        <Row>
          <div className="col-md-12 mb-4">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="Enter Blog Title" onChange={(e) => {
              this.setState({
                title: e.target.value,
                err: false,
                progress: false
              })
            }}/><br/>
            <div className="textEditor">
                <div className="card">
                  <div className="card-header">
                    <span className="toolbar">
                      <span id="heading" className="fa fa-plus"> Heading</span>
                      <span className="hiddenheading">
                      <span dataCommand='p'>Paragraph</span>
                      <span data-command='h1'>H1</span>
                      <span data-command='h2'>H2</span>
                      <span data-command='h3'>H3</span>
                      <span data-command='h4'>H4</span>
                      <span data-command='h5'>H5</span>
                      <span data-command='h6'>H6</span>
                      </span>
                      <span className="hidethem">
                      <span data-command='insertimage'><i className='fa fa-image'></i></span>
                      <span data-command='undo'><i className='fa fa-undo'></i></span>
                      <span data-command='redo'><i className='fa fa-repeat'></i></span>
                      <span data-command='bold'><i className='fa fa-bold'></i></span>
                      <span data-command='italic'><i className='fa fa-italic'></i></span>
                      <span data-command='underline'><i className='fa fa-underline'></i></span>
                      <span data-command='strikeThrough'><i className='fa fa-strikethrough'></i></span>
                      <span data-command='justifyLeft'><i className='fa fa-align-left'></i></span>
                      <span data-command='justifyRight'><i className='fa fa-align-right'></i></span>
                      <span data-command='justifyCenter'><i className='fa fa-align-center'></i></span>
                      <span data-command='justifyFull'><i className='fa fa-align-justify'></i></span>
                      <span data-command='quote'><i className='fa fa-quote-left'></i></span>
                      <span data-command='insertUnorderedList'><i className='fa fa-list-ul'></i></span>
                      <span data-command='insertOrderedList'><i className='fa fa-list-ol'></i></span>
                      <span data-command='createlink'><i className='fa fa-link'></i></span>
                      <span data-command='unlink'><i className='fa fa-unlink'></i></span>
                      <span data-command='subscript'><i className='fa fa-subscript'></i></span>
                      <span data-command='superscript'><i className='fa fa-superscript'></i></span>
                      </span>
                    </span>
                  </div>
                  {/* <div id="counter" className="card-body" contenteditable="true" onChange={(e) => {
                    this.setState({
                      blog: e.target.value
                    })
                  }}></div> */}
                  <textarea id="counter" className="card-body" onChange={(e) => {
                    this.setState({
                      description: e.target.value,
                      err: false,
                      progress: false
                    })
                  }}></textarea>
                  <div className="card-footer">
                      <small>Word counter: <span id="count"></span></small>
                  </div>
                </div>
                <input 
                    ref={fileInput => this.fileInput = fileInput} 
                    type="file"
                    onChange={this.handleFileUpload}
                    style={{display: 'none'}}
                />

                <div className="card-body px-5 py-5 bg-white text-center">
                  <span onClick={() => this.fileInput.click()}  className="uploadBtn"><i className="fa fa-upload fa-3x"></i></span>
                  <br/><br/>
                  {/* <div className="progress text-center py-2">
                    <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div> */}
                  <p>{this.state.uploadStatus && this.state.uploadStatus}</p>
                  
                </div>
                <br/>
                {this.state.err && <span className="alert alert-warning">{this.state.err}</span>}
                {this.state.err === undefined && <span className="alert alert-success">Successfully Published</span>}
                {this.state.progress ? 
                <button className="btn btn-dark float-right" disabled>{this.state.progress}</button>
                : 
                <button className="btn btn-dark float-right">Publish</button>
                }                    
            </div>
          </form>
          </div>
        </Row>
        </UserContent>
    )
  }
}

export default Editor;