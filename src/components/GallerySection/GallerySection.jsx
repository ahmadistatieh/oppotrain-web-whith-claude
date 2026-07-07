import { galleryImages } from '../../data/galleryImages'
import './GallerySection.css'

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery-head">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((src, i) => (
          <div className={`g g${i + 1}`} key={i}>
            <img src={src} alt={`Furniro setup ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
