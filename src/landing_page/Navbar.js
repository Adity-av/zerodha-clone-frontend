import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
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
        <div class="collapse navbar-collapse ps-5 ms-5" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active ps-5" aria-current="page" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ps-3" to={"/about"}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ps-3" aria-current="page" to={"/product"}>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ps-3" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active ps-3" to={"/support"}>
                  Support
                </Link>
              </li>
              
                
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
