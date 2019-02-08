import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Container} from 'reactstrap';

class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
        <Container className="team-border">
      <div className="team-card">
        <Button className="team-cta" onClick={this.toggle}>TEAM</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody className="team-section">
            <p>Scrum Master: <a href="https://github.com/timh1203">Timothy Hoang</a></p>
            <p>Back End Architect: <a href="https://github.com/AsaOfDiamonds">Asa Shalom</a></p>
            <p>Front End Architect: <a href="https://github.com/mattbasile">Matt Basile</a></p>
            <p>User Interface Developers: </p>
            <p className="ui-dev"><a href="https://github.com/ItelSunday">Itel Domingo</a></p>
            <p className="ui-dev"><a href="https://github.com/nevets615">Steven Jefferson</a></p>
            <p className="ui-dev"><a href="https://github.com/Jamieegoodnight">Jaime Goodnight</a></p>
            </CardBody>
          </Card>
        </Collapse>
      </div>

      
      </Container>
    );
  }
}

export default TeamCard;