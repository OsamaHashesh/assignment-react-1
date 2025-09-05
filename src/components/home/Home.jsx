import React from 'react'

export default function Home() {
  return (
   <section className='home '>
     <div>
        <div className='home-img'>
            <img className='w-100 h-100' src="images\avataaars.svg" alt="Young man" />
        </div>
      <h1 className='text-uppercase'>start Framework</h1>
      <div className='under-line'>
         <div className='line1'></div>
         <i class="fa-solid fa-star"></i>
          <div className='line2'></div>
      </div>
      <span className='text-capitalize'>Graphic Artist - Web Designer - Illustrator</span>
    </div>
   </section>
  )
}
