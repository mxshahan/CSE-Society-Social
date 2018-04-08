import React, {Component} from 'react';
import News from './News';

const NewsFeed = () => (
    <div className="col-md-7 col-sm-6 col-xs-12">
        <h2 className="section-heading">News Feed</h2>
        <div className="newsfeed bg-light">
            <News/>
            <News/>
            <News/>
            <News/>
            <News/>
            <News/>
        </div>
    </div>
);

export default NewsFeed;