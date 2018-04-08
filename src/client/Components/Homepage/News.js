import React, {Component} from 'react';
import Row from '../Partials/Row';

const NewsFeed = () => (
    <div className="news">
        <div className=" card card-primary">
            <div className="card-body">
                <Row>                
                    <div className="col-md-4 news-image">
                        <img src="assets/card.jpg" alt="Image" width="200px"/>
                    </div>
                    <div className="col-md-8 news-description">                        
                        <div className="news-title">
                            <h2>Manage your reports</h2>
                        </div>
                        <p>In the center column, I want to add a small margin between each Server Div. But, if I add a margin to the CSS, it ends up line wrapping and looking like this</p>
                        <div className="text-right">
                            <button className="btn btn-danger btn-right">Read more</button>
                        </div>
                    </div>
                </Row>                        
            </div>
        </div>
    </div>
);

export default NewsFeed;