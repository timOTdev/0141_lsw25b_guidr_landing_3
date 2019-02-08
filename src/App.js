import React, { Component } from 'react';
import './App.css';

// Styling
import NavBar from './TopNav';
import MainArea from './MainArea';
import BannerImg from './BannerImg';
import MainCard from './MainCard';
import TeamCard from './TeamCard';

import { Row, Col } from 'reactstrap';

// import { FaBeer } from 'react-icons/fa';

class App extends Component {
  render() {
    return (

      <div className="App">
        <NavBar />
        <BannerImg />
        <MainArea />
        <MainCard />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}><TeamCard /></Col>
        </Row>
        <Row>
          <Col className="social-media" sm="12">
          {/* <h3> Lets go for a <FaBeer />? </h3> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
