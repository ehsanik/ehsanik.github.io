import { NavLink, Outlet } from 'react-router-dom'
import kianaSmall from '../assets/images/kiana_small.jpg'

function Layout() {
  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <NavLink to="/" className="nav-brand">
            <img src={kianaSmall} alt="Kiana Ehsani" />
            <span>Kiana Ehsani</span>
          </NavLink>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/selected-works" className={({ isActive }) => isActive ? 'active' : ''}>Selected Works</NavLink></li>
            <li><NavLink to="/mountains" className={({ isActive }) => isActive ? 'active' : ''}>Mountains</NavLink></li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Outlet />
      </div>
      <footer className="site-footer">
        <p>&copy; 2024 Kiana Ehsani. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Layout
