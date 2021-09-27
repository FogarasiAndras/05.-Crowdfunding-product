import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';


function Main3(){

// useStates defined

const [ modalIsOpen, setModalIsOpen ] = useState(false);
const [ modal2IsOpen, setModal2IsOpen ] = useState(false);


useEffect(() => {
  // Thank cards disappear after 6 seconds
  const timeout = setTimeout(() => {
  
    setModal2IsOpen(false);
    setModalIsOpen(false)
}, 6000);

return () => clearTimeout(timeout);

},[]);



return (

  
<div className="card largecard" id="largecard">
<div className="card-body">
  
{/* Main title */}
  <div className="card-title" className="mastercrafttext">
    <h5 id="abouttitle">About this project</h5>
  </div>
  <br/>
  <br/>

{/* Main text */}
  <div className="card-text" className="mastercrafttext">
    
    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
  
    

</div>
<br/>
<div className="mastercrafttext">
Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
    to allow notepads, pens, and USB sticks to be stored under the stand.
</div>
</div>


{/* Bamboo Card */}
  <div className="card smallcard" id="bamboostand">
    <div className="card-body">
    
      <div className="row">
        <div className="col-md-6"><h5>Bamboo Stand</h5></div>
        <div className="col-md-6 rightbuttons">
          <button type="button" className="btn btn-link" id="twentyfivepledgebtn">$25 or more</button>
          
          </div></div>
      
          
     <div>
     
       <p>
      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
      you’ll be added to a special Backer member list.
      
      </p> </div> 
      
      <br/>
      <div className="row">
        <div className="col-md-4">
          <h5>101</h5> left
          
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">$</span>
  </div>

{/* Bamboostand input */}
  <input type="number" className="form-control" placeholder="Your support" min="25" id="suppinput1" onBlur={
()=> {

  const suppinput1 = document.getElementById("suppinput1");
  // Turns to red when less than 25
  if(suppinput1.value < 25){
    suppinput1.classList.add("is-invalid");
    document.getElementById("twentyfivepledgebtn").style.color = "red";

} else {
  // Turns to green when equal or more than 25
  if(suppinput1.classList.add("is-invalid") !== null){
    suppinput1.classList.remove("is-invalid");
    document.getElementById("twentyfivepledgebtn").style.color = "rgb(101, 209, 191)";
  }
}

  }}/>
  
  </div>
        </div>
        <div className="col-md-4">
          {/* Select reward button */}
          <button type="button" className="btn select" onClick={()=> {if(document.getElementById("suppinput1").value >= 25){ setModalIsOpen(true);
          // Thank you card disappears after 5 seconds
          setTimeout(() => {
            setModalIsOpen(false);
          }, 5000);
          const suppinput1 = document.getElementById("suppinput1");
          // Turns to green when equal or more than 25
          if(suppinput1.classList.add("is-invalid") !== null){
            suppinput1.classList.remove("is-invalid");
          }
          
          } else {
            // Turns to red when less than 25
            document.getElementById("suppinput1").classList.add("is-invalid");
          }
          
          
          }}>Select Reward</button>
          
        </div>
      </div>
      </div>


      {/* Thank you card */}
      <Modal isOpen={modalIsOpen} ariaHideApp={false} id="modal1">
      <div className="card" id="thankbody1">
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
  <br/>
  <br/>
{/* Got it button */}
    <button className="btn gotbtn" onClick={ ()=>{
// Card disappears when clicked
        setModalIsOpen(false);

      
      }}>Got it!</button>
    </div>
  </div>
      </Modal>
      </div>


{/* Black Edition Card */}   
  <div className="card smallcard" id="blackedition">
    <div className="card-body">
      
      <div className="row">
      <div className="col-md-6"> <h5>Black Edition Stand</h5></div>
      <div className="col-md-6 rightbuttons">
        <button type="button" className="btn btn-link" id="seventyfivepledgebtn">Pledge $75 or more</button></div>
    </div>   
     <div><p>
      You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
      member list. Shipping is included.
      
      </p></div> 
      <br/>
      <div className="row">
        <div className="col-md-4">
          <h5>64</h5> left
        </div>
        <div className="col-md-4">
        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">$</span>
  </div>
  {/* Black Edition input */}
  <input type="number" className="form-control" placeholder="Your support" aria-label="Username" aria-describedby="basic-addon1"  min="75" id="suppinput2" onBlur={
()=> {
  // Turns to red when less than 25
  if(document.getElementById("suppinput2").value < 75){
    document.getElementById("suppinput2").classList.add("is-invalid");
    document.getElementById("seventyfivepledgebtn").style.color = "red";

} else {
   // Turns to green when equal or more than 75
  if(document.getElementById("suppinput2").classList.add("is-invalid") !== null){
    document.getElementById("suppinput2").classList.remove("is-invalid");
    document.getElementById("seventyfivepledgebtn").style.color = "rgb(101, 209, 191)";
  }
}

  }}/>
  </div>
        </div>
        
        <div className="col-md-4">
          
            <button type="button" className="btn select" onClick={()=> {if(document.getElementById("suppinput2").value >= 75){ setModal2IsOpen(true);
            // Thank you card disappears after 5 seconds
          setTimeout(() => {
            setModal2IsOpen(false);
          }, 5000);
            const suppinput2 = document.getElementById("suppinput2");
          if(suppinput2.classList.add("is-invalid") !== null){
            suppinput2.classList.remove("is-invalid");
          }
          
          } else {
            document.getElementById("suppinput2").classList.add("is-invalid");
          }
          
          
          }}
                

            
            
          
        >Select Reward</button>
        </div>
      </div>
    </div>
    {/* Thank you card */}
    <Modal isOpen={modal2IsOpen} ariaHideApp={false} id='modal2'>
    <div className="card" id="thankbody2">
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
  
  <br/>
  <br/>
{/* Got it button */}
    <button className="btn gotbtn" onClick={ ()=> {

// Card disappears when clicked
setModal2IsOpen(false)

      
      
      
    }
    }>Got it!</button>
    </div>
  </div>
    </Modal>
    
    </div>



{/* Machagony Card */}

<div className="card smallcard" id="machagony">
  <div className="card-body">
    <div className="row">
      <div className="col-md-6">
        <h5>Mahogany Special Edition</h5>
      </div>
      <div className="col-md-6 rightbuttons">
        <button type="button" className="btn btn-link" id="machagonypledge">Pledge $200 or more</button>
        
      </div>
    </div>
    <div><p className="text">
      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
      to our Backer member list. Shipping is included.
      
      </p></div>
      <br/>
      <div className="row">
        <div className="col-md-6">
          <h5>0</h5> left
        </div>
        <div className="col-md-6">
          
          <button type="button" className="btn select" id="stock">Out of Stock</button>
        </div>
      </div>
    
  </div>
</div>
  

  



<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Andras Fogarasi</a>.
  </div>
</div>

)
}

export default Main3;