import React from 'react'

function GetfreeForm(){
    return(
        <div>
            <div className='container-fluid Getfree-bg py-5'>

            <div className='container  Getfree-desp row'>
                <div className='col-6 py-5'>
              <span className='circle-i'><i class="fas fa-comment contact-i fs-2 mt-2"></i></span>
                <h3 className='getfree-bold pt-5 text-light'>Get free consultancy<br></br> from our expert right now!</h3>
                <p className='getfree-small text-secondary pt-4 text-light'>With lots of Unique blocks,You can easily build a<br></br> page without coding.Building your next landing<br></br> pageso quickly with Albaina</p>
                
                </div>


                <div className='col-6'>
                    <div className='getfree-form'>
                        <div className='p-4 text-right'>
                            <form>
                            <label for="fname" className=''>Name</label>
    <input type="text"  id="" name="" placeholder="Your name.."/>

    <label for="email">Email</label>
    <input type="text" id="" name="" placeholder="Your Eamil.."/>
     
    <label for="email">Phone</label>
    <input type="text" id="" name="" placeholder="Your Phone.."/>

    <label for="email">Which service do you need?</label>
    <select id="country" name="country">
      <option value="australia">Select service</option>

      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
   
    <input type="submit" className='btn btn ' value="Get Free Consultancy"/>
                            </form>
                             </div>
                          </div>
                        </div>
                    </div>
                    </div>
            <div className='container py-5 subscribe'>
                <div className='row'>
                    <div className='col-6'>
                <h3 className='getfree-bold'>Subscribe to our newsletter to get latest on your inbox.</h3>
                </div>
                
                <div className='col-6'>
                <form class="d-flex">
        <input class="subscribe-form form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn addto-Btn text-light" type="submit">Search<span className="ps-4 fs-5">&#x2192;</span></button>
      </form>
                </div>
                </div>
            </div>
        </div>
    )
}
export default GetfreeForm