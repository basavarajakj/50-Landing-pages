import ProcessBanner from '../assets/process-banner.png';
import ProcessIcon1 from '../assets/process-icon-1.png';
import ProcessIcon2 from '../assets/process-icon-2.png';
import ProcessIcon3 from '../assets/process-icon-3.png';
import ProcessIcon4 from '../assets/process-icon-4.png';

const ProcessItems = [
  {
    id: 1,
    processIcon:  ProcessIcon1,
    processTitle: 'Ideation',
    processDesc: "Use this section to describe your company and the products you offer. You could share your company’s"
  },
  {
    id: 2,
    processIcon:  ProcessIcon2,
    processTitle: 'Budget',
    processDesc: "Use this section to describe your company and the products you offer. You could share your company’s"
  },
  {
    id: 3,
    processIcon:  ProcessIcon3,
    processTitle: 'Performance',
    processDesc: "Use this section to describe your company and the products you offer. You could share your company’s"
  },
  {
    id: 4,
    processIcon:  ProcessIcon4,
    processTitle: 'Speed',
    processDesc: "Use this section to describe your company and the products you offer. You could share your company’s"
  },
]

const Process = () => {
  return (
    <section className="section process text-center" aria-labelledby="process-label">
      <div className="container">

        <h2 className="h2 title section-title">How It Works</h2>

        <p className="section-text">
          Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. 
        </p>

        <div className="wrapper">

          <figure className="process-banner">
            <img src={ProcessBanner} alt="process banner" loading='lazy' width="734" height="854" className="w-100" />
          </figure>
          
          <ul className="grid-list">

            {ProcessItems.map(item => (
              <li key={item.id} className="process-item">
                <img src={item.processIcon} alt={item.processTitle} width="60" height="60" loading='lazy' className='item-icon' />

                <h3 className="h3 title item-title">{item.processTitle}</h3>

                <p className="item-text">{item.processDesc}</p>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </section>
  )
}

export default Process