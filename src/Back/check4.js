import React from 'react';
import { useState } from 'react'
import Modal from 'react-modal';


function Check4(props){
  const [modalIsOpen, setModalIsOpen] = useState(false);




  return(props.trigger) ? (
    <div id="check4div"  className="checkdiv">
<div className="row">
    <div className="col-md-4">
    <br />
Enter your pledge
    </div>
    <div className="col-md-2">
    </div>
    <div className="col-md-3">
    <br />
    <input type="number" name="" id="fourthinput" min="200" />
    </div>
    <div className="col-md-3">
    <br />
      <button type="button" className="btn select" 
      onClick={()=> {
        if(document.getElementById("fourthinput").value >= 200)
        
        
        {

          
        

          document.getElementById("pledge200").style.color = "rgb(101, 209, 191)";
           

         
          

          // Thank you card appears
          setModalIsOpen(true);

          // Thank you card disappears after 5 seconds
          setTimeout(() => {
            setModalIsOpen(false);
          }, 5000);

        // Input color white while the number is valid
        
        document.getElementById("fourthinput").style.border ="1px solid white";
        
        

      } else {
          // Input turns to red
document.getElementById("fourthinput").style.border ="1px solid red";
          // Button turns to red
document.getElementById("pledge200").style.color ="red";
        }
      
      }
        
      }   
      >Continue</button>
                <div className="row" id="thankpart">

                  {/* Thank card appears here */}
                  <Modal isOpen={modalIsOpen} ariaHideApp={false} style={modalStyle} id="backmodal4">
  <div className="card" id="thankcard4">
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
</Modal>


            </div> </div></div></div>
  ) : "";
}
  

 // Moving modal in front
const modalStyle = {
  overlay: {zIndex: 1000}
};

export default Check4;

   
  