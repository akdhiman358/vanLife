import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/vanDetails'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import "./server"
import Dashboard from './pages/host/Dashboard'
import Reviews from './pages/host/Reviews'
import Income from './pages/host/Income'
import HostLayout from './components/HostLayout'
import HostVans from './pages/host/HostVans'
import HostVanDetails from './pages/host/hostVanDetails'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanPricing from './pages/host/HostVanPricing'

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path = '/'element = {<Layout />}>
          <Route index element= {<Home />} />
          <Route path='about' element={<About />}/>
          <Route path ='vans' element ={<Vans/>}/>
          <Route path='vans/:id' element ={<VanDetails/>}/>
          <Route path='host' element ={<HostLayout/>} >
            <Route index element ={<Dashboard />} />
            <Route path ='income' element ={<Income/>}/>
            <Route path='hostvans' element ={<HostVans/>}/>
            <Route path ='reviews' element = {<Reviews/>} />
            <Route path='hostvans/:id' element ={<HostVanDetails/>}>
              <Route index element ={<HostVanInfo/>}/>
              <Route path='pricing' element={<HostVanPricing/>}/>
              <Route path='photos' element ={<HostVanPhotos/>}/>

            </Route>
          </Route>
          

        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
