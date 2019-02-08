import React from 'react';
import { Jumbotron } from 'reactstrap';
import  Banner  from "./Assets/Banner1.jpg";



const BannerImg = (props) => {
  return (
    <div>
    <div>
    <img src = {Banner} className="Banner-img" alt="Scenery"/>
    </div>
     <div className="space">
      <Jumbotron className="jumbo">
      <div className="block-box">
      <blockquote className="block" contenteditable="true"><q>Discover New And Exciting Tours With Your Locals</q>
  <cite>We’re introducing new programs to help our locals to standout, and attract the guests who’ll go travel with you.</cite>
</blockquote>
</div>
      </Jumbotron>
      </div> 
    </div>
  );
};

export default BannerImg;