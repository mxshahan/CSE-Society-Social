import React from 'react';

// COMPONENTS
import Slider from '../Components/Homepage/Slider';
import NewsFeed from '../Components/Homepage/NewsFeed';
import Notices from '../Components/Homepage/Notices';
import Container from '../Components/Partials/Container';
import Row from '../Components/Partials/Row';
import Projects from '../Components/Homepage/Projects';

const Homepage = () => (
    <div>
        <Slider/>

        <section id="noticeAndEvent">
            <Container>
                <Row>
                    <NewsFeed/>
                    <Notices/>
                </Row>
            </Container>
        </section>

        <section id="studentProjects" class="bg-warning">
            <Container>
                <Projects/>
            </Container>
        </section>

        <section>
            
        </section>
    </div>
);

export default Homepage;