import React from "react";
import './conta.css';
import { useNavigate } from "react-router-dom";
let Con=()=>{
  let n=useNavigate()
    let Gosubmit=()=>{
    ('/submit')
  }
  let Gohome=()=>{
    n('/')
}
let Goabout=()=>{
    n('/about')
}
let Goproducts=()=>{
    n('/products')
}
let Gocontact=()=>{
    n('/contact')
}
let Gohistory=()=>{
    n('/history')
}


    return(
      <div>
      <header>
      <nav>
          <ul>
              
              <li onClick={Gohome}>HOME</li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li onClick={Goabout}>ABOUT</li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li onClick={Goproducts}>PRODUCTS</li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li onClick={Gocontact}>CONTACT</li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li onClick={Gohistory}>HISTORY</li>&nbsp;&nbsp;&nbsp;&nbsp;
         </ul>
      </nav>
  </header>
  
        <div id="div">
                    <h1 style={{color:"black"}}>FOR ANY ENQURIES CONTACTUS</h1>
            <p style={{color:"black"}}>Mobile No:988374758</p>
              <p style={{color:"black"}}>Email id:Ammul123@gmail.com</p>
              <input type="text" placeholder="Message"></input>
              <input type="submit" class="btn" value="send now"></input>
             </div>
        </div>
    )
    }

export default Con;