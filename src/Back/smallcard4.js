import React from 'react';
import './back.css';
import Check4 from './check4';
import { useState } from 'react';


function SmallCard4(){
  const [additionalDiv, setAdditionalDiv] = useState(false);
  return (
    <div className="tinycard cardgroup" id="machagonyimg">

  <div className="card-body">
  <div className="row">
    {/* Checkbox, Check4 Card appears / disappears */}
    <div className="col-md-1"><form action=""><input type="checkbox"  className="checkbox" id="check4" onChange={()=>setAdditionalDiv(toggle)}/></form></div>
    <div className="col-md-3"><h6 className="smalltitle">Mahogany Special Edition</h6></div>
    <div className="col-md-6"><p id="pledge200">Pledge $200 or more</p></div>
    
  <div className="col-md-2">
    <h5> 0 </h5> left 
  </div>
  </div>

  <div><p className="text">
    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
    to our Backer member list. Shipping is included.
    
    </p></div>
    
    <div id="fourthdivadd" className="row">
      {/* Check4 Card */}
      <Check4 trigger={additionalDiv} setTrigger={setAdditionalDiv} />
    </div>
    </div>
    </div>
    )
}

// Function, returns the opposite of a boolean
function toggle(value){
  return !value;
}


export default SmallCard4;

        
                    