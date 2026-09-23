import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ currentPath }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Shilma Puspita home" onClick={() => setOpen(false)}>
        <span className="brand-mark">SP</span>
        <span>shilma puspita</span>
      </a>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        <span />
        <span />
      </button>
      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} className={currentPath === link.href ? 'active' : ''} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-status" href="/contact">Let&apos;s talk <span>↗</span></a>
    </header>
  )
}
