import React from 'react';
import './back.css';
import Check3 from './check3';
import { useState } from 'react';


function SmallCard3 (){
  const [additionalDiv, setAdditionalDiv] = useState(false);
  return (
    <div className="tinycard cardgroup" id="blackimg">
    <div className="card-body">
          
    <div className="row">
{/* Checkbox, Check3 Card appears / disappears */}
      <div className="col-md-1"><form action=""><input type="checkbox"  className="checkbox" id="check3" onChange={()=> setAdditionalDiv(toggle)}/></form></div>
      <div className="col-md-3"><h6 className="smalltitle">Black Edition Stand</h6></div>
        <div className="col-md-6"><p id="pledge75">Pledge $75 or more</p></div>
        
      <div className="col-md-2">
        <h5> 64 </h5> left 
      </div>
      </div>




      
   <div><p className="text">
    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
    member list. Shipping is included.
    
    </p></div> 
    
    
 
  <div id="thirddivadd">
    {/* Check3 Card */}
    <Check3 trigger={additionalDiv} setTrigger={setAdditionalDiv}/>
  </div>
  </div>
  </div>
  )
}

// Function, returns the opposite of a boolean
function toggle(value){
  return !value;
}

export default SmallCard3;
