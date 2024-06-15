import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Navbar.css"

const Navbars = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
    <img style={{width:"100%", height:"50px"}} src="https://static.vecteezy.com/system/resources/previews/014/414/710/non_2x/fly-emirates-logo-on-transparent-background-free-vector.jpg" alt="" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <a class="nav-link text-black fw-bold "  href="#">Destination</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black fw-bold "  href="#">Food</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black fw-bold "  href="#">Well Being</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black fw-bold "  href="#">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black fw-bold "  href="#">Family</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-black fw-bold "  href="#">Lifestyle</a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>

  <div className='d-flex gap-4'>
    <div className='mt-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
    </div>
    <div>
      <button className='giftBtn'>
        Get 120$ Chritmas Gift
      </button>
    </div>
  </div>

  </div>
</nav>
        </div>
      </div>
     
    </div>
  )
}

export default Navbars