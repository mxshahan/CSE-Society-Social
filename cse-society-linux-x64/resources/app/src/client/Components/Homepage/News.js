import React, {Component} from 'react';
import Row from '../Partials/Row';
import { Link } from 'react-router-dom'

const NewsFeed = ({news}) => (
    <div className="news">
        <div className=" card card-primary">
            <div className="card-body">
                <Row>        
                    <div className="col-md-12 news-description">                        
                        <div className="news-title">
                            <h2>{news ? news.title : 'Untitled'}</h2>
                        </div>
                        <p>{news ? news.description.substring(0, 200) : 'No Description'}</p>
                        <div className="text-right">
                            <Link to={`/news#${news && news._id}`}><button className="btn btn-danger btn-right">Read more</button></Link>
                        </div>
                    </div>
                </Row>                        
            </div>
        </div>
    </div>
);

export default NewsFeed;