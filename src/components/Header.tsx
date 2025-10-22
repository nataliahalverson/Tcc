'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/inicio', label: 'Início' },
    { href: '/pacotes', label: 'Pacotes' },
    { href: '/roteiro', label: 'Roteiro' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F+</span>
            </div>
            <span className="text-xl font-bold text-slate-900 hidden sm:inline">FORMA+</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-700 font-medium hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" size="md">
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="primary" size="md">
              <Link href="/registro">Registrar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 animate-slideDown">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-slate-700 font-medium hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="md" fullWidth>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="primary" size="md" fullWidth>
                  <Link href="/registro">Registrar</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
