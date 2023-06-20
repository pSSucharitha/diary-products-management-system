import React, { useState } from "react";
import './signup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage=()=>{
    const n=useNavigate("")

    let sub=()=>{
        n("/login")
    }

    let [fname,setname]=useState("");
    
    let [email,setemail]=useState("");
    
    let [pass,setpass]=useState("");
    let submit=async(e)=>{
        e.preventDefault();
        if(fname==""){
            alert("enter the name")
        }
        else if(pass==""){
            alert("enter the password")
        }
        else{
            let mydata={name:fname,gmail:email,password:pass}
            let res=await axios.post("http://localhost:8080/login",mydata)
            if(res.data){
                alert("data entered")
                n("/login")
            }
        }


      
    }

    return(
        <center>
            <table border>
                        <div style={{border:"double"}} id="div9">
        <form>
           <u> <h1 style={{color:"violet"}}><b>WELCOME!!!</b></h1><br></br></u>
           <div style={{color:"blue"}}>
            Namaaaae:<input type="name" value={fname} onChange={e=>setname(e.target.value)} placeholder="enter name" required></input> <br></br><br></br><br></br><br></br>
            Gmail:<input type="Gmail" value={email} onChange={e=>setemail(e.target.value)} placeholder="enter email" required></input><br></br><br></br><br></br><br></br>
            Password:<input type="password" value={pass} onChange={e=>setpass(e.target.value)} placeholder="enter password" required></input><br></br><br></br><br></br>
            <center><button variant="contained" onClick={submit}>SUBMIT</button></center><br></br>
            <center><button variant="contained" onClick={sub}>login</button></center>
            </div>
            </form>

        </div>
        </table>
        </center>
        
    )
}
export default SignUpPage;