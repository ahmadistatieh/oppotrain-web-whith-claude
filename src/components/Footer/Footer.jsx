import { useState } from 'react'
import { footerAddress, footerColumns } from '../../data/footerLinks'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 2000)
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <h3>Funiro.</h3>
          <p>
            {footerAddress.map((line, i) => (
              <span key={i}>
                {line}
                {i < footerAddress.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {footerColumns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col">
          <h4>Newsletter</h4>
          <form className="newsletter" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">{subscribed ? 'THANKS!' : 'SUBSCRIBE'}</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>2023 furniro. All rights reserved</p>
      </div>
    </footer>
  )
}
