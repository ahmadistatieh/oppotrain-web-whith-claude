import { useState } from 'react'
import { inspirationSlides } from '../../data/inspirationSlides'
import { ArrowRightIcon } from '../../utils/icons'
import './InspirationSection.css'

export default function InspirationSection() {
  const [active, setActive] = useState(0)
  const next = () => setActive((a) => (a + 1) % inspirationSlides.length)
  const current = inspirationSlides[active]

  return (
    <section className="inspiration">
      <div className="insp-text">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
        <a href="#" className="btn btn-solid">Explore More</a>
      </div>

      <div className="insp-gallery">
        <div className="insp-featured">
          <img src={current.image} alt={current.name} />
          <div className="insp-overlay">
            <p className="insp-meta">
              <span>{current.index}</span> — {current.room}
            </p>
            <p className="insp-name">{current.name}</p>
          </div>
          <button className="insp-arrow" aria-label="Next room" onClick={next}>
            <ArrowRightIcon />
          </button>
        </div>

        <div className="insp-side">
          {inspirationSlides.map((slide, i) => (
            <button
              key={slide.index}
              className={`insp-thumb ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${slide.name}`}
            >
              <img src={slide.image} alt={slide.name} />
            </button>
          ))}
        </div>

        <div className="insp-dots">
          {inspirationSlides.map((slide, i) => (
            <button
              key={slide.index}
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
