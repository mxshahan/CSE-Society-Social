import React, {Component} from 'react';
import Row from '../Partials/Row';
import OwlCarousel from 'react-owl-carousel';
import OwlProject from './OwlProject';
import Axios from 'axios';

class Projects extends React.Component{
    state = {
        projects: []
    }
    componentDidMount() {
        Axios.get(`/admin/project`).then((res) => {
            this.setState({
                projects: res.data
            })
        })
    }

    render(){
        const projects = this.state.projects;
        // console.log(projects)
        return (
            <Row>
                <div className="col-md-12">
                    <h2 className="section-heading">Student Projects</h2>
                </div>
                {projects.length != 0 && 
                    <OwlCarousel 
                        className="owl-theme"
                        loop margin={0} 
                        nav={false}
                        items={3}
                    >   
                        {projects.slice(0).reverse().map((project, index) => {
                            return <OwlProject data={project}/>
                        })}
                    </OwlCarousel>
                }
            </Row>
        )
    }
}

export default Projects;