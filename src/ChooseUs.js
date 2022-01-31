import React from "react";
import img1 from './img/pexels-alexander-suhorucov-6457544.jpg'


function ChooseUs(){
    return(
        <div className="container-fluid choose-us py-4 text-center">
            <div className="choose-us-desp">
            
                <h5 className="choose--bold">Why you should choose us?</h5>
                <p className="py-2">With lots of Unique blocks,You can easily<br></br>build a page without coding.</p>
            
                <div className="row">
                    <div className="col pt-4">
                <img src={img1} alt="" className="choose-img img-fluid "></img>
                    
                    </div>

                    <div className="col pt-5">
                       
                    <div className="row">
                            <div className="col-1">
                                <span className="dot">1</span>
                        
                             </div>   
                                <div className="col-11">
                                <h6 className="fw-bolder text-start">Easy Booking</h6>
                                <p className="text-start text-secondary pt-2 pb-3">With lots of Unique blocks,You can easily<br></br>build a page without coding.</p>
                              
                                    </div>

                            
                        </div>
                   
                        <div className="row">
                            <div className="col-1">
                                <span className="dot">2</span>
                               
                             </div>   
                                <div className="col-11">
                                <h6 className="fw-bolder text-start">Free Expert opition </h6>
                                <p className="text-start text-secondary pt-2 pb-3">With lots of Unique blocks,You can easily<br></br> build a page without coding.</p>
                              
                                      </div>
                            
                        </div>
                   
                        <div className="row">
                            <div className="col-1">
                                <span className="dot">3</span>
                                 </div>   
                                <div className="col-11">
                                <h6 className="fw-bolder text-start">Get Your Results</h6>

                                    <p className="text-start text-secondary pt-2 pb-3">With lots of Unique blocks,You can easily build<br></br> a page without coding.</p>
                                </div>
                             </div>
                         </div>
                     </div>
                     </div>
                </div>
                
    )

}
export default ChooseUs