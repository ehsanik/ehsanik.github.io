import { NavLink, Outlet } from 'react-router-dom'
import kianaSmall from '../assets/images/kiana_small.jpg'

function Layout() {
  return (
    <>
      <header className="site-header">
        <img src={kianaSmall} alt="Kiana Ehsani" />
        <h1>Kiana Ehsani</h1>
      </header>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/selected-works" className={({ isActive }) => isActive ? 'active' : ''}>Selected Works</NavLink></li>
          <li><NavLink to="/mountains" className={({ isActive }) => isActive ? 'active' : ''}>Mountains</NavLink></li>
        </ul>
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
