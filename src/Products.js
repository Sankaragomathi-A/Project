import React from 'react'
import img1 from './img/img1.jpg'
import img2 from './img/fair.jpg'
import img3 from './img/product-image-3.png'
import img4 from './img/safavieh-couture-evangeline-velvet-parisian-sofa-3d-model-max-obj-fbx.jpg'

function Products(){
    return(
        <div>
            <div className='products container-fluid'>
                <div className='container py-5 text-center'>
                    <h3 className='getfree-bold'>Related Products</h3>
                    <div className=' py-3 row'>
                        <div className='col-3'>
                            <div className='product-cart'>
                            <img src={img1} alt='' className='img-fluid '></img>
                            </div>
                            <p className='text-success p-0 m-2'>$990</p>
                            <p className='getfree-bold fs-5 m-0 p-0'>Safavieh Couture</p>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            
                        </div>

                        <div className='col-3'>
                            <div className='product-cart'>
                            <img src={img2} alt='' className='img-fluid '></img>
                            </div>
                            <p className='text-success p-0 m-2'>$34</p>
                            <p className='getfree-bold fs-5 m-0 p-0'>Fair Trade Ghana</p>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            
                        </div>

                        <div className='col-3'>
                            <div className='product-cart'>
                            <img src={img3} alt='' className='img-fluid '></img>
                            </div>
                            <p className='text-success p-0 m-2'>$44.39</p>
                            <p className='getfree-bold fs-5 m-0 p-0'>Kingso Round Table</p>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            
                        </div>

                        <div className='col-3'>
                            <div className='product-cart'>
                            <img src={img4} alt='' className='img-fluid '></img>
                            </div>
                            <p className='text-success p-0 m-2 '>$120</p>
                            <p className='getfree-bold fs-5 m-0 p-0'>Safavieh Couture</p>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            <i class="fas fa-star  px-1"></i>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Products