import React from "react";
import img1 from './img/marketing.jpg'
import img2 from './img/content.jpg'
import img3 from './img/graphic.jpg'
import img4 from './img/Seo.jpg'




function Service(){
    return(
        

        
        
        <div className="service-bg py-3">
            <div className="pt-3 text-center">
            <p className="service">Services we offer for you</p>
            <p className="text-secondary">With lots of Unique blocks,You can easily build a page without coding.<br></br> Build your next landing page. </p>
            </div>


            <div className="row service-card text-center pt-5">
               <div className="service__img col-3 ">
               <div className="service--card-bg">
            
                <img src={img1} alt="" className=" img-fluid "></img>
                   <div className="py-3 fw-bolder">Ditial Marketing<span className="ps-4 fs-5">&#x2192;</span></div>
                    </div>
                    </div>
                
                    <div className="service__img col-3 ">
               <div className="service--card-bg">
            
                <img src={img1} alt="" className=" img-fluid "></img>
                   <div className="py-3 fw-bolder">Content Writing<span className="ps-4 fs-5">&#x2192;</span></div>
                    </div>
                    </div>
                

                    <div className="service__img col-3 ">
               <div className="service--card-bg">
            
                <img src={img3} alt="" className=" img-fluid "></img>
                   <div className="py-3 fw-bolder">Graphic Design<span className="ps-4 fs-5">&#x2192;</span></div>
                    </div>
                    </div>
                
                    <div className="service__img col-3 ">
               <div className="service--card-bg">
            
                <img src={img4} alt="" className=" img-fluid "></img>
                   <div className="py-3 fw-bolder">SEO for Business<span className="ps-4 fs-5">&#x2192;</span></div>
                    </div>
                    </div>
                
                
                    







               


            </div>





        </div>
    )
}
export default Service