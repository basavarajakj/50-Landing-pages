
import Logo from '../assets/logo.png';
import instagram from '../assets/instagram.svg';
import Twitter from '../assets/Twitter.svg';
import Facebook from '../assets/facebook.png';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="section footer-top">
        <div className="container">

          <div className="footer-brand">

            <a href="#" className="logo">
              <img src={Logo} alt="Digitalmedia home" width="205" height="40" />
            </a>

            <address className="footer-text">
              Los Angeles, California, USA
            </address>

            <ul className="social-list">

              <li>
                <a href="#" className='social-link'>
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#" className='social-link'>
                  <img src={Twitter} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#" className='social-link'>
                  <img src={instagram} alt="facebook" />
                </a>
              </li>

            </ul>

            <a href="#" className='btn btn-primary'>Contact us</a>

          </div>

          <ul className="footer-list">

            <li>
              <a href="#" className='footer-link'>Work with us</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Advertise with us</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Support us</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Business Advices</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Business Advices</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Private Coaching</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Our Work</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Our Commitment</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Our Team</a>
            </li>

            <li>
              <a href="#" className='footer-link'>About Us</a>
            </li>

            <li>
              <a href="#" className='footer-link'>FAQs</a>
            </li>

            <li>
              <a href="#" className='footer-link'>Report a Bug</a>
            </li>


          </ul>

        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container">

          <p className="copyright">
            &copy; {new Date().getFullYear()} Digitalmedia, Inc. - Developed By <a href="#" className="link">Basavaraja K J</a>
          </p>

          <ul className="footer-bottom-list">

            <li>
              <a href="#" className='footer-list'>Term of use</a>
            </li>

            <li>
              <a href="#" className='footer-list'>Privacy policy</a>
            </li>

          </ul>

        </div>
      </div>

    </footer>
  )
}

export default Footer