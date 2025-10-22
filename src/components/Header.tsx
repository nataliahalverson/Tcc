'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>FORMA+</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/inicio">Início</Link></li>
            <li><Link href="/pacotes">Pacotes</Link></li>
            <li><Link href="/roteiro">Roteiro</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
