import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal'





function Check2(props){

  
  

  // useState decleared
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  

  return(props.trigger) ? (
    <div id="check2div"  className="checkdiv">
  <div className="row">
    <div className="col-md-4">
    <br/>
Enter your pledge
    </div>
    <div className="col-md-2">
    </div>
    <div className="col-md-3">
    <br/>
    <input type="number" name="" id="secondinput" min="25" />
    </div>
    <div className="col-md-3">
    <br/>
      <button type="button" className="btn select"
      onClick={()=> {
        if(document.getElementById("secondinput").value >= 25)
        
        
        {

          // Thank you card appears
          setModalIsOpen(true);

          // Thank you card disappears after 5 seconds
          setTimeout(() => {
            setModalIsOpen(false);
          }, 5000);


document.getElementById("pledge25").style.color = "rgb(101, 209, 191)";
         
          

          
          
        // Input color white while the number is valid
        document.getElementById("secondinput").style.border ="1px solid white";
        
        

      } else {
          // Input border turns to red
document.getElementById("secondinput").style.border ="1px solid red";
          // Button turns to red
document.getElementById("pledge25").style.color ="red";
        }
      
      }
        
      }>Continue</button>
 {/* Thank card appears here */}
 <div className="row" id="thankpart">
  <Modal isOpen={modalIsOpen} ariaHideApp={false} style={modalStyle} id="backmodal2">
  <div className="card" id="thankcard2">
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


      
                </div></div>
   </div>   
                ) : "";
              }


               // Moving modal in front
              const modalStyle = {
                overlay: {zIndex: 1000}
              };
                    

export default Check2;


