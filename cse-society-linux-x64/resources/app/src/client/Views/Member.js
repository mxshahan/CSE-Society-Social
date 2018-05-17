import React from 'react';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import Card from '../Components/Card';
import '../Styles/member.scss'
import Axios from 'axios';

class Member extends React.Component{
  state = {
    teacher: false,
    alumni: false,
    student: false
  }

  componentDidMount() {
    Axios.get(`/siu/everyone`).then( (res) => {
      const teacher =  res.data.filter((member, index) => member.accountType.toLowerCase() === 'teacher');
      this.setState({
        teacher
      })

      const student =  res.data.filter((member, index) => member.accountType.toLowerCase() === 'student');
      this.setState({
        student
      })

      const alumni =  res.data.filter((member, index) => member.accountType.toLowerCase() === 'alumni');
      this.setState({
        alumni
      })
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    const teacher = this.state.teacher;
    const student = this.state.student;
    const alumni = this.state.alumni;
    return (
        <section id="member-section">
          <Container>
            <div className="section-heading text-info">
                <h3>Members</h3>
            </div> 
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#Teacher">Teacher</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#Alumni">Alumni</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#Student">Student</a>
              </li>
            </ul>
            <div class="tab-content bg-white">
              <div class="tab-pane container active" id="Teacher">
                <Row>
                  {teacher ? teacher.map((teacher) => {
                    return (
                      <Card data={teacher}/>
                    )
                  }): 'No Data Available'}
                </Row>
              </div>
              <div class="tab-pane container fade" id="Alumni">
                <Row>
                  {alumni ? alumni.map((alumni) => {
                    return (
                      <Card data={alumni}/>
                    )
                  }): 'No Data Available'}
                </Row>
              </div>
              <div class="tab-pane container fade" id="Student">
                <Row>
                  {student ? student.map((student) => {
                    return (
                      <Card data={student}/>
                    )
                  }): 'No Data Available'}
                </Row>
              </div>
            </div>

          </Container>
        </section>
    )
  }
}

export default Member;