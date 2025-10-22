import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Pacotes — Viagem de Formatura',
  description: 'Conheça nossos pacotes disponíveis para Porto Seguro e Florianópolis.'
}

export default function PacotesPage() {
  const pacotes = [
    {
      id: 1,
      nome: 'Porto Seguro',
      duracao: '10 dias',
      itens: [
        'Transporte aéreo incluso',
        'Hospedagem com café da manhã',
        '3 festas temáticas exclusivas',
        'Passeios culturais e praia'
      ]
    },
    {
      id: 2,
      nome: 'Florianópolis',
      duracao: '7 dias',
      itens: [
        'Transporte rodoviário incluso',
        '2 refeições por dia',
        'Passeio fotográfico e trilhas',
        'Festas universitárias'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.header}>
          <h1>Pacotes Disponíveis</h1>
          <p>Escolha o pacote perfeito para sua viagem de formatura!</p>
        </section>

        <section className={styles.pacotesGrid}>
          {pacotes.map((pacote) => (
            <article key={pacote.id} className={styles.pacoteCard}>
              <h2>{pacote.nome}</h2>
              <p className={styles.duracao}>Duração: <strong>{pacote.duracao}</strong></p>
              
              <ul className={styles.itemsList}>
                {pacote.itens.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>

              <Link href="/roteiro" className={styles.btnRoteiro}>
                Ver Roteiro
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
