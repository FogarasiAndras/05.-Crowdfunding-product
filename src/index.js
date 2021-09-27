import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Main1 from './main1';
import Main2 from './main2';
import Main3 from './main3';




ReactDOM.render(
  <Navbar/> , document.getElementById('navbar')
);
ReactDOM.render(
  <Main1/> , document.getElementById('main1')
);
ReactDOM.render(
  <Main2/> , document.getElementById('main2')
);
ReactDOM.render(
  <Main3/> , document.getElementById('main3')
);


// Back this project button click event
document.getElementById("back").addEventListener("click", function(){
  // Opacity change on navbar background
  document.getElementById("navbar").classList.add("changeopacity");
  // Transform gets disabled in the background
  document.getElementById("machagony").classList.add("changetransform");
  document.getElementById("bamboostand").classList.add("changetransform");
  document.getElementById("blackedition").classList.add("changetransform");
});




reportWebVitals();
