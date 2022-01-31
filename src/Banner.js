import React from "react";
import AddtoCart from "./AddtoCart";
import "./Banner.css";
import ChooseUs from "./ChooseUs";
import Contact from "./Contact";
import FeatureNew from "./FeatureNew";
import Footer from "./Footer";
import GetfreeForm from "./GetfreeForm";

import Products from "./Products";
import Service from "./Service";






 

function Banner() {

  


 
  return (
    <div>
      <div className="banner container-fluid ">
        <img src=""></img>
        <div className="banner-desp">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand fw-bolder text-light fs-4" href="#">
                Behance
              </a>
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
                      class="nav-link dropdown-toggle text-light "
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
                        <a class="dropdown-item " href="#">
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
                      class="nav-link dropdown-toggle text-light "
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
                      class="nav-link dropdown-toggle text-light "
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
                        <a class="dropdown-item " href="#">
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
                    <a class="nav-link active text-light" aria-current="page" href="#">
                      support
                    </a>
                  </li>
                </ul>

                <div className="d-flex">
                  <button className="btn btn addto-Btn text-light">Get started free</button>
                </div>
              </div>
            </div>
          </nav>

          <div className="banner-content">
            <h1>
              Get help from the<br></br> expert consultants.
            </h1>
            <p className="text-light pt-1 ">
              A business consultant is a professional who provides professional
              or expert advice in a particular area such as security management,
              accountancy, law, human resources, marketing financial control,
              engineering, science, digital ...
            </p>
            {/* <button  onClick={()=>{
              history.push("/HooksForm")
            }} className="btn btn addto-Btn text-light py-2 px-4">
              HookForm<span className="ps-3">&#x2192;</span>
            </button> */}

              <button className="btn btn addto-Btn text-light py-2 px-4">
              Login<span className="ps-3">&#x2192;</span>
            </button>
             
           
          </div>

        </div>
        
      </div>
      

    
      <div className="container py-5">
        <div className="row ">
          <div className="col"> 
          <div className="row">
          
          <h6 className="col-4  font">1M+</h6>
          <div className=" col-6 text-secondary">
            Customer visit  Abinoevery month
          </div>
          </div>
          </div>

          <div className="col"> 
          <div className="row">
          
          <h6 className="col-4 font">93%</h6>
          <div className=" col-6 text-secondary">
          Satisfaction rate from our customers.
          </div>
          </div>
          </div>


          <div className="col"> 
          <div className="row">
          
          <h6 className="col-3 font">4.9</h6>
          <div className=" col-7 text-secondary">
          Average customer ratings out of 5.00!
          </div>
          </div>
          </div>
          </div>
      </div>
      
      <Service></Service>
        <ChooseUs></ChooseUs>
        <FeatureNew></FeatureNew>
        <GetfreeForm></GetfreeForm>
        <Contact></Contact>
        <AddtoCart></AddtoCart>
        <Products></Products>
        <Footer></Footer>
        
      
      
      
      </div>
   
  );
}
export default Banner;
