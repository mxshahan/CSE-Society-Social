import React from 'react';
import Axios from 'axios';
import { deleteBlog } from '../../Actions/auth'
import { connect } from 'react-redux'

const DeleteBlog = (props) => (
  <button className="btn btn-danger float-right" onClick={(e) => {
    e.preventDefault();
    props.deleteItem(props.id)
  }}><i className="fa fa-trash"></i></button>  
);


export default (DeleteBlog);