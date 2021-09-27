import React from 'react';
import './back.css';
import Check2 from './check2';
import { useState } from 'react';

function SmallCard2(){
  const [additionalDiv, setAdditionalDiv] = useState(false);
  return (
    <div className="tinycard cardgroup" id="bambooimg">
        <div className="card-body">
          <div className="row">
            
            {/* Checkbox, Check2 Card appears / disappears */}
            <div className="col-md-1"><form action=""><input type="checkbox"  className="checkbox" id="check2" onChange={()=>setAdditionalDiv(toggle)}/></form></div>
            <div className="col-md-3">
            <h6 className="smalltitle">Bamboo Stand</h6></div>
              <div className="col-md-6"><p id="pledge25">Pledge $25 or more</p></div>
              
            <div className="col-md-2">
              <h5> 101 </h5> left 
            </div>
            </div>
         
          
         <div><p className="text" >
          You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
          you’ll be added to a special Backer member list.
          
          </p> </div> 
          
          
        
        <div id="seconddivadd">
          {/* Check2 Card */}
        <Check2 trigger={additionalDiv} setTigger={setAdditionalDiv}/>
        </div>
        </div>
        </div>
        )
      }

// Function, returns the opposite of a boolean
      function toggle(value){
        return !value;
      }



      export default SmallCard2;