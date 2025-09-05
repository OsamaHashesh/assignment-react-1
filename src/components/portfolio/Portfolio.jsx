import React from 'react'
// import img1 from "images\poert1.png";
// import img2 from "images\port2.png";
// import img3 from "images\port3.png";

export default function Portfolio() {
//  const portfolioImg=[{id: 1 ,imgPath:"images\poert1.png" ,alt:"wood house"},
//         {id: 2 ,imgPath: "images\port2.png",alt : "Cake"},
//         {id: 3 ,imgPath: "images\port3.png" ,alt:"Red house"},
//         {id: 4 ,imgPath: "images\poert1.png"  ,alt:"wood house"},
//         {id: 5 ,imgPath: "images\port2.png",alt : "Cake"},
//         {id: 6 ,imgPath: "images\port3.png" ,alt:"Red house"},];

//  const img1="images\poert1.png";

        // const portfolioImg = [img1,img2,img3];
        // const portfolioImg = ["images\poert1.png","images\port2.png","images\port3.png"];

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
           {/* {portfolioImg.map((image) => (
               <div className="col-md-4">
                <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img  src={image.imgPath} className='w-100 h-100 rounded-3'  alt={image.alt} />
                </div>
            </div>
            ))} */}

              <div className="col-md-4">
               <div className="img-inner border position-relative rounded-3 ">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img src="images\poert1.png" className='w-100 h-100 rounded-3'  alt="wood house" />
                </div>
            </div>
             
           <div className="col-md-4">
                <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img src="src\images\port2.png" className='w-100 h-100 rounded-3'  alt="Cake" />
                </div>
            </div>

             <div className="col-md-4">
               <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img src="src\images\port3.png" className='w-100 h-100 rounded-3'  alt="Red house" />
                </div>
            </div>
               
             <div className="col-md-4">
               <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img src="src\images\poert1.png" className='w-100 h-100 rounded-3'  alt="wood house" />
                </div>
            </div>
             
             <div className="col-md-4">
                <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img src="src\images\port2.png" className='w-100 h-100 rounded-3'  alt="Cake" />
                </div>
            </div>

             <div className="col-md-4">
               <div className="img-inner border position-relative rounded-3">
                    <div className='img-layer w-100 h-100 rounded-3 position-absolute'>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                   <img src="src\images\port3.png" className='w-100 h-100 rounded-3'  alt="Red house" />
                </div>
            </div>

  
             

        </div>
      </div>
    </section>
  )
}
