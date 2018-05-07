import React from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../../Actions/auth';

class Dashboard extends React.Component{
  state = {
    user: false
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/admin').then((res) => {
        this.props.setUser(res.data);
        this.setState({
          user: true
        })
    }).catch((e) => {
        console.log('Token not valid', e)
    })
  }

  render(){
    return (
      <div id="Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid">
            {/* Breadcrumbs*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
            {/* Icon Cards*/}
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-comments"></i>
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-support"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Area Chart Example*/}
            <div className="card mb-3">
              <div className="card-header">
                <i className="fa fa-area-chart"></i> Area Chart Example</div>
              <div className="card-body">
                <canvas id="myAreaChart" width="100%" height="30"></canvas>
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                {/* Example Bar Chart Card*/}
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-bar-chart"></i> Bar Chart Example</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-8 my-auto">
                        <canvas id="myBarChart" width="100" height="50"></canvas>
                      </div>
                      <div className="col-sm-4 text-center my-auto">
                        <div className="h4 mb-0 text-primary">$34,693</div>
                        <div className="small text-muted">YTD Revenue</div>
                        <hr/>
                        <div className="h4 mb-0 text-warning">$18,474</div>
                        <div className="small text-muted">YTD Expenses</div>
                        <hr/>
                        <div className="h4 mb-0 text-success">$16,219</div>
                        <div className="small text-muted">YTD Margin</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                {/* Card Columns Example Social Feed*/}
                <div className="mb-0 mt-4">
                  <i className="fa fa-newspaper-o"></i> News Feed</div>
                <hr className="mt-2"/>
                <div className="card-columns">
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=610" alt=""/>
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">David Miller</a></h6>
                      <p className="card-text small">These waves are looking pretty good today!
                        <a href="#">#surfsup</a>
                      </p>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up"></i>Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment"></i>Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share"></i>Share</a>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1"><a href="#">John Smith</a></h6>Very nice! I wish I was there! That looks amazing!
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">Like</a>
                            </li>
                            <li className="list-inline-item">·</li>
                            <li className="list-inline-item">
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                          <div className="media mt-3">
                            <a className="d-flex pr-3" href="#">
                              <img src="http://placehold.it/45x45" alt=""/>
                            </a>
                            <div className="media-body">
                              <h6 className="mt-0 mb-1"><a href="#">David Miller</a></h6>Next time for sure!
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <a href="#">Like</a>
                                </li>
                                <li className="list-inline-item">·</li>
                                <li className="list-inline-item">
                                  <a href="#">Reply</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer small text-muted">Posted 32 mins ago</div>
                  </div>
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=180" alt=""/>
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">John Smith</a></h6>
                      <p className="card-text small">Another day at the office...
                        <a href="#">#workinghardorhardlyworking</a>
                      </p>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up"></i>Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment"></i>Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share"></i>Share</a>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1"><a href="#">Jessy Lucas</a></h6>Where did you get that camera?! I want one!
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">Like</a>
                            </li>
                            <li className="list-inline-item">·</li>
                            <li className="list-inline-item">
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer small text-muted">Posted 46 mins ago</div>
                  </div>
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=281" alt=""/>
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">Jeffery Wellings</a></h6>
                      <p className="card-text small">Nice shot from the skate park!
                        <a href="#">#kickflip</a>
                        <a href="#">#holdmybeer</a>
                        <a href="#">#igotthis</a>
                      </p>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up"></i>Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment"></i>Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share"></i>Share</a>
                    </div>
                    <div className="card-footer small text-muted">Posted 1 hr ago</div>
                  </div>
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=185" alt=""/>
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">David Miller</a></h6>
                      <p className="card-text small">It's hot, and I might be lost...
                        <a href="#">#desert</a>
                        <a href="#">#water</a>
                        <a href="#">#anyonehavesomewater</a>
                        <a href="#">#noreally</a>
                        <a href="#">#thirsty</a>
                        <a href="#">#dehydration</a>
                      </p>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up"></i>Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment"></i>Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share"></i>Share</a>
                    </div>
                    <hr className="my-0"/>
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1"><a href="#">John Smith</a></h6>The oasis is a mile that way, or is that just a mirage?
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">Like</a>
                            </li>
                            <li className="list-inline-item">·</li>
                            <li className="list-inline-item">
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                          <div className="media mt-3">
                            <a className="d-flex pr-3" href="#">
                              <img src="http://placehold.it/45x45" alt=""/>
                            </a>
                            <div className="media-body">
                              <h6 className="mt-0 mb-1"><a href="#">David Miller</a></h6>
                              <img className="img-fluid w-100 mb-1" src="https://unsplash.it/700/450?image=789" alt=""/>I'm saved, I found a cactus. How do I open this thing?
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <a href="#">Like</a>
                                </li>
                                <li className="list-inline-item">·</li>
                                <li className="list-inline-item">
                                  <a href="#">Reply</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer small text-muted">Posted yesterday</div>
                  </div>
                </div>
                {/* /Card Columns*/}
              </div>
              <div className="col-lg-4">
                {/* Example Pie Chart Card*/}
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-pie-chart"></i> Pie Chart Example</div>
                  <div className="card-body">
                    <canvas id="myPieChart" width="100%" height="100"></canvas>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                {/* Example Notifications Card*/}
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-bell-o"></i> Feed Example</div>
                  <div className="list-group list-group-flush small">
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <strong>David Miller</strong>posted a new article to
                          <strong>David Miller Website</strong>.
                          <div className="text-muted smaller">Today at 5:43 PM - 5m ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <strong>Samantha King</strong>sent you a new message!
                          <div className="text-muted smaller">Today at 4:37 PM - 1hr ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <strong>Jeffery Wellings</strong>added a new photo to the album
                          <strong>Beach</strong>.
                          <div className="text-muted smaller">Today at 4:31 PM - 1hr ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                        <div className="media-body">
                          <i className="fa fa-code-fork"></i>
                          <strong>Monica Dennis</strong>forked the
                          <strong>startbootstrap-sb-admin</strong>repository on
                          <strong>GitHub</strong>.
                          <div className="text-muted smaller">Today at 3:54 PM - 2hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">View all activity...</a>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
              </div>
            </div>
            {/* Example DataTables Card*/}

          </div>
          {/* /.container-fluid*/}
          {/* /.content-wrapper*/}

          {/* Scroll to Top*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up"></i>
          </a>

            </div>
        </div>
    )      
  }
}
const mapDispatchToProps = (dispatch) => ({
  setUser: (data) => dispatch(setUser(data))
})

export default connect(undefined, mapDispatchToProps)(Dashboard);