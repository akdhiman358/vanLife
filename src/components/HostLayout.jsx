import React from 'react'
import { Outlet,Link,NavLink } from 'react-router-dom'
function HostLayout() {
   const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
  }
  return (
    <>
        <div>
          <nav className="host-nav">

            <NavLink to ='/host' 
            end={true}
            style={({isActive})=> isActive ? activeStyles : null}
            >
              Dashboard
              </NavLink>
            <NavLink to='/host/income'
             style={({isActive})=> isActive ? activeStyles : null}>
              Income
              </NavLink> 

              <NavLink to = "/host/hostvans"
              style={({isActive})=> isActive ? activeStyles : null}>
              Vans
              </NavLink>  
            <NavLink to ='/host/reviews'
             style={({isActive})=> isActive ? activeStyles : null}>
              Reviews
              </NavLink>
            
          </nav>  
            <Outlet />
        </div>
    </>
  )
}

export default HostLayout