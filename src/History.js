import React from "react";
import './History.css'
import { useNavigate } from "react-router-dom";
function History(){
    let n=useNavigate()
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
               
                <div>
                    <section>
                        
                       <center> <h1 style={{color:"red"}}><b>HISTORY OF AMUL COMAPNY</b></h1></center>
                        <h3>Anand Milk Union Limited (abbreviated as Amul) is an acronym of the Indian cooperative society named Gujarat Milk Marketing Federation based in Anand, Gujarat.Amul is the largest producer of milk products and milk in India. The organization is credited with bringing the white revolution to India and is hailed as a successful cooperative business model that has empowered village men and women. It has created mini-entrepreneurs out of ordinary village women.

Today, AMUL is a renowned brand which is managed by the Gujarat Co-operative Milk Marketing Federation Ltd. (GCMMF). This cooperative body is owned by more than three million milk producers and its products are available in more than forty countries. During the years 2014 and 2015, its revenue was more than three billion dollars.


</h3>

<div id="div3"> 
</div>
<h3>Amul, the ‘utterly, butterly, delicious’ company, was stared by Dr. Verghese Kurien (Father of India’s White Revolution) in Anand, Gujarat as a co-operative to purchase the milk supplied by nearby farmers. Its mission was to provide a fair remuneration to farmers and simultaneously provide quality, value for money products to its consumers. Dr. Kurein launched ‘Operation Flood’ to transform India to a nation with a large production of dairy products. The program was implemented in 3 stages: increased production of milk, fair prices for consumers and providing farmers a fair price for their produce. Find out more in the above article.

</h3>
<h1 style={{color:"brown"}}><i>WHO WAS VERGHESE KURIEN</i></h1>
<h3>Dr. Verghese Kurien was born in Kozhikode, Kerala and received his education in Coimbatore. After a brief stint with the Tata Steel Plant, he decided to pursue his higher studies in dairy engineering from the Imperial Institute of Animal Husbandry in Bangalore, after which he was sent to Michigan State University on a government scholarship. 

In 1949, he decided to return to India, which proved to be one of the most instrumental steps in his life. 

</h3>
<h1 style={{color:"brown"}}><i>HOW WAS AMUL STARTED</i></h1>
<h3>When Dr. Kurien returned to the newly independent India in 1949, he was sent by the government to a run-down creamery at Anand, Gujarat, to serve as an officer in the Department of Dairy. 

There he met Tribhuvandas Patel, a freedom fighter who sought his help to set up a co-operative to purchase the milk brought by nearby farmers. There, Kurien set up the Kaira District Cooperative Milk Producers’ Union Limited (KDCMPUL), which is today known as Amul.

Its mission was to provide a fair remuneration to farmers and simultaneously provide quality, value for money products to its consumers.

Dr. Kurien’s groundbreaking work attracted dignitaries and researchers from across the continent as Amul became the largest cooperative in Asia. The Indian government relied on Amul as it helped them curb the import of condensed milk and butter and also provided supplies to the Indian army during the Indo-China War. </h3>
<h1 style={{color:"brown"}}><i>IMPACT OF AMUL:THE WHITE REVOLUTION</i></h1>
<h3>The immediate pre and post-independence India had a dire need for milk. The British left India with a low production capacity and close to no capital to look after a vastly populated nation. 

As demand for milk increased, Dr. Verghese Kurien was given the responsibility to make milk accessible to the masses and thus started the ‘White Revolution’. 

</h3>
<h1 style={{color:"brown"}}><i>LAUNCHING 'OPERATION FOOD'</i></h1>
<h3>Launched by the National Dairy Development Board and led by Verghese Kurien, India manoeuvred the largest dairy-agricultural development program. Operation Flood aimed to transform India to a nation with a large production of dairy products.

The program created a national milk grid, which linked producers throughout the country. This reduced regional price variations and ensured that farmers got the majority of the price share, eliminating middlemen. 

The program was carried out in 3 phases and achieved the following:

Increased production of milk; 
Ensured fair prices for consumers;
Provided farmers a fair price for their produce.
Dr. Kurien was subsequently named, ‘Father of the White Revolution’.
</h3>

<div id="div4">
</div>
<h1 style={{color:"brown"}}><i>WHAT IS THE BUSSINESS MODEL OF AMUL</i></h1>
<h3>Over the years, Amul’s business model has become a topic of discussion in popular business schools, because of its uniqueness. 

The business model is three-tiered. <br></br><br></br>

Tier 1:
Village Dairy Cooperative Societies have been set up in various localities. Every milk producer/ farmer is part of this community and this community elects representatives that go on to manage the District Milk Unions.
<br></br><br></br>
Tier 2:
District Milk Unions manage the processing of the milk and associated products and sell these to the State Milk Federation. The SMF is the distributor which channels these products in the market. 
<br></br><br></br>
Tier 3:
Now, all these organizations come under Amul and the cooperative directly sells products to customers through the milk federation. The revenue is shared in a similar fashion and this process eliminates the role of an intermediary. Also, this standardized wages for farmers. 

In FY’22, Amul saw a group turnover of INR 61,000 Crores and achieved 18% growth in the previous year, further cementing it as one of the largest FMCG brands in India. Despite the pandemic the total turnover of the dairy unit summed up to INR 39,200 Crores after a 2% growth. 

As of now Amul has 13 product categories, with their ‘pouch milk’ being the highest selling product</h3>
<h1 style={{color:"brown"}}><i>YUBI SALUTES AMUL SPIRIT OF #LEVERAGEINDIA</i></h1>
<h3>Very few Indian brands have been able to make a nationwide presence as Amul. Whether it be their well thought out product line or their incredible contribution in building the post-independent economy, Amul has deliciously captured the essence of the nation. 

Yubi lauds this cooperative and appreciates their tremendous effort in #LeveragingIndia. Co-operatives like Amul have not only worked towards enhancing the economy, but have also developed the Indian rural infrastructure in a commendable manner. 

We look forward to more of their delicious products and hope they continue to spread, ‘Amul doodh ki leher’. 

 </h3>
 <center><h1 style={{color:"blue"}} border={"dotted"}>thank you</h1></center>
       </section>
                </div>
                </div>
        
    )
}
export default History;