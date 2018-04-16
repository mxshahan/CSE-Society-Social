import React from 'react';
import { Link } from 'react-router-dom'

const FooterWidget = () => (
 <div className="col-md-4">
    <div className="widget widget-footer">
        <h2>Footer Title</h2>
        <div>
            <ul>
                <li><Link to="#">Option Here</Link></li>
                
                <li><Link to="#">Th One</Link></li>
                
                <li><Link to="#">Option One</Link></li>
                
                <li><Link to="#">Option One</Link></li>
                
                <li><Link to="#">Option One</Link></li>

            </ul>
        </div>
    </div>
</div>
);

export default FooterWidget;