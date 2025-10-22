import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Início — Viagem de Formatura',
  description: 'Bem-vindo à FORMA+! Escolha o melhor destino para sua viagem de formatura.'
}

export default function InícioPage() {
  const carouselImages = [
    { src: '/placeholder-1.jpg', alt: 'Imagem de Florianópolis' },
    { src: '/placeholder-2.jpg', alt: 'Imagem do Beto Carrero' },
    { src: '/placeholder-3.jpg', alt: 'Imagem de Porto Seguro' },
    { src: '/placeholder-4.jpg', alt: 'Imagem da festa' }
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Carousel images={carouselImages} />

        <section className={styles.intro}>
          <h2>Bem-vindo à Viagem de Formatura</h2>
          <p>Escolha o melhor destino para a sua formatura! Temos pacotes incríveis para Porto Seguro e Florianópolis.</p>
          <Link href="/pacotes" className={styles.btnPrimary}>
            Veja os Pacotes
          </Link>
        </section>

        <section className={styles.destinos}>
          <div className={styles.destino}>
            <h4>Porto Seguro</h4>
            <p>Conheça as praias paradisíacas de Porto Seguro e faça uma viagem inesquecível com sua turma!</p>
            <Link href="/pacotes" className={styles.btnSecondary}>
              Saiba Mais
            </Link>
          </div>
          <div className={styles.destino}>
            <h4>Florianópolis</h4>
            <p>Descubra as belezas de Florianópolis, com suas praias, festas e muito mais!</p>
            <Link href="/pacotes" className={styles.btnSecondary}>
              Saiba Mais
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
