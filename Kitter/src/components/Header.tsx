import { useCallback, useEffect, useState } from "react";

const NAVBAR_ITEM = [
  {
    name: "Home"
  },
  {
    name: "Shope"
  },
  {
    name: "Collections"
  },
  {
    name: "Blogs"
  },
  {
    name: "Contact"
  },

];

const Header = () => {
  const[toggleNavbar, setToggleNavbar] =  useState(false);
  const[activeHeader, setActiveHeader] = useState(false);

  const handleNavbarToggle = useCallback(() => {
    setToggleNavbar((value) => !value);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }

    }

    
    // add evenListener to activate header
    window.addEventListener('scroll', handleScroll);
  
    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <header className={`header ${activeHeader && 'active'}`}>
      <div className="container">

        <button onClick={handleNavbarToggle} className="nav-toggle-btn" aria-label="toggle menu">
          {!toggleNavbar && (
             <span className="material-symbols-outlined menu-icon">
               menu
             </span>
          )}
        </button>

        <a href="#" className="logo">Kitter</a>

        <nav className={`navbar ${toggleNavbar && 'active'}`}>

          <div className="navbar-header">
            <button onClick={handleNavbarToggle} className="nav-toggle-btn">
              <span className="material-symbols-outlined close-icon">
                close
              </span>
            </button>
            <a href="#" className="logo">Kitter</a>
          </div>
          <ul className="navbar-list">

            {NAVBAR_ITEM.map(list => (
              <li onClick={handleNavbarToggle} className="navbar-item" key={list.name}>
                <a href={`#${(list.name).toLocaleLowerCase()}`} className="navbar-link">{list.name}</a>
              </li>
            ))}

          </ul>

          <a href="#" className="navbar-action-btn">Log in</a>
        </nav>

        <div className="header-actions">

          <div className="action-btn" >

            <button className="action-btn" aria-label="search">
              <span className="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
            <button className="action-btn user" aria-label="user">
              <span className="material-symbols-outlined">
                person
              </span>
            </button>
            <button className="action-btn" aria-label="cart">
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
              <span className="btn-badge">0</span>
            </button>


        </div>

      </div>
    </header>
  )
}

export default Header