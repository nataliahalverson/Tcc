import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>FORMA+</h1>
          <p className={styles.tagline}>Sua melhor viagem de formatura começa aqui</p>
          <Link href="/inicio" className={styles.ctaButton}>
            Começar Agora
          </Link>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>🏖️ Destinos Incríveis</h3>
            <p>Porto Seguro e Florianópolis à sua espera</p>
          </div>
          <div className={styles.feature}>
            <h3>🎉 Pacotes Completos</h3>
            <p>Transporte, hospedagem e passeios inclusos</p>
          </div>
          <div className={styles.feature}>
            <h3>👥 Experiências Memoráveis</h3>
            <p>Viva momentos incríveis com sua turma</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
