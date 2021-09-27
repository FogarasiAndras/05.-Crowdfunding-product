import React from 'react';
import './back.css';
import Check1 from './check1';
import { useState } from 'react';



function SmallCard1(){
  const [additionalDiv, setAdditionalDiv] = useState(false);
  return (
    <div className="tinycard cardgroup" id="norewardimg">
        <div className="card-body">
        <div className="row">
          
          {/* Checkbox, Check1 Card appears / disappears */}
        <div className="col-md-1"><form action=""><input 
            type="checkbox" 
            className="checkbox"  
            id="check1"
            onChange={()=> setAdditionalDiv(toggle)
            
            
            }
  
            /></form></div>
            
            <div className="col-md-4"><h6 className="smalltitle" id="norewardtitle">Pledge with no reward</h6></div>
            <div className="col-md-5"></div>
            </div>
            
          
         <div><p className="text" id="norewardtext">
          Choose to support us without a reward if you simply believe in our project. As a backer, 
      you will be signed up to receive product updates via email.
          
          </p> </div>
          
          
        <div>
          {/* Check1 Card */}
        <Check1 trigger={additionalDiv} setTrigger={setAdditionalDiv}/>
        </div>
        </div>
        
        </div>



        )

        
      };

// Function, returns the opposite of a boolean
      function toggle(value){
        return !value;
      }
      

    

      export default SmallCard1;


