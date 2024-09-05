
import { CSSProperties } from 'react'

import img1 from './assets/image-01.png'
import img2 from './assets/image-02.png'
import img3 from './assets/image-03.png'
import img4 from './assets/image-04.png'
import img5 from './assets/image-05.png'
import img6 from './assets/image-06.png'
import img7 from './assets/image-07.png'
import img8 from './assets/image-08.png'

const imageList = [
  {
    id: 1,
    imageSrc: img1
  },
  {
    id: 2,
    imageSrc: img2
  },
  {
    id: 3,
    imageSrc: img3
  },
  {
    id: 4,
    imageSrc: img4
  },
  {
    id: 5,
    imageSrc: img5
  },
  {
    id: 6,
    imageSrc: img6
  },
  {
    id: 7,
    imageSrc: img7
  },
  {
    id: 8,
    imageSrc: img8
  },
]

const App = () => {
  return (
    <main className="main">
      <div className="container">

        <div className="hero-content">
          
          <h1 className="headline-large">Discover the beauty around the world</h1>

          <p className="label-medium text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>

          <button className="btn btn-primary">Explore</button>

        </div>

        <div className="hero-image-container">

          {imageList.map(image => (
            <figure key={image.id} className="img-holder" style={{ "--width": "316px", "--height": "288px"} as CSSProperties}>
              <img src={image.imageSrc} alt="" className="img-cover" />
            </figure>
          ))}

        </div>

      </div>
    </main>
  )
}

export default App