import React from "react"
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home2(){
    let n=useNavigate()
    let Gohome=()=>{
        n('/')
    }
    let Goabout=()=>{
        n('/about')
    }
    let Gocontact=()=>{
        n('/contact')
    }
    let Goproducts=()=>{
        n('/products')
    }
    let Gohistory=()=>{
        n('/history')
    }
    return(
        <div id="div1">
            <h1>DAIRY FORM MANAGEMENT SYSTEM</h1>
                <header>
                    <nav>
                                            <ul>
                            <li onClick={Gohome}><button>HOME</button></li> &nbsp; &nbsp;&nbsp;
                            <li onClick={Goabout}><button>ABOUT</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Goproducts}><button>PRODUCTS</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Gocontact}><button>CONTACT</button></li>&nbsp;&nbsp; &nbsp; &nbsp;
                            <li onClick={Gohistory}><button>HISTORY</button></li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <h1>WELCOME TO HOME PAGE</h1>
                    
                    <div>    <p>Having a corporate office in Anand,Gujarat,Amul was founded back in the year 1946.Belonging to the cooperative sector,the company makes sure to 
        fulfil the milk and milk product needs of the nation.Some of the milk products that it offers are panner,butter,chocolate and ghee among a lot of others.
        The company has over 3.6 million milk producers nationwide.Amul is operated and run by Gujarat Co-operative milk marketing Federation Limited.   
</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<iframe width="1000" height="400" src="https://www.youtube.com/embed/PBMzw1_clXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
            </div>
            </div>
       
    )
        }
export default Home2;


