import React, {Component} from 'react';
import Notice from './Notice';
import Axios from 'axios';

class Notices extends React.Component{
    state = {
        notice: false
    }
    componentDidMount() {
        Axios.get(`/admin/notice`).then((res) => {
            this.setState({
                notice: res.data
            })
        })
    }

    render(){
        return (
            <div className="col-md-5 col-sm-6 col-xs-12">
                <h2 className="section-heading">Notices</h2>
                <div className="notices bg-light">
                    {this.state.notice ? this.state.notice.map((notice) => {
                        return <Notice data={notice}/>
                    }): 'Loading...'}
                    
                </div>
            </div>
        )
    }
}


export default Notices;