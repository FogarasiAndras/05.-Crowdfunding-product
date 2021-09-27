import React from 'react';
import './index.css';
import Back from './Back/back.js';
import { useState } from 'react';


function Main1(){
  const [buttonPopup, setButtonPopup] = useState(false);
  


  return (
    <div className="card largecard" id="firstcard">
      <div id="masterimg"></div>
    <div className="card-body"/>
      {/* Title */}
      <h3 className="card-title" id="bamboo">Mastercraft Bamboo Monitor Riser</h3>
      {/* Subtitle */}
      <h6 className="card-subtitle" id="monitor"> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h6>
      <div>
      {/* Back Card */}
      <Back trigger={buttonPopup} setTrigger={setButtonPopup}></Back>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col-md-6" id="backcol">
      {/* Back this project button */}
          <button type="button" className="btn" id="back" onClick={() => setButtonPopup(true)}>Back this project</button> 
          
          <div id="backpopup"></div>
        </div>
        <div className="col-md-6" id="bookmarkcol">
          {/* Bookmark button */}
          <button type="button" className="btn" id="bookmark">Bookmark</button>
        </div>
      </div>
      
      </div>
  );
        }





export default Main1;

 


      

  

 

