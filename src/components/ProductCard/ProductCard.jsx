import { ShareIcon, CompareIcon, HeartIcon } from '../../utils/icons'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { name, description, price, oldPrice, badge, image } = product

  return (
    <article className="card">
      <div className="card-media">
        {badge && (
          <span className={`badge ${badge.type === 'new' ? 'green' : 'red'}`}>
            {badge.text}
          </span>
        )}
        <img src={image} alt={name} />
        <div className="card-overlay">
          <button className="overlay-cart">Add to cart</button>
          <div className="overlay-links">
            <button><ShareIcon /> Share</button>
            <button><CompareIcon /> Compare</button>
            <button><HeartIcon width="16" height="16" /> Like</button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="desc">{description}</p>
        <div className="card-price">
          <span className="now">{price}</span>
          {oldPrice && <span className="was">{oldPrice}</span>}
        </div>
      </div>
    </article>
  )
}
