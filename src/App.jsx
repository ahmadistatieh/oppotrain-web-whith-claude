import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrowseRange from './components/BrowseRange'
import ProductsSection from './components/ProductsSection'
import InspirationSection from './components/InspirationSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrowseRange />
        <ProductsSection />
        <InspirationSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}
