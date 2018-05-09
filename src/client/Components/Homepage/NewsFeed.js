import React, {Component} from 'react';
import News from './News';
import Axios from 'axios';

class NewsFeed extends React.Component{
    state = {
        news: false
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
            <div className="col-md-7 col-sm-6 col-xs-12">
                <h2 className="section-heading">News Feed</h2>
                <div className="newsfeed bg-light">
                    {this.state.news ? 
                    this.state.news.map((news) => {
                      return <News news={news}/>  
                    }) : 'Loading...' }
                </div>
            </div>
        )
    }
}  

export default NewsFeed;