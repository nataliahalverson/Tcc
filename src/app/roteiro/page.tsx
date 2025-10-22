import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Roteiro — Viagem de Formatura',
  description: 'Confira o roteiro detalhado de cada dia da viagem.'
}

export default function RoteiroPage() {
  const roteiros = [
    {
      id: 1,
      destino: 'Porto Seguro',
      dias: [
        { dia: 1, descricao: 'Chegada e passeio nas praias' },
        { dia: 2, descricao: 'Festa temática com a turma' },
        { dia: 3, descricao: 'Passeio cultural e muito mais!' }
      ]
    },
    {
      id: 2,
      destino: 'Florianópolis',
      dias: [
        { dia: 1, descricao: 'Chegada e descanso nas praias' },
        { dia: 2, descricao: 'Festa à noite e passeio de barco' },
        { dia: 3, descricao: 'Passeio pela cidade e visita às principais atrações' }
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Roteiro de Viagem</h1>
          <p>Confira os detalhes dos dias incríveis que preparamos para você em cada destino!</p>
        </section>

        <section className={styles.roteirosGrid}>
          {roteiros.map((roteiro) => (
            <article key={roteiro.id} className={styles.roteiroCard}>
              <h2>{roteiro.destino}</h2>
              
              <div className={styles.diasList}>
                {roteiro.dias.map((dia, idx) => (
                  <div key={idx} className={styles.diaItem}>
                    <div className={styles.diaBadge}>Dia {dia.dia}</div>
                    <p className={styles.descricao}>{dia.descricao}</p>
                  </div>
                ))}
              </div>

              <Link href="/pacotes" className={styles.btnPacote}>
                Ver Pacote
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
