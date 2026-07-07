import { useState } from 'react'
import ProductCard from '../ProductCard'
import { products } from '../../data/products'
import './ProductsSection.css'

export default function ProductsSection() {
  const [showAll, setShowAll] = useState(false)
  // Show all 8 initially; "Show More" reveals a duplicated set as a demo.
  const visible = showAll ? [...products, ...products.map((p) => ({ ...p, id: p.id + 100 }))] : products

  return (
    <section className="products" id="products">
      <h2 className="products-title">Our Products</h2>
      <div className="product-grid">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="show-more-wrap">
        <button className="btn btn-outline" onClick={() => setShowAll((s) => !s)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  )
}
