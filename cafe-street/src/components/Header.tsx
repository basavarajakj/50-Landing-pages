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
          <img src={Logo} alt="Coffee street" width={240} height={40} />
        </a>

        <nav className={`navbar ${toggleNavbarList && 'active'}`}>
          <ul className="navbar-list">

            <li>
              <a href="#" className='navbar-link'>About use</a>
            </li>

            <li>
              <a href="#" className='navbar-link'>Our product</a>
            </li>

            <li>
              <a href="#" className='navbar-link'>Delivery</a>
            </li>

          </ul>
        </nav>

        <div className="navbar-search">

          <input type="search" className='navbar-search' />
          <span className="material-symbols-rounded">
            search
          </span>

        </div>

        <div className="navbar-wrapper">
          <div className="cart">
            <span className="material-symbols-rounded">
              shopping_cart
            </span>
            <span className="span"></span>
          </div>

          <button onClick={handleNavbarToggle} className={`nav-open-btn ${toggleNavbarList && 'active'}`} aria-label='toggle menu'>
            <span className='material-symbols-rounded menu-icon'>
              menu
            </span>
            <span className='material-symbols-rounded close-icon'>
              close
            </span>
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header