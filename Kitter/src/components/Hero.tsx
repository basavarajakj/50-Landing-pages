import type { CSSProperties } from "react";

import HeroBanner from '../assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="section hero has-bg-image" id="home" aria-label="home" style={{"backgroundImage" : `url(${HeroBanner})`} as CSSProperties}>
      <div className="container">

        <h1 className="h1 hero-title">
          <span className="span">High Quality</span> Pet Food
        </h1>

        <p className="hero-text">
          Sale up to 40% off today
        </p>

        <a href="#" className="btn">Shop now</a>

      </div>
    </section>
  )
}

export default Hero