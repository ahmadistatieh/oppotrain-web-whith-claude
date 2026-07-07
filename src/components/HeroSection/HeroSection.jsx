import hero from '../../assets/hero.jpg'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <img src={hero} alt="Modern living room" className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-card">
          <p className="hero-label">New Arrival</p>
          <h1 className="hero-title">
            Discover Our <span>New</span> Collection
          </h1>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <a href="#products" className="btn btn-solid">BUY NOW</a>
        </div>
      </div>
    </section>
  )
}
