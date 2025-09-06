import React from 'react'

export default function Contact() {
  return (
    <section className='contact pt-5'>
      <div>
        <h2 className='text-uppercase pt-5'>contact section</h2>
<div className='under-line'>
         <div className='line1'></div>
         <i className="fa-solid fa-star"></i>
          <div className='line2'></div>
      </div>
        <div className=''>
<form method='get'>
  <input className="form-control" type="text" placeholder="userName" aria-label="default input example" name='name' id='name'/>
<input className="form-control" type="number" placeholder="userAge" aria-label="default input example" name='age' id='age'/>
<input className="form-control" type="email" placeholder="UserEmail" aria-label="default input example" name='email' id='email' />
<input className="form-control" type="password" placeholder="userPassword" aria-label="default input example" name='password' id='password' />
<button type='submit' className='text-capitalize mb-5'>send message</button>
</form>
        </div>

      </div>
    </section>
  )
}
