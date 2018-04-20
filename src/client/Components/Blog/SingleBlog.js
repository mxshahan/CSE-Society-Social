import React from 'react';

const SingleBlog = () => (
   <section id="single-blog-sec">
       <div id="">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                  <div className="col-md-9">
                    <div className="clearfix inner-blog-content">
                        <div id="single-blog-head-sec">
                            <img className="img-responsive img-circle profile-img" src="assets/5.jpg"/>
                            <p id="single-blog-title" className="clearfix"><a href="#"><b>Android Connectivity Check</b></a></p>
                            <p> <a href="#" id="blog-follow">Follow</a></p>
                            <p className="date">2nd Jan 2018</p>
                        </div> 
                        <div id="blog-maincontent-sec">
                           <h2 className="title text-center"> Android Connectivity Check </h2> 
                            <img className="img-responsive" src="assets/2.jpg"/>
                            <p className="content-p">
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            
                            
                        </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                     <div id="single-blog-right-content">
                         <a href="#"><img className="img-responsive img-rounded" src="assets/11.jpg"/></a>
                     </div>
                  </div>
                  
                   <div className="col-md-3">
                     <div id="single-blog-right-content">
                         <a href="#"><img className="img-responsive img-rounded" src="assets/10.jpg"/></a>
                     </div>
                  </div>
                  
                   <div className="col-md-3">
                     <div id="single-blog-right-content">
                         <a href="#"><img className="img-responsive img-rounded" src="assets/9.jpg"/></a>
                     </div>
                  </div>
              
              </div>
              
              <div className="row">
                <div className="col-md-9">
                   <div id="comment-sec" className="inner-blog-content clearfix">
                        <img className="img-responsive img-circle profile-img" src="assets/ishtiak.jpg"/>
                       <h3 className="profile-name">Md Ishtiakur Rahman</h3>
                       <textarea placeholder="add a comment"></textarea>
                     
                  </div>
                  <div id="last-comment" className="inner-blog-content clearfix">
                        <img className="img-responsive img-circle profile-img" src="assets/ishtiak.jpg"/>
                      
                         <h3 className="profile-name">Md Ishtiakur Rahman</h3>
                       <textarea>This is very nice post </textarea>
                       
                      <div className="like-comment-sec">
                        <a href="" className="" type="button">Like</a>
                        <a href="" className="reply">Reply</a>
                        <strong>2 min ago</strong>
                          

                       </div>
                      
                       <div id="last-comment" className="reply-comments  clearfix">
                        <img className="img-responsive img-circle profile-img" src="assets/ishtiak.jpg"/>
                      
                         <h3 className="profile-name">Md Ishtiakur Rahman</h3>
                       <textarea>This is very nice post </textarea>
                       
                      <div className="like-comment-sec">
                        <a href="" className="" type="button">Like</a>
                        <a href="" className="reply">Reply</a>
                          <strong>2 min ago</strong>
                          

                       </div>
                      
                    
                       
                  </div> 
                    
                       
                  </div>    
                </div>
                <div className="col-md-3"></div>
              </div>
                 
            </div>
          </div>
       </div>
   </section>
)
export default SingleBlog;