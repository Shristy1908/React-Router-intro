import { NavLink, Outlet } from "react-router-dom"
export default function Navbar(){

    return(
        <>
            
          <div className="nav">
            <NavLink to="/" 
                     className="link" 
                     style={({isActive})=>(isActive ? {color:"black",fontWeight:600}:undefined)}>
                            
                    Home

            </NavLink>
            <NavLink to="about" 
                     className="link" style={({isActive})=>(isActive ? {color:"black",fontWeight:600}:undefined)}>
                     
                     About
            </NavLink>
            <NavLink to="items" 
                     className="link" style={({isActive})=>(isActive ? {color:"black",fontWeight:600}:undefined)}>
                     
                     Items
            </NavLink>

          </div>

          <Outlet/>
          
        </>

    )

   
}