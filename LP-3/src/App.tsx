
import type { CSSProperties } from 'react';
import banner from './assets/Hero-Image.png';

const App = () => {
  return (
    <main className="main">
      <article className="container">

      <div className="header-text-container">

        <div className="header-text">
          <h1 className="headline-large">Just the Simple</h1>

        </div>
        <div>
          <p className="label-medium text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
            </p>

            <button className="btn btn-primary">
              Get Started
            </button>
        </div>
      </div>

        <div className="banner">
          <figure className='img-holder' style={{"--width": 750, "--height": 450} as CSSProperties}>
            <img src={banner} 
             width="750"
             height="450"            
             alt="banner"
              loading='lazy'
              className='img-cover'
            />
          </figure>
        </div>


      </article>
    </main>
  )
}

export default App