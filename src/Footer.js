import React from "react";

function Footer(){
    return(
        <div>
                <div className="footer py-5">
                <div className='contact-list container text-center text-light row py-5'>
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
                        <li>support@grayic.com</li>
                        <li>133+-396-3465-1455</li>

                    </ul>
                </div>
            </div>
          

            <div className='copyright py-3 text-center container'>
                <hr className="text-secondary"></hr>
                <div className='row'>
                    <div className='col-7'>
                    <p className="text-secondary">@ 2022 Copyright,All right Reserved <i class="heartfooter fas fa-heart"></i></p>
                    </div>
                    <div className='col-5 '>
                    <i class="fab fa-twitter px-3 text-light"></i>
                    <i class="fab fa-facebook px-3 text-light"></i>
                    <i class="fab fa-instagram-square px-3 text-light"></i>
                    <i class="fab fa-instagram px-3 text-light"></i>
                    </div>
                </div>
            </div>
                </div>
        </div>
    )
}
export default Footer