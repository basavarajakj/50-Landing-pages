import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        <a href="#" className="logo">
          <img src={Logo} alt="Coffee street" width={140} height={40} />
        </a>

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

        

      </div>
    </header>
  )
}

export default Header