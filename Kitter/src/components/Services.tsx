import serviceImage from '../assets/service-image.png';

import serviceIcon1 from '../assets/service-icon-1.png';
import serviceIcon2 from '../assets/service-icon-2.png';
import serviceIcon3 from '../assets/service-icon-3.png';
import serviceIcon4 from '../assets/service-icon-4.png';

const SERVICES = [
  {
    id: 11,
    serviceIcon: serviceIcon1,
    title: "Free Same-Day Delivery",
    description: "Order by 2pm local time to get free delivery on orders $35+ today."
  },
  {
    id: 12,
    serviceIcon: serviceIcon2,
    title: "30 Day Return",
    description: "35% off your first order plus 5% off all future orders."
  },
  {
    id: 13,
    serviceIcon: serviceIcon3,
    title: "Security payment",
    description: "25% off your online order of $50+. Available at most locations."
  },
  {
    id: 14,
    serviceIcon: serviceIcon4,
    title: "24/7 Support",
    description: "Shop online to get orders over $35 shipped fast and free."
  },
]


const Services = () => {
  return (
    <section className="section service" id="shop" aria-label="services">
      <div className="container">

        <img src={serviceImage} width="122" height="136" loading="lazy" alt="" className="img"/>

        <h2 className="h2 section-title">
          <span className="span">What your pet needs,</span>when they need it.
        </h2>

        <ul className="grid-list">

          {SERVICES.map(service => (
            <li key={service.id} className="service-card">

              <figure className="card-icon">
                <img src={service.serviceIcon} width="70" height="70" loading='lazy' alt="service icon" />
              </figure>

              <h3 className="h3 card-title">{service.title}</h3>

              <p className="card-text">
                {service.description}
              </p>

            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}

export default Services