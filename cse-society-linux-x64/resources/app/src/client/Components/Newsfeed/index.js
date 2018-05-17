import React from 'react';
import Row from '../Partials/Row';
import {Link} from 'react-router-dom';
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
import FacebookIcon from 'react-share/lib/FacebookIcon';
import GooglePlusShareButton from 'react-share/lib/GooglePlusShareButton';
import siteurl from '../../conf';
import GooglePlusIcon from 'react-share/lib/GooglePlusIcon';
class SingleData extends React.Component{
  state = {
    cont: false
  }
  render(){
    const data = this.props.data;
    return (
      <div className="notice-content" id={data._id}>
      <Row>
        <div className="col-md-4">
          <img className="img-fluid rounded-border" src={data.image.length !=0 ? data.image[0]: '/assets/default.svg'}/>
        </div>  
        <div className="col-md-8">
          <Link to="#" onClick={() => {
              this.setState({
                  cont: !!!this.state.cont
              })
          }}><h3>{data.title}</h3></Link>
          {/* {console.log(this.state.cont)} */}
          <p>{this.state.cont ? data.description : `${data.description.substring(0, 250)} ...`} <br/>
          {Object.values(data.description).length >= 150 && 
            <button className="btn btn-info mt-2" onClick={() => {
              this.setState({
                cont: !!!this.state.cont
              })
            }}>{this.state.cont ? <i className="fa fa-arrow-up"></i> : <i className="fa fa-arrow-down"></i>}
            </button> 
          }
          <br/>
          <div className="">
            <FacebookShareButton
              url={`${siteurl}/${this.props.lnk}#${data._id}`}
              quote={data.title}
              className="float-right ml-1">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <GooglePlusShareButton
              url={`${siteurl}/${this.props.lnk}`}
              quote={data.title}
              className="float-right ml-1">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
            <span className="float-right mr-2">Share</span>
          </div>
          {/* <button className="btn btn-info m-2"><i className="fa fa-thumbs-up"></i></button>
          <button className="btn btn-info m-2"><i className="fa fa-thumbs-up"></i></button>
          <button className="btn btn-info m-2"><i className="fa fa-thumbs-up"></i></button> */}
          </p>
        </div>                    
      </Row>
    </div>      
    )
  }
}

export default SingleData;