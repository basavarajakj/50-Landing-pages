import { CSSProperties } from "react"
import { imageList } from "./constant"

import leftImage from './assets/image-left-01.png';
import rightImage from './assets/Image-right.png';

const App = () => {
  return (
    <main className="main">
      <article className="container">

        <div className="header-text-container">

          <div className="header-text">
            <h1 className="headline-large">Discover the beauty around the world</h1>

            <p className="label-medium text">Nature, a tranquil sanctuary, whispers through rustling leaves, dances in vibrant hues, and cradles life in its serene embrace.</p>

            <button className="btn btn-primary">Get started</button>
          </div>

          <div className="image-list">

            <figure className="img-holder first" style={{ "--width": "408px" , "--height" : "480px"} as CSSProperties}>
              <img src={leftImage} alt="" width="408" height="400" loading="lazy" className="img-cover"/>
            </figure>

            <figure className="img-holder second" style={{ "--width": "408px" , "--height" : "480px"} as CSSProperties}>
              <img src={rightImage} alt="" width="408" height="480" loading="lazy" className="img-cover"/>
            </figure>

          </div>

        </div>

        <div className="hero-image-container">

          {imageList.map((image) => (
              <div key={image.id} className="image-item">
                <h2 className="headline-medium">0{image.id}</h2>
                <figure  className="img-holder" style={{ "--width": "412px" , "--height" : "381px"} as CSSProperties}>
                    <img src={image.imageSrc} alt="nature images" width={412} height={381} loading="lazy" className="img-cover"/>
                </figure>
              </div>
          ))}

        </div>

      </article>
    </main>
  )
}

export default App