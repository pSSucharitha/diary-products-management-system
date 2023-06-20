import React from "react";
import { useNavigate } from "react-router-dom";
function About(){
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
        <div>
                <header>
                    <nav>
                                            <ul>
                            <li onClick={Gohome}><button>HOME</button> </li>&nbsp; &nbsp;&nbsp;
                            <li onClick={Goabout}><button>ABOUT</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Goproducts}><button>PRODUCTS</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Gocontact}><button>CONTACT</button></li>&nbsp; &nbsp; &nbsp;
                            <li onClick={Gohistory}><button>HISTORY</button></li>
                        </ul>
                    </nav>
                </header>
                 <div>
                    <h1 style={{textAlign:"center",color:"darkblue"}}><u>WELCOME TO DAIRY RPODUCTS MANAGEMENT SYSTEM ABOUT PAGE</u></h1>
                    <div>
                        <img src="https://3.imimg.com/data3/FS/TG/MY-10026274/dairy-management-system-500x500.jpg" alt="image"/>
                        <p> The Dairy Product Management System application which deals with maintainingthe 
                            inventory details of dairy product like milk, ghee, curd, panneer etc and the billingprocess with  
                             great ease.The owners of the dairy shop can solely depend on thisapplication.Many of us want the work 
                             to be done at a faster rate. So this application willhelp   in   reducing   the pen
                             paper transaction to computerized transaction.Even thisapplication can help the small enterprises
                             also. The user interface must be simple andeasy to understand. This application  will help  in storing  the 
                             products records like thedairy product, employee records, and customer records, purchased information in
                             an easyand well organized manner. This will be one of the projects that will help the owners ofthe dairy 
                             shop to maintain the inventory and the billing process with great ease. The aim of the project is to 
                             computerize the operations of collecting the sales detailsfrom the dealer and to book order for their next 
                             dispatching. The system is an automatedsystem which handles all the process of the dairy product shop. 
                             This system facilitates themanufacturing company to organize its production schedules depending on the orders 
                             that arereceived from its recognized dealers  </p>
                    </div>
                    <div>
                        <h2 style={{textAlign:"left",color:"darkred"}}><u>DAIRY MANAGEMENT SYSTEM : FEATURES, BENEFITS AND USEFUL PANELS</u></h2>
                      <img  style={{ backgroundSize:"cover",height:"10cm",width:"30cm"}}src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wyAu8tlhSuCYFkaUJ0HVnQ.jpeg" alt="image"/>
                        <p>Dairy Management System is an application or software designed to manage activities related to your daily work such as milk collections from members, sales to the customer and plant and all the dairy-related processes. It became tough for dairy owners to manage all dairy work manually.
                           To reduce manual work, A dairy management System can help to make day-to-day dairy related activities easier. It helps to maximize the profit by improving herd fertility.

You can also track the movement of raw material to the plant storehouse or milk procurement to the distribution of the product. The whole process you can manage with one app. Dairy software also assists in demand scheduling, plant system, reporting, and accounting.
</p>
<h3 style={{textAlign:"left",color:"darkgreen"}}><b>Why we need Dairy management system:</b></h3>
<p>To Manage various functions of Dairy, dairy owners need a dairy management system. it can ease a variety of a dairy process like cattle management, member management, 
    report analysis, accounting and finance, milk supply and many more.</p>
    <li>1. Facilitate easily maintenance o</li>
<li>2. Maintain Daily inventory reports and records of Members.</li>
<li>3.Quick access to all records.</li>
<li>4.Generate Regular basis Salary</li>
<li>5.Reduce manual work</li>
<li>6.Prevent and reduce human error</li>
<li>7. Record medical supplies with the use of feed stuff and the cost of medical treatment as well.</li>
<li>8. Help with the automatic registration of dairy people.</li>
<li>9. Allow multiple users to use the software at the same time.</li>
<li>10. Helping the dairy owner to mitigate the losses and increase productivity.</li>

<h4 style={{textAlign:"left",color:"darkviolet"}}><b>Problem-related to dairy management system:</b></h4>
<li>1.Deterioration of perishable goods and items.</li>
<li>2.Unsatisfactory Quality and commodities.</li>
<li>3.Mismatch demand and supply. Some time demand for the product is more as compared to supply.</li>
<li>4. In India, only 15 % of the organization in dairy management are organized and the other 85% are unorganized</li>
<li>5.Long waiting time and inefficiency. Some times dairy is not managed properly so the farmer has to wait for a long time for selling their product.</li>

<h4 style={{textAlign:"left",color:"darkorange"}}><b>DMS has 5 kinds of user</b></h4>
<img style={{backgroundSize:"cover",height:"10cm",width:"30cm"}}src="https://www.gatewayfoundation.org/wp-content/uploads/2021/06/DSM-5-Criteria-1.png"/>
<b>USER 1: Dairy Admin:</b>
<li>1. Sales to the plant today: The total quantity of milk sold to the plant in a different region.</li>
<li>2. Local sales: It shows total sales done in every local area.</li>
<li>3. Payment Register: It shows the total amount of money pay according to the name of the person.</li>
<li>4. Dairy summary: It will show a total no of daily active members and inactive members, a member on credit or member on debt soon.</li>

<b>USER 2: Dairy Employee:</b><br></br>

Dairy employees need to collect milk in the container and they also need to maintain record the information of the total quantity of milk collected from dairy.<br></br>

<b>USER 3: Dairy member:</b><br></br>
A Dairy member is a person who provides milk to the dairy like -farmer/ cattle owner etc. A dairy member has to maintain the information related to<br></br>
<b>Milk Supply report :</b><br></br>
<li>Name of member</li>
<li>Date of milk supplied</li>
<li>Name of dairy</li>
<li>Total amount</li>
<b>Rate card Report:</b>
<li>FAT base</li>
<li>FAT and SNF base</li>
<li>Rate chart entry</li>

<b>Member Passbook: </b><br></br>
It displays the details of the member and type of milk preferred quantity and amount.<br></br>
<b>Payment report:</b> <br></br>
After generating a member report with full detail the amount will be credited to their accounts.<br></br>
<b>User 4: Dairy Plant:</b><br></br>
It displays the data the total number of plants incurred in one region and the quantity of milk supply in one region.<br></br>
<b>USER 5: DMS Admin Panel:</b><br></br>
DMS admin panel can the record of the average sale on today, weekly, monthly etc.and these reports are maintained to known about the profit or loss of the company and total earning on a specific day, and balance sheet, etc.
So, if you are running a dairy business in your city, this dairy management system will definitely help you to manage all your work with 1 app to reduce manual work.<br></br>
                    </div>  
            </div>
            </div>
    )
        }
export default About;
