import React from 'react'
import img1 from "../../assets/images/port1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

export default function Portfolio() {
 const portfolioImg=[{id: 1 ,imgPath: img1 ,alt:"wood house"},
        {id: 2 ,imgPath: img2,alt : "Cake"},
        {id: 3 ,imgPath: img3 ,alt:"Red house"},
        {id: 4 ,imgPath: img1  ,alt:"wood house"},
        {id: 5 ,imgPath: img2,alt : "Cake"},
        {id: 6 ,imgPath: img3 ,alt:"Red house"},
      ];


  return (
    <section className='portfolio h-100 pt-5'>
      <h2 className='pt-5 pb-4'>portfolio component</h2>
      <div className='under-line'>
         <div className='line1'></div>
         <i className="fa-solid fa-star"></i>
          <div className='line2'></div>
      </div>

      <div className='container'>
        <div className="row g-5 pb-5">

         

{portfolioImg.map((image) => (
    <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target={`#exampleModalToggle${image.id}`} data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src={image.imgPath} className='w-100 h-100 rounded-3'  alt={image.alt} />
                </div>
                </button> 

<div className="modal fade" id={`exampleModalToggle${image.id}`} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img  src={image.imgPath} className='w-100 h-100 rounded-3'  alt={image.alt} />
      </div>
    </div>
  </div>
</div>
            </div>  ))}



{/* <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle1" data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\port1.png" className='w-100 h-100 rounded-3'  alt="wood house" />
                </div>
                </button> 

<div className="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img src="images\port1.png" className='w-100 h-100 rounded-3'  alt="wood house" />
      </div>
    </div>
  </div>
</div>
            </div>

             
   <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\port2.png" className='w-100 h-100 rounded-3'  alt="Cake" />
                </div>
                </button> 

<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img src="images\port2.png" className='w-100 h-100 rounded-3'  alt="Cake" />
      </div>
    </div>
  </div>
</div>
            </div>

 
 <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\port3.png" className='w-100 h-100 rounded-3'  alt="Red house" />
                </div>
                </button> 


<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img src="images\port3.png" className='w-100 h-100 rounded-3'  alt="Red house" />
      </div>
    </div>
  </div>
</div>
            </div>

            <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle1" data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\port1.png" className='w-100 h-100 rounded-3'  alt="wood house" />
                </div>
                </button> 

<div className="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img src="images\port1.png" className='w-100 h-100 rounded-3'  alt="wood house" />
      </div>
    </div>
  </div>
</div>
            </div>

             
   <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\port2.png" className='w-100 h-100 rounded-3'  alt="Cake" />
                </div>
                </button> 

<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img src="images\port2.png" className='w-100 h-100 rounded-3'  alt="Cake" />
      </div>
    </div>
  </div>
</div>
            </div>

 
 <div className="col-md-4">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">
                  <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\port3.png" className='w-100 h-100 rounded-3'  alt="Red house" />
                </div>
                </button> 


<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
       <img src="images\port3.png" className='w-100 h-100 rounded-3'  alt="Red house" />
      </div>
    </div>
  </div>
</div>
            </div> */}


        </div>
      </div>
    </section>
  )
}
 