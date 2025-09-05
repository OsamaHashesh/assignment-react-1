import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import EndComponent from '../end-component/EndComponent'

export default function Layout() {
  return (
    <div>
      <Navbar/>


<Outlet/>



<EndComponent/>
      <Footer/>
    </div>
  )
}
