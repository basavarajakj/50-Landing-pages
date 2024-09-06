import type { CSSProperties } from "react";

import PRODUCTS_DETAILS from '../constants/ProductDetails';
import getStarRating from "./utils/Stars";

const Products = () => {
  return (
    <section className="section product" id="shop" aria-label="product">
      <div className="container">

        <h2 className="section-title">
          <span className="span">Best</span> Seller
        </h2>

        <ul className="grid-list">

          {PRODUCTS_DETAILS.map(product => (
            <li key={product.id} className="product-card">

              <div className="card-banner img-holder" style={{ "--width": 360, "--height": 360} as CSSProperties}>
                <img src={product.imageUrls.defaultImage} width="360" height="360" alt={product.alt} className="img-cover default" />
                <img src={product.imageUrls.hoverImage} width="360" height="360" alt={product.alt}  className="img-cover hover" />

                <button className="card-action-btn" aria-label="add to card" title="add to card">
                  <span className="material-symbols-rounded close-icon">
                    shopping_cart
                  </span>
                </button>
              </div>

              <div className="card-wrapper">

                <div className="wrapper">
                <div className="rating-wrapper">
                  {getStarRating(product.rating)}
                </div>

                  <span className="span">(1)</span>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">{product.cardTitle}</a>
                </h3>

                <data value={product.price} className="card-price">₹{product.price}.00</data>

              </div>

            </li>
          ))}

        </ul>

      </div>
    </section>
  )
}

export default Products