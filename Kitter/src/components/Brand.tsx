import type { CSSProperties } from "react"

import brand1 from '../assets/brand-1.jpg';
import brand2 from '../assets/brand-2.jpg';
import brand3 from '../assets/brand-3.jpg';
import brand4 from '../assets/brand-4.jpg';
import brand5 from '../assets/brand-5.jpg';

const BRANDS = [
  {
    id: 13,
    imageSrc: brand1,
  },
  {
    id: 14,
    imageSrc: brand2,
  },
  {
    id: 15,
    imageSrc: brand3,
  },
  {
    id: 16,
    imageSrc: brand4,
  },
  {
    id: 17,
    imageSrc: brand5,
  },
]

const Brand = () => {
  return (
    <section className="section brand">
      <div className="container">

        <h2 className="h2 section-title">
          <span className="span">Popular</span> Brands
        </h2>

        <ul className="has-scrollbar">

          {BRANDS.map(brand => (
            <li key={brand.id} className="scrollbar-item">
              <figure className="brand-card img-holder" style={{"--width": 150, "--height": 150} as CSSProperties}>
                <img src={brand.imageSrc} alt="brand logo" width={150} height={150} className="img-cover"/>
              </figure>
            </li>
          ))}

        </ul>

      </div>
    </section>
  )
}

export default Brand