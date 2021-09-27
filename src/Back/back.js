import React from 'react';
import './back.css';
import SmallCard1 from './smallcard1';
import SmallCard2 from './smallcard2';
import SmallCard3 from './smallcard3';
import SmallCard4 from './smallcard4';

function  Back (props){
  
  return (props.trigger) ? (
    
   
      
    <div className="card cardgroup" id="backcard">
      {/* Close X button */}
    <button type="button" className="btn-close" onClick={()=> {props.setTrigger(false); removeClasses()}}>    </button>
      {props.children}
    <div className="card-body">
      <div id="smallparent">
      
        <h3>
          Back this project
        </h3>
        <h6 id="h6textbamboo">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </h6>
        <div  id="norewardsmall"><SmallCard1/></div>
      <div  id="bamboosmall"><SmallCard2/></div> 
     
       
      <div id="blacksmall"><SmallCard3/></div>
      <div id="machagonysmall"><SmallCard4/></div> 
      </div>
      
</div>
</div>

      

        

  ) : "";
}






 export default Back;



// Removes classes when close button is clicked
 function removeClasses(){
   // Removes opacity from navbar
  document.getElementById("navbar").classList.remove("changeopacity");
  // Removes transform freeze from the background cards
  document.getElementById("machagony").classList.remove("changetransform");
  document.getElementById("bamboostand").classList.remove("changetransform");
  document.getElementById("blackedition").classList.remove("changetransform");
}



