import type { CSSProperties } from "react";

import category1 from '../assets/category-1.jpg';
import category2 from '../assets/category-2.jpg';
import category3 from '../assets/category-3.jpg';
import category4 from '../assets/category-4.jpg';

const CARD_CATEGORY_LIST = [
  {
    id: 1,
    imageUrl: category1,
    title: 'Cat Food'
  },
  {
    id: 2,
    imageUrl: category2,
    title: 'Cat Toys'
  },
  {
    id: 3,
    imageUrl: category3,
    title: 'Dag Food'
  },
  {
    id: 4,
    imageUrl: category4,
    title: 'Dog Toys'
  },
]

const Category = () => {
  return (
    <section className="section category" aria-label="category">
      <div className="container">

        <h2 className="h2 section-title">
          <span className="span">Top</span> categories
        </h2>

        <ul className="has-scrollbar">

          {CARD_CATEGORY_LIST.map(list => (
            <li key={list.id} className="scrollbar-item">
            <div className="category-card">

              <figure className="card-banner img-holder" style={{"--width": "330", "--height": "300"} as CSSProperties}>
                <img src={list.imageUrl} width="330" height="300" alt="" className="img-cover" />
              </figure>

              <h3 className="h3">
                <a href="#" className="card-title">{list.title}</a>
              </h3>

            </div>
          </li>
          ))}

        </ul>

      </div>
    </section>
  )
}

export default Category