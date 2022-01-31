import React from "react";
import img1 from './img/apple-airpods-3-with-charging-case.jpg'
import img2 from './img/cwelch_191031_3763_0003.jpg'
import img3 from './img/photo-1585565804112-f201f68c48b4.jfif'
import img4 from './img/Apple_AirPods-3rd-gen_hero_10182021_inline.jpg.large.jpg'
import img5 from './img/7120GgUKj3L._AC_SL1500_.jpg'


function AddtoCart(){
    return(
        <div>

      <nav class="navbar navbar-expand-lg navbar-light py-5">
            <div class="container">
              <h3 class="navbar-brand cartNav" href="#">
                Behance
              </h3>
             

                <div className="d-flex">
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-dark fw-bolder"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Demo
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a hr class="dropdown-divider"></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-dark fw-bolder "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      pages
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a hr class="dropdown-divider"></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle fw-bolder text-dark"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      components
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a hr class="dropdown-divider"></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link active fw-bolder" aria-current="page" href="#">
                      support
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active fw-bolder" aria-current="page" href="#">
                      Sign In
                    </a>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link text-light fw-bolder px-4 active btn btn addto-Btn" aria-current="page" href="#">
                      Sign Up
                    </button>
                  </li>
                </ul>
                    </div>
              </div>
            </div>
          </nav>

            <div className="container py-5">
                <div className="container row">
                    <div className="col-2">
                      <div className="row">
                            <img className="cart-col1 img-fluid py-2" src={img1} alt=""></img><br></br>
                            <img className="cart-col1 img-fluid py-2" src={img2} alt=""></img> <br></br>
                            <img className="cart-col1 img-fluid py-2" src={img3} alt=""></img><br></br>
                            <img className="cart-col1 img-fluid py-2" src={img4} alt=""></img>
                    </div>
                    </div>














                    <div className=" col-5">
                        <img src={img4} alt="" className=" cart-col2  img-fluid"></img>
                        </div>
                        <div className="col-5">
                            <div className="">
                            <i class="fas fa-star text-warning px-1"></i>
                            <i class="fas fa-star text-warning px-1"></i>
                            <i class="fas fa-star text-warning px-1"></i>
                            <i class="fas fa-star text-warning px-1"></i>
                            <i class="fas fa-star-half-alt text-warning px-1"></i>
                           </div>

                          <h3 className="getfree-bold">Apple Airpods with wired charging Case</h3>
                          <p>By <span className="text-primary">Apple</span></p>
                          <p className="text-secondary">Lis Price:   <span className="fs-5">$70</span></p>
                          <h6 className="text-secondary">Price:   <span className="fs-4 fw-bolder text-dark">$70</span></h6>
                          <p className="text-secondary">This product is only compatible with iPhone, iPad, and iPod touch models with iOS 10 or later, Apple Watch models</p>
                          <span className="small-circle mx-2">-</span>
                          <button type="button" class="btn btn-outline-secondary px-3 ">2</button>
                          <span className="small-circle mx-2">+</span><br></br>
                          <button className="btn btn-primary mt-3 mx-3 fw-bolder">Buy Now</button><button className="mt-3 btn btn-outline-dark">Add to Cart</button>
                        
                        </div>
                </div>
            </div>







        </div>
    )
}
export default AddtoCart