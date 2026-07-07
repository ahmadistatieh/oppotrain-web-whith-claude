import { browseRange } from '../../data/browseRange'
import './BrowseRange.css'

export default function BrowseRange() {
  return (
    <section className="range" id="range">
      <div className="section-head">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="range-grid">
        {browseRange.map((item) => (
          <figure className="range-item" key={item.title}>
            <div className="range-img-wrap">
              <img src={item.image} alt={item.title} />
            </div>
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
