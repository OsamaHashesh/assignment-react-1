import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import EndComponent from './components/end-component/EndComponent';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';

import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Contact from './components/contact/Contact';




function App() {

  let routes = createBrowserRouter([
    {path:"" , element:<Layout/> , children:[
      {index:true , element : <Home/>},
      {path: "home" , element : <Home/>},
      {path: "about" , element : <About/>},
      {path: "Portfolio" , element : <Portfolio/>},
      {path: "contact" , element : <Contact/>},
      {path: "*" , element : <NotFound/>},
    ]

    }])
  return (
    <>
     {/* <Navbar/> */}
     {/* <Home/> */}
     {/* <About/> */}
     {/* <Portfolio/> */}
     {/* <Contact/>
     <EndComponent/>
     <Footer/> */}
     {/* <Layout/> */}
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
