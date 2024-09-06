import type { CSSProperties } from 'react';

import offerBanner1 from '../assets/offer-banner-1.jpg';
import offerBanner2 from '../assets/offer-banner-2.jpg';
import offerBanner3 from '../assets/offer-banner-3.jpg';

const OFFER_BANNER = [
  {
    id: 1,
    imageUrl: offerBanner1,
    cardTitles: {
      title1: "Hot Summer",
      title2: "Deals"
    },
    cardSubtitle: "Selected Items. Online Only." 
  },
  {
    id: 2,
    imageUrl: offerBanner2,
    cardTitles: {
      title1: "Spoil your true",
      title2: "love"
    },
    cardSubtitle: "Treats & Grooming." 
  },
  {
    id: 3,
    imageUrl: offerBanner3,
    cardTitles: {
      title1: "New in this",
      title2: "Year"
    },
    cardSubtitle: "Our Brand You Will Love." 
  },
]

const Offers = () => {
  return (
    <section className="offers section" aria-label="offer">
      <div className="container">

        <div className="grid-list">

          {OFFER_BANNER.map(offer => (
            <div key={offer.id} className="offer-card has-bg-image img-holder" style={{backgroundImage : `url(${offer.imageUrl})`, "--width" : 540, "--height": 374} as CSSProperties}>

              <p className="card-subtitle">{offer.cardSubtitle}</p>

              <h3 className="h3 card-title">
                {offer.cardTitles.title1} <span className="span">{offer.cardTitles.title2}</span>
              </h3>
              <button className='btn'>Read More</button>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default Offers