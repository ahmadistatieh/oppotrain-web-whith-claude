import { useState, useEffect } from 'react'
import { navLinks } from '../../data/navLinks'
import { AccountIcon, SearchIcon, HeartIcon, CartIcon, MenuIcon } from '../../utils/icons'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#" className="logo">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">Furniro</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-icons">
          <button aria-label="Account"><AccountIcon /></button>
          <button aria-label="Search"><SearchIcon /></button>
          <button aria-label="Wishlist"><HeartIcon /></button>
          <button aria-label="Cart"><CartIcon /></button>
          <button
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
