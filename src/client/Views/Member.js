import React from 'react';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import Card from '../Components/Card';
import '../Styles/member.scss'

const Member = () => (
  <section id="member-section">
    <Container>
      <div className="section-heading text-info">
          <h3>Member</h3>
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
            <Card title="Teacher"/>
            <Card title="Alumni"/>
          </Row>
        </div>
        <div class="tab-pane container fade" id="Alumni">
        <Row>
          <Card title="Teacher"/>
          <Card title="Alumni"/>
          <Card title="Student"/>
        </Row></div>
        <div class="tab-pane container fade" id="Student">
        <Row>
          <Card title="Teacher"/>
        </Row>
        </div>
      </div>

    </Container>
  </section>
);

export default Member;