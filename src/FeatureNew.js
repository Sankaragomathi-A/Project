import React from 'react'
import img1 from './img/amazon.jpg'
import img2 from './img/google.jpg'
import img3 from './img/re-3.jpeg'
import img4 from './img/re-1.jpeg'
import img5 from './img/re-2.jpeg'
 

function FeatureNew(){
    return(
        <div>
            
            <div className="features   ">
                <div className='container'>
                
            <p className="py-4 text-light"><span className='ellipse me-3 p-1 px-2 fw-bolder'>new</span>We've added a new extiting feature in v3.0.<a href='*' className='text-light'>Get it now for $49.</a> </p>
                </div>
                
                




                
        
                <div className="container-fluid  bg-light">
                    <div className='container'>
           
            <div className='features-app  container   row py-5 text-center'>
                <div className='col-4 '>
                    
                <img className='features-card' src={img1} alt='boy'></img>
                <h5 className='getfree-bold fs-5'>"You make it so simple.My<br></br> new site is to much faster &<br></br> easier to work with Albino."</h5>
                   
                <div className='container text-center  row p-5'>
                    <div className=' col-5  m-0'> 
                <img class="img-fluid features-card rounded-circle" src={img3}></img>
                </div>

                <div className='col-7 text-start p-0 m-0'>
                <p className='fw-bolder m-0'>Ilya Vasin</p>
                <p className='text-secondary p-0 '>Software Engineer</p>
                </div>
                </div>
                </div>
                
                

                <div className='col-4'>
                <img className='features-card' src={img2} alt=''></img>
                <h5 className='getfree-bold fs-5'>"You make it so simple.My<br></br> new site is to much faster &<br></br> easier to work with Albino."</h5>
                <div className='container text-center  row p-5'>
                    <div className=' col-5  m-0'> 
                <img class="img-fluid features-card rounded-circle" src={img4}></img>
                </div>

                <div className='col-7 text-start p-0 m-0'>
                <p className='fw-bolder m-0'>Ilya Vasin</p>
                <p className='text-secondary p-0 '>Software Engineer</p>
                </div>
                </div>
                </div>

                <div className='col-4'>
                <img className='features-card' src={img1} alt=''></img>
                <h5 className='getfree-bold fs-5'>"You make it so simple.My<br></br> new site is to much faster &<br></br> easier to work with Albino."</h5>
                <div className='container text-center  row p-5'>
                    <div className=' col-5  m-0'> 
                <img class="img-fluid features-card rounded-circle" src={img5}></img>
                </div>

                <div className='col-7 text-start p-0 m-0'>
                <p className='fw-bolder m-0'>Ilya Vasin</p>
                <p className='text-secondary p-0 '>Software Engineer</p>
                </div>
                </div>
                </div>
                </div>
              </div>
                </div>
               
                </div>

           
           </div>
           
           
           
           
           
           
           
           
           

            
                


        






        
    )
}
export default FeatureNew