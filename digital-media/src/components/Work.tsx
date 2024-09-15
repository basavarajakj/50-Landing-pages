import type { CSSProperties } from "react"

import Work1 from '../assets/work-1.jpg';
import Work2 from '../assets/work-2.jpg';
import Work3 from '../assets/work-3.jpg';

const workList = [
  {
    id: 1,
    workImg: Work1,
    workTitle: "Product Design",
    workDesc: "Use this section to describe your"
  },
  {
    id: 2,
    workImg: Work2,
    workTitle: "App Development",
    workDesc: "Use this section to describe your"
  },
  {
    id: 3,
    workImg: Work3,
    workTitle: "Virtual Reality",
    workDesc: "Use this section to describe your"
  },
]

const Work = () => {
  return (
    <section className="section works text-center">
      <div className="container">

        <h2 className="h2 title section-title">Our Work</h2>

        <p className="section-te">
          Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. 
        </p>

        <ul className="grid-list">

          {workList.map(work => (
            <li key={work.id}>
              <div className="work-card">
  
                <figure className="card-banner img-holder" style={{ "--width": 580, "--height": 620} as CSSProperties}>
                  <img src={work.workImg} alt={work.workTitle} width="580" height="620" loading="lazy" className="img-cover" />
                </figure>

                <h3 className="h3 title">
                  <a href="#" className="card-title">{work.workTitle}</a>
                </h3>

                <p className="card-text">{work.workDesc}</p>
  
              </div>
            </li>
          ))}

        </ul>

        <a href="#" className="btn btn-primary">See more</a>

      </div>
    </section>
  )
}

export default Work