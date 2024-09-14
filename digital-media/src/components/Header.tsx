import { useCallback, useState } from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [toggleNavbarList, setToggleNavbarList] = useState(false);

  const handleNavbarToggle = useCallback(() => {
    setToggleNavbarList((value) => !value)
  }, [])
  return (
    <header className="header">
      <div className="container">

        <a href="#" className="logo">
          <img src={Logo} alt="Digitalmedia home" width="205" height="40" />
        </a>

        <nav className={`navbar ${toggleNavbarList ? 'active' : ""}`}>
          <ul className="navbar-list">

            <li>
              <a href="#" className='navbar-link'>How it Works</a>
            </li>
            <li>
              <a href="#" className='navbar-link'>Our Work</a>
            </li>
            <li>
              <a href="#" className='navbar-link'>Pricing</a>
            </li>
            <li>
              <a href="#" className='navbar-link'>About Us</a>
            </li>

          </ul>
        </nav>

        <a href="#" className="btn btn-secondary"> Try it Now</a>

        <button onClick={handleNavbarToggle} className={`nav-open-btn ${toggleNavbarList && 'active'}`} aria-label='toggle menu'>
          <span className='material-symbols-rounded menu-icon'>
            menu
          </span>
          <span className='material-symbols-rounded close-icon'>
            close
          </span>
        </button>

      </div>
    </header>
  )
}

export default Header