import React from 'react'

function Contact(){
    return(
        
        <div className='contact container-fluid'>
            <hr></hr>
            
            <div className='contact-list container text-center row py-5'>
                <div className='col'>
                    <ul>
                        <li className='text-secondary'>Company</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div className='col'>
                    <ul>
                        <li className='text-secondary'>Product</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>News</li>
                        <li>Help desk</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className='col'>
                    <ul>
                        <li className='text-secondary'>Services</li>
                        <li>Digital Marketing</li>
                        <li>Content Writing</li>
                        <li>SEO for Business</li>
                        <li>UI Design</li>
                    </ul>
                </div>

                <div className='col'>
                    <ul>
                        <li className='text-secondary'>Services</li>
                        <li>Privacy policy</li>
                        <li>Terms &  Conditions</li>
                        <li>Return Policy</li>
                    </ul>
                </div>

                <div className='col'>
                    <ul>
                        <li className='text-secondary'>Contact us</li>
                        <li><a href='*'>support@grayic.com</a></li>
                        <li><a href='*'>133+-396-3465-1455</a></li>

                    </ul>
                </div>
            </div>
          

            <div className='copyright py-3 text-center container'>
                <hr></hr>
                <div className='row'>
                    <div className='col-7'>
                    <p>@ 2022 Copyright,All right Reserved <i class="fas fa-heart contact-i"></i></p>
                    </div>
                    <div className='col-5'>
                    <i class="fab fa-twitter px-2"></i>
                    <i class="fab fa-facebook px-2"></i>
                    <i class="fab fa-instagram-square px-2"></i>
                    <i class="fab fa-instagram px-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact