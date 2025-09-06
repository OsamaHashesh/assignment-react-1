import React from 'react';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

export default function EndComponent() {

    const iconsFortAwesome = [
            'fa-brands fa-facebook-f',
            ' fa-brands fa-twitter',
'fa-brands fa-linkedin-in' ,   
'fa-solid fa-globe'
        ];


  return (
    <div className='endComponent py-5'>
        <div className='px-3'>
            <div className='row g-2'>
                <div className='col-md-4'>
                    <div className="inner">
                        <h4 className='text-uppercase'>LOCATION</h4>
                        <p>2215 John Daniel Drive</p>
                        <span>Clark, MO 65243</span>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="inner">
                        <h4 className='text-uppercase'>AROUND THE WEB</h4>
 <div className='icons'>{iconsFortAwesome.map((icon) => (<i className={icon}></i>))}</div>

                      {/* <div className='icons'>

<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin-in"></i>    
<i class="fa-solid fa-globe"></i>
                      </div> */}

                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="inner">
                        <h4 className='text-uppercase'>ABOUT FREELANCER</h4>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}
