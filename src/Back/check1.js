import React from 'react';
import { useState } from 'react'
import Modal from 'react-modal';



function Check1(props){
  const [modalIsOpen, setModalIsOpen] = useState(false);



    return (props.trigger) ? (
        <div id="check1div" className="checkdiv">
<div className="row">
      <div className="col-md-4">
      <br/>
  Enter your pledge
  
      </div>
      <div className="col-md-2">
      </div>
      <div className="col-md-3">
      <br/>
      <input type="number" name="" id="firstinput" min="0" />
      
      </div>
      <div className="col-md-3">
      <br/>
        <button type="button" className="btn select" 
        onClick={()=> {
          if(document.getElementById("firstinput").value > 0)
          
          
          {
  
            
   
            // Thank you card appears
            setModalIsOpen(true);

            
          // Input color white while the number is valid
          document.getElementById("firstinput").style.border ="1px solid white";
          
          // Thank you card disappears after 5 seconds
          setTimeout(() => {
            setModalIsOpen(false);
          }, 5000);
  
        } else {
            // Input turns to red
  document.getElementById("firstinput").style.border ="1px solid red";
       
          }
        
        }
          
        }
        >Continue </button>
         {/* Thank card appears here */}
         <div className="row" id="thankpart">
  <Modal isOpen={modalIsOpen} ariaHideApp={false} style={modalStyle} id="backmodal1">
  <div className="card" id="thankcard1">
    <br/>
    <div id="iconcheck"></div>
    <div className="card-body">
      <div className="card-title">
        <h4>Thanks for your support!</h4>
      </div>
  <div className="card-text">
    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
    an email once our campaign is completed.
  </div>
  <br/>
  {/* Got it button */}
    <button className="btn gotbtn" onClick={ ()=>{
// Card disappears when clicked
        setModalIsOpen(false);
        
      
      }}>Got it!</button>
    </div>
  </div>
</Modal></div>

        
                  </div>
                  </div>


  

              </div>         
                  
     
      
    ) : "";
    }


 // Moving modal in front
const modalStyle = {
  overlay: {zIndex: 1000}
};
        


    


export default Check1;