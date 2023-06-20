import { AppBar, Box, Toolbar, Typography, formControlClasses, responsiveFontSizes } from "@mui/material";
import './products.css'
import React from "react"
import { useNavigate } from "react-router-dom";



function Product(){
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
          <div id="div6">
        <>
        <Box>
            <AppBar component={'nav'} sx={{backgroundColor:"black"}}>
                <Toolbar>
                <Typography color={"white"} variant="h6" component={"div4"} sx={{flexGrow: 1}}> DAIRY PRODUCTS</Typography>
                <Box>
                    <ul1>
                <li>MILK</li>
                <li>CHEESE</li>
                <li>CURD</li>
                <li>ICECREAM</li>
                <li>GHEE</li>
                <li>LUSSY</li>
                </ul1>
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
        
        <header>
                    <nav>
                                            <ul>
                            <li onClick={Gohome}><button>HOME</button> </li>&nbsp; &nbsp;&nbsp;
                            <li onClick={Goabout}><button>ABOUT</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Goproducts}><button>PRODUCTS</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Gocontact}><button>CONTACT</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Gohistory}><button>HISTORY</button></li>&nbsp;&nbsp;
                        </ul>
                    </nav>
        </header>
    
        <div><h1 style={{textAlign:"center",color:"blue"}}>DAIRY PRODUCTS</h1></div><div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://content.jdmagicbox.com/comp/chennai/05/044p4003305/catalogue/sri-vaishnavi-dairy-specialities-pvt-ltd-villivakkam-chennai-milk-product-manufacturers-xg6dny8012.jpg"></img>
                <h1>MILK</h1>
                <h1 style={{color:"red"}}>₹30</h1>
              <p>Milk is the liquid produced by the mammary glames of mammals,including humans.it is the primary source of nutrition for younger mammals</p>
              
              
              </div>&nbsp;&nbsp;&nbsp;&nbsp;

              <div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://newsroom.sialparis.com/wp-content/uploads/2022/03/Cheeses-1-1024x768.jpg"></img>
                <h2>CHEESE</h2>
              <p>cheese is a dairy product produced in wide ranges of flavours,textures,and forms by coagulation of the milk protein casien</p>
              <h2 style={{color:"red"}}>₹90</h2>
              
              </div>&nbsp;&nbsp;&nbsp;&nbsp;


              <div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://www.india.com/wp-content/uploads/2017/03/Curd.jpg"></img>
                <h3>CURD</h3>
              <p>curd is obtained by the coagulating milk in a sequential process called as curdling.it can be a final dairy product or the first stage in cheesemaking.</p>
              <h3 style={{color:"red"}}>₹40</h3>
                            
              </div>&nbsp;&nbsp;&nbsp;&nbsp;

              <div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://www.foodnetwork.com/content/dam/images/food/fullset/2018/4/30/0/FNK_Ice-Cream-in-a-Bag_s4x3.jpg"></img>
                <h4>ICECREAM</h4>
              <p>Ice creame is a frozen dessert,typically made from milk or creame and flavoured with a sweetner,either sugar or an alternativeand a spice"</p>
              <h4 style={{color:"red"}}>₹50</h4>
                                          </div>&nbsp;&nbsp;&nbsp;&nbsp;
            
              <div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://5.imimg.com/data5/SELLER/Default/2022/1/WZ/NI/DY/80271964/cow-ghee.jpg"></img>
                <h5>GHEE</h5>
              <p>Ghee is clarified butterfat and contains about 99%of milk fat.</p>
              <h5 style={{color:"red"}}>₹100</h5>
              
              </div>&nbsp;&nbsp;&nbsp;&nbsp;

              <div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://shwetainthekitchen.com/wp-content/uploads/2021/05/Sweet-lassi.jpg"></img>
                <h6>LUSSY</h6>
              <p>lussy was drooling diamonds,you have no idea,i felt like Scrooge McDuck in a pool of gloden goo.</p>
              <h6 style={{color:"red"}}>₹40</h6>
                                         </div>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>
            </div>
            </div>
             </div> 
        </div>
        </>
        </div>

    )
    
        }
export default Product;
