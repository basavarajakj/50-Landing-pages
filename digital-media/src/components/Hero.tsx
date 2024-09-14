
import HeroBanner from '../assets/hero-banner.png';
import shape1 from '../assets/hero-icon-1.png';
import shape2 from '../assets/hero-icon-2.png';
import shape3 from '../assets/hero-icon-3.png';

const Hero = () => {
  return (
    <section className="section hero" >
      <div className="container">

        <div className="hero-content">

          <h1 className="h1 title hero-title">
            We Take Care of Your Brand
          </h1>

          <p className="hero-text">
            Use this section to describe your company and the product you offer. You could share your
            company's story and details about why you are in business. 
          </p>

          <div className="input-wrapper">

            <input type="email" className="input-field" placeholder="Enter your Email" />
            <button className="btn btn-primary">Let's Talks</button>

          </div>

        </div>

        <figure className="hero-content">

          <img src={HeroBanner} className="w-100" width="875" height="960" alt="Hero Banner" />

          <img src={shape1} alt="Youtube" width="100" height="100" className="shape shape-1" />

          <img src={shape2} alt="Twitter" width="120" height="120" className="shape shape-2" />

          <img src={shape3} alt="Instagram" width="150"  height="150" className="shape shape-3" />

        </figure>

      </div>
    </section>
  )
}

export default Hero