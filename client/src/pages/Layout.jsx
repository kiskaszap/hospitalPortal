import { Outlet, Link } from "react-router-dom";
import { context } from "../components/Context";
import { useState, useContext } from "react";




const Layout = () => {
  const data = useContext(context);
  
  return (
    <>
    <header className="header">
    
      <nav>
        <ul className="navigationLink">
          <li>
            <Link to="/">Home</Link>
          </li>
          {data.isLoggedIn? null :<li>
             <Link to="/login">Login</Link>
          </li>}
          {data.isLoggedIn? null :<li>
             <Link to="/register">Register</Link>
          </li>}
          {data.isLoggedIn? <li>
             <Link to="/games">Games</Link>
          </li>:null}
          {data.isLoggedIn?<li>
             <Link to="/profile">Profile</Link>
          </li>:null}
          <li>
            <Link to="/department">Department</Link>
          </li>
        </ul>
      </nav>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;