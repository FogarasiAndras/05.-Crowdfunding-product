import React from 'react';
import './index.css';


function Main2(){
  return (
    <div className="card largecard" id="secondcard">
  <div className="card-body">


{/* Flip Cards */}
    <div className="row">
      
      <div className="col-md-4 backers">
      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front" id="firstfront">

        </div>
        <div className="flip-card-back">

        <h3>$89,914</h3> <h6>of $100,000 backed</h6>
      </div>
      </div>
      </div>
      </div>
      
      <div className="col-md-4 backers">
      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front" id="secondfront">

        </div>
        <div className="flip-card-back">


        <h3>5,007</h3> <h6>total backers</h6>
      </div>
      </div>
      </div>
      </div>
      <div className="col-md-4 backers">

      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front" id="thirdfront">

        </div>
        <div className="flip-card-back">

        <h3>56</h3> <h6>days left</h6>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    <br/>
    <br/>
    <br/>
{/* Horizontal line */}
   <div id="hrs">
        <hr id="hr1"></hr><hr id="hr2"></hr>
        </div>
  
        <br/>
    <br/>
        </div>
  </div>
  
 
  )
  
}

export default Main2;
