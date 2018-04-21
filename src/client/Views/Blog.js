import React from 'react';
import '../Styles/blog.scss';
import Row from '../Components/Partials/Row';
const Blog = () => (
    <section id="blog-section">
        <div class="container">
            <Row>
                <div class="col-md-8">
                    <Row>
                        <div class="col-md-6">
                            <a href="/blog/asdf11">
                                <div id="blog-item" class="card">
                                    <img width="100%" class="img-responsive img-rounded" src="assets/2.jpg"/>
                                    <div id="blog-item-content" class="card-body">
                                        <h4 class="title">This is the title of the blog</h4>
                                        <p class="description"><b>Description:</b> This is the description of the blog item post and the post is laravell</p>
                                        <p class="writer"><b>Writer:</b> Md Ishtiakur Rahman</p>
                                        <p class="date">01/02/2018</p>
                                    </div>    
                                </div>
                            </a>    
                        </div>
                        <div class="col-md-6">
                            <a href="/blog/asdf11">
                                <div id="blog-item" class="card">
                                    <img width="100%" class="img-responsive img-rounded" src="assets/2.jpg"/>
                                    <div id="blog-item-content" class="card-body">
                                        <h4 class="title">This is the title of the blog</h4>
                                        <p class="description"><b>Description:</b> This is the description of the blog item post and the post is laravell</p>
                                        <p class="writer"><b>Writer:</b> Md Ishtiakur Rahman</p>
                                        <p class="date">01/02/2018</p>
                                    </div>    
                                </div>
                            </a>    
                        </div>
                        <div class="col-md-6">
                            <a href="/blog/asdf11">
                                <div id="blog-item" class="card">
                                    <img width="100%" class="img-responsive img-rounded" src="assets/2.jpg"/>
                                    <div id="blog-item-content" class="card-body">
                                        <h4 class="title">This is the title of the blog</h4>
                                        <p class="description"><b>Description:</b> This is the description of the blog item post and the post is laravell</p>
                                        <p class="writer"><b>Writer:</b> Md Ishtiakur Rahman</p>
                                        <p class="date">01/02/2018</p>
                                    </div>    
                                </div>
                            </a>    
                        </div>
                        <div class="col-md-6">
                            <a href="/blog/asdf11">
                                <div id="blog-item" class="card">
                                    <img width="100%" class="img-responsive img-rounded" src="assets/2.jpg"/>
                                    <div id="blog-item-content" class="card-body">
                                        <h4 class="title">This is the title of the blog</h4>
                                        <p class="description"><b>Description:</b> This is the description of the blog item post and the post is laravell</p>
                                        <p class="writer"><b>Writer:</b> Md Ishtiakur Rahman</p>
                                        <p class="date">01/02/2018</p>
                                    </div>    
                                </div>
                            </a>    
                        </div>
                    </Row>
                </div>

                <div class="col-md-4">
                    <div className="col-md-12">
                        <div id="blog-right-side-content">
                            <a href="#"><img width="100%" class="img-responsive img-rounded" src="assets/3.jpg"/></a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div id="blog-right-side-content">
                            <a href="#"><img width="100%" class="img-responsive img-rounded" src="assets/3.jpg"/></a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div id="blog-right-side-content">
                            <a href="#"><img width="100%" class="img-responsive img-rounded" src="assets/3.jpg"/></a>
                        </div>
                    </div>
                </div>
            </Row> {/*end of row */}                 
        </div>
    </section>
);

export default Blog;