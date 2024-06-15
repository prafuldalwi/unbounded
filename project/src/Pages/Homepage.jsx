import React, {useEffect, useState} from 'react'

import Card from 'react-bootstrap/Card';
import "../Styles/Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LazyLoad from 'react-lazyload';

const Homepage = () => {


  
const [className1, setClassName1] = useState('');
const [className2, setClassName2] = useState('');
const [className3, setClassName3] = useState('');
const [className4, setClassName4] = useState('');




 useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName1('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName1('loaded1');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 150);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
     
      if (window.scrollY > 100) { 
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName2('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName2('loaded2');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 190 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 190);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 190) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName3('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName3('loaded3');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 230 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 230);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 230) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName4('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName4('loaded4');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 290 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 290);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 290) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 




  return (
    <>


<div className="" style={{overflow:"hidden"}}>
  <div className="row">
  <div className="col-md-12 position-relative">
  <img
    className='mainImg'
    
    src="https://images.hdqwalls.com/download/lake-mountains-nature-new-1920x1080.jpg"
    alt=""
  />
  <div className='HomeText position-absolute top-50 start-50 translate-middle' style={{ filter: "brightness(100%)" }}>
    <h1>Lorem ipsum dolor sit amet asdas asda</h1>
    <p>Book Smart, Travel Simple</p>
    <button className='planBtn'>Start Planning Your Trip</button>
  </div>
</div>


    

  </div>
</div>


<LazyLoad className={className1}>  
<div className="container mt-5">
  <div className="row">

    <div className="col-md-4">
    <Card >
      <Card.Img className='cardImg' src="https://c4.wallpaperflare.com/wallpaper/65/36/957/high-resolution-mountain-lake-wallpaper-preview.jpg" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4">
    <Card >
    <Card.Img
        className='cardImg'
        src="https://m.media-amazon.com/images/I/81CJxnOkk4L._AC_UF1000,1000_QL80_.jpg"
        style={{
          filter: "brightness(50%)" // Set image brightness to 50%
        }}
      />
      <div className='card-img-overlay d-flex flex-column justify-content-between'>
      <div className='d-flex gap-2 top-left '>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      </div>

      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4">
    <Card >
      <Card.Img className='cardImg' src="https://w0.peakpx.com/wallpaper/263/916/HD-wallpaper-swiss-alps-sunset-mountains-colors-trees-sky-landscape.jpg" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 mt-4">
    <Card >
      <Card.Img className='cardImg' src="https://img.freepik.com/free-photo/playful-portrait-pretty-young-woman-having-fun-street_1153-8360.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=ais" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 mt-4">
    <Card >
      <Card.Img className='cardImg' src="https://img.freepik.com/free-photo/mother-daughter-shopping_1303-5030.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711843200&semt=ais" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 mt-4">
    <Card >
      <Card.Img className='cardImg' src="https://e0.365dm.com/23/09/2048x1152/skysports-man-city-julian-alvarez_6291117.jpg?20230919214738" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>




    <div className="col-md-4 mt-4">
    <Card >
      <Card.Img className='cardImg' src="https://t3.ftcdn.net/jpg/02/46/33/78/360_F_246337873_hpmSOVkaRglSjwfzfKHU6IFxRyhTGazn.jpg" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>



    <div className="col-md-4 mt-4">
    <Card >
      <Card.Img className='cardImg' src="https://media.istockphoto.com/id/612641694/photo/inner-urban-road.jpg?s=612x612&w=0&k=20&c=IRGC2zc1hRuCaz-HnP76vXZ5XEC1ltQeOUBni-wAk70=" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>


    <div className="col-md-4 mt-4">
    <Card >
      <Card.Img className='cardImg' src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blog_Paytm_How-Police-Verification-for-Passport-is-Done-in-India.jpg" />
      <div className='d-flex gap-2 top-left'>
        <span>
          <p>Florida Beach</p>
        </span>
        <span>
          <p>Florida</p>
        </span>
      </div>
      <Card.Body>
        <Card.Title className='h1 fw-bold mt-2'>Lorem epsum dirmet</Card.Title>
       <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
        <div className='d-flex gap-2' style={{alignItems:"center"}}>
<div>
<img style={{width:"40px", height:"37px", borderRadius:"50px", objectFit:"cover"}} src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
</div>        
<div>
<h6>Joanna Wellick</h6>
</div>
        </div>
        <div>
        <p className='mt-2'>Jun 28, 2018</p>
        
        </div>
       </div>
        <Card.Text className='mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <button className='mt-3 loadBtn'>Load More</button>
  </div>

</div>
</LazyLoad>




<LazyLoad className={className2}> 
<div className="container mt-5" style={{overflow:"hidden"}}>
  <div className="row">
  <div className="col-md-12 d-flex justify-content-center align-items-center">
  <img className='middleImg' src="https://wallpaper.forfun.com/fetch/96/964db39e1727e2b87a05e091ebecf29a.jpeg" alt="" />
  <div className='text-center imgTextBox'>
    <h1 className='text-white'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </h1>
    <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    <button className='mt-2 planBtn'>Start Planning Your Trip</button>
  </div>
</div>
   
  </div>
</div>
</LazyLoad>



<LazyLoad className={className3}> 
<div className="container mt-5">
<div class="row">
<div className='mt-5'>
    <h4>Top Destination</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>

<div className='flextogridbox gap-5'>

  <div class="col">
      <div className="image-container">
      <img  className='smalBoxImage' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/67/52/d4/caption.jpg?w=500&h=400&s=1" alt="" />
      <div className="overlay">
        <p>Dominican Republic</p>
      </div>
    </div>
  </div>

  <div class="col">
      <div className="image-container">
      <img className='smalBoxImage' src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/11/21/3551916-84291187.jpg?itok=EhNpPtMl" alt="" />
      <div className="overlay">
        <p>Dubai</p>
      </div>
    </div>
  </div>

  <div class="col">
      <div className="image-container">
      <img className='smalBoxImage' src="https://media.istockphoto.com/id/2007379107/photo/panoramic-view-of-kuwait-city-skyline-at-night.webp?b=1&s=170667a&w=0&k=20&c=PzJ9s8igtM2ZI53P5dUhgVBaKQrr7RZYVCTJu5v1flU=" alt="" />
      <div className="overlay">
        <p>Glasgow</p>
      </div>
    </div>
  </div>

  <div class="col">
      <div className="image-container">
      <img className='smalBoxImage' src="https://media.istockphoto.com/id/1371680010/photo/gorgeous-sunset-at-kuwait-towers.jpg?s=612x612&w=0&k=20&c=B9ax0T-Vynn-vHj4ZOYvg65nuZnXL2DmZMR0n1i781Q=" alt="" />
      <div className="overlay">
        <p>Europe</p>
      </div>
    </div>
  </div>

  </div>

</div>
</div>
</LazyLoad>

<LazyLoad className={className4}> 
<div className="container mt-5">
  <div className="row">
    
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Category Name">

      <div className="col-md-12 flextogridbox gap-3">
        
       <div className="col-md-8 p-3 flextogridbox border">
    
    <div className='col-md-7'>
    <Card style={{width:"95%"}}>
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/06/06/17/33/360_F_606173380_duWI5madfk1svQ1TvkxHcy9wfKM7In4P.jpg" />
      <Card.Body>
        <p>1 Month Ago</p>
       
        <div>
        <Card.Title>Some quick example text to build on the card title and make up the</Card.Title>
        </div>
      
      
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-5'>
    <div class="d-flex gap-3  " >
      <div class="quickImgBox">
        <img  src="https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>


          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://static.vecteezy.com/system/resources/thumbnails/026/189/673/small_2x/landscape-ice-mountains-background-ai-generated-photo.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

         
    </div>


    </div>

       <div className="col-md-4 border p-4" >
<h5>Manage Reads</h5>
       <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ik.imagekit.io/hiker/hikers360/customized-trip/6559b24c-b8df-4b44-9da7-429bfcf3db17" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://us.images.westend61.de/0000823477pw/group-of-friends-hiking-in-the-mountains-PNEF00439.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://cdn.shopify.com/s/files/1/0004/4652/9572/files/Hiking-With-Friends-3_grande.jpeg?v=1562086619" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://s7d6.scene7.com/is/image/DSGAEMSites/Ohiopyle_Hike_21PublicLands_6204?qlt=95&wid=400&ts=1692039474311&dpr=on,2.625" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          


       </div>

       </div>


      </Tab>


      <Tab eventKey="profile" title="Category Name">
      <div className="col-md-12 flextogridbox gap-3">
        
        <div className="col-md-8 p-3 flextogridbox border">
     
     <div className='col-md-7'>
     <Card style={{width:"95%"}}>
       <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/06/06/17/33/360_F_606173380_duWI5madfk1svQ1TvkxHcy9wfKM7In4P.jpg" />
       <Card.Body>
         <p>1 Month Ago</p>
        
         <div>
         <Card.Title>Some quick example text to build on the card title and make up the</Card.Title>
         </div>
       
       
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <a href='/' className='text-black'>View Post</a>
       </Card.Body>
     </Card>
     </div>
 
     <div className='col-md-5'>
     <div class="d-flex gap-3  " >
       <div class="quickImgBox">
         <img  src="https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://static.vecteezy.com/system/resources/thumbnails/026/189/673/small_2x/landscape-ice-mountains-background-ai-generated-photo.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
          
     </div>
 
 
     </div>
 
        <div className="col-md-4 border p-4" >
 <h5>Manage Reads</h5>
        <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://ik.imagekit.io/hiker/hikers360/customized-trip/6559b24c-b8df-4b44-9da7-429bfcf3db17" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://us.images.westend61.de/0000823477pw/group-of-friends-hiking-in-the-mountains-PNEF00439.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://cdn.shopify.com/s/files/1/0004/4652/9572/files/Hiking-With-Friends-3_grande.jpeg?v=1562086619" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://s7d6.scene7.com/is/image/DSGAEMSites/Ohiopyle_Hike_21PublicLands_6204?qlt=95&wid=400&ts=1692039474311&dpr=on,2.625" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           
 
 
        </div>
 
        </div>
 
      </Tab>


      <Tab eventKey="contact" title="Category Name" >
          <div className="col-md-12 flextogridbox gap-3">
        
       <div className="col-md-8 p-3 flextogridbox border">
    
    <div className='col-md-7'>
    <Card style={{width:"95%"}}>
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/06/06/17/33/360_F_606173380_duWI5madfk1svQ1TvkxHcy9wfKM7In4P.jpg" />
      <Card.Body>
        <p>1 Month Ago</p>
       
        <div>
        <Card.Title>Some quick example text to build on the card title and make up the</Card.Title>
        </div>
      
      
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/' className='text-black'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-5'>
    <div class="d-flex gap-3  " >
      <div class="quickImgBox">
        <img  src="https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>


          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 mt-3 " >
      <div class="quickImgBox">
        <img  src="https://static.vecteezy.com/system/resources/thumbnails/026/189/673/small_2x/landscape-ice-mountains-background-ai-generated-photo.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

         
    </div>


    </div>

       <div className="col-md-4 border p-4" >
<h5>Manage Reads</h5>
       <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ik.imagekit.io/hiker/hikers360/customized-trip/6559b24c-b8df-4b44-9da7-429bfcf3db17" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://us.images.westend61.de/0000823477pw/group-of-friends-hiking-in-the-mountains-PNEF00439.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://cdn.shopify.com/s/files/1/0004/4652/9572/files/Hiking-With-Friends-3_grande.jpeg?v=1562086619" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://s7d6.scene7.com/is/image/DSGAEMSites/Ohiopyle_Hike_21PublicLands_6204?qlt=95&wid=400&ts=1692039474311&dpr=on,2.625" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          


       </div>

       </div>

      </Tab>


      <Tab eventKey="Display" title="Category Name">
      <div className="col-md-12 flextogridbox gap-3">
        
        <div className="col-md-8 p-3 flextogridbox border">
     
     <div className='col-md-7'>
     <Card style={{width:"95%"}}>
       <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/06/06/17/33/360_F_606173380_duWI5madfk1svQ1TvkxHcy9wfKM7In4P.jpg" />
       <Card.Body>
         <p>1 Month Ago</p>
        
         <div>
         <Card.Title>Some quick example text to build on the card title and make up the</Card.Title>
         </div>
       
       
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <a href='/' className='text-black'>View Post</a>
       </Card.Body>
     </Card>
     </div>
 
     <div className='col-md-5'>
     <div class="d-flex gap-3  " >
       <div class="quickImgBox">
         <img  src="https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 mt-3 " >
       <div class="quickImgBox">
         <img  src="https://static.vecteezy.com/system/resources/thumbnails/026/189/673/small_2x/landscape-ice-mountains-background-ai-generated-photo.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
          
     </div>
 
 
     </div>
 
        <div className="col-md-4 border p-4" >
 <h5>Manage Reads</h5>
        <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://ik.imagekit.io/hiker/hikers360/customized-trip/6559b24c-b8df-4b44-9da7-429bfcf3db17" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://us.images.westend61.de/0000823477pw/group-of-friends-hiking-in-the-mountains-PNEF00439.jpg" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://cdn.shopify.com/s/files/1/0004/4652/9572/files/Hiking-With-Friends-3_grande.jpeg?v=1562086619" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           <div class="d-flex gap-3 " style={{alignItems:"center"}}>
       <div class="quickImgBox">
         <img style={{height:"80px"}} src="https://s7d6.scene7.com/is/image/DSGAEMSites/Ohiopyle_Hike_21PublicLands_6204?qlt=95&wid=400&ts=1692039474311&dpr=on,2.625" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
         <div class="mt-3" >
           <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
           <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
           </div>
           </div>
 
           
 
 
        </div>
 
        </div>
      </Tab>


    </Tabs>
   
  </div>
</div>
</LazyLoad>

    </>
  )
}

export default Homepage