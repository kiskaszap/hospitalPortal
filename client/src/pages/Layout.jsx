import { Outlet, Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
    <header className="header">
    
      <nav>
        <ul className="navigationLink">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
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