import React, { useState } from "react";
import './day1.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage=()=>{

    let [fname,setname]=useState("");
    let [pass,setpass]=useState("");
    let n=useNavigate("")
    let Hom=async(e)=>{

        e.preventDefault()
        if(fname=='') {
            alert('please enter username')
        }
        else if(pass=='') {
                    alert('please enter password')
                }
                else {
                     
                    let result=await axios.post("http://localhost:8080/sig/"+fname+"/"+pass)
                    alert(result.data)
                    if(result.data=="success"){
                        n("/home")
                    }
                   
                }

       
    }
    let Sig=()=>{
        n("/")
    }


    return(
        <div>
            
        <table border></table>
                <div id="div1">
                 <form>   
                <center><h1 style={{color:"red"}}><i>DESIGN PRODUCT MANAGEMENT SYSTEM</i></h1><br></br>
            NAME:<input type="NAME" value={fname} onChange={e=>setname(e.target.value)} placeholder="enter name" required spacing={5}></input><br></br><br></br>
             PASSWORD:<input type="PASSWORD" value={pass} onChange={e=>setpass(e.target.value)} placeholder="enter password" required spacing={5}></input><br></br><br></br>
            <button onClick={Hom}><b>LOGIN</b></button><br></br><br></br>
            <a href="#">forgot password</a>
            <button onClick={Sig}><b>SignUp?</b></button>
            
            
            </center>
            </form>
        </div>
            </div>
    )
}
export default LoginPage;


