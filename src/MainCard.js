import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, 
  CardBody } from 'reactstrap';
 import Travel from "./Assets/PetraJordan.jpeg";
 import Local from "./Assets/TourGuide.jpeg";
 import { Container } from 'reactstrap';

const MainCard = (props) => {
  return (
  
<Container className="card-container">
<div className="card-border"></div>
    <CardDeck className="first-section-panels">
      <Card className="cards-group">
        <CardImg width="20%" src= {Travel} alt="Card image cap" />
        <CardBody>
        <div className="line"></div>
          <CardTitle className="card-title">Take a tour</CardTitle>
          <CardText className="card-text">Discover all the adventures of our local guides and the next trip you will be going to </CardText>
         <a href="https://photos.app.goo.gl/zitc1H6XFxX8oUNv5"><Button className="button">View destinations</Button></a> 
        </CardBody>
      </Card>

      <Card className="cards-group cardb">

      <CardImg width="20%" src= {Local} alt="Card image cap" />
        <CardBody>
        <div className="line"></div>
          <CardTitle className="card-title">Become a host</CardTitle>
          <CardText className="card-text">Find local guides or become a host and create your own story to share </CardText>
          <a href="https://guidr2.netlify.com/newsfeed"><Button className="button">Meet the travellers</Button></a>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
  );
};

export default MainCard;


