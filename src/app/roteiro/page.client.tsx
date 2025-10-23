'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import StepIndicator from '@/components/StepIndicator'
import Main from '@/components/Main'
import styles from './page.module.css'
import { rotaPacote } from '@/lib/links'

export default function RoteiroPageClient() {
  const roteiros = [
    {
      id: 1,
      destino: 'Porto Seguro',
      dias: [
        { dia: 1, descricao: 'Chegada e passeio nas praias' },
        { dia: 2, descricao: 'Festa temática com a turma' },
        { dia: 3, descricao: 'Passeio cultural e muito mais!' },
      ],
    },
    {
      id: 2,
      destino: 'Florianópolis',
      dias: [
        { dia: 1, descricao: 'Chegada e descanso nas praias' },
        { dia: 2, descricao: 'Festa à noite e passeio de barco' },
        { dia: 3, descricao: 'Passeio pela cidade e visita às principais atrações' },
      ],
    },
  ]

  return (
    <>
      <Header />
      <div className="border-b border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Pacotes', href: rotaPacote() },
              { label: 'Roteiro' },
            ]}
          />
        </div>
      </div>
      <Main>
        <div className={styles.stepIndicator}>
          <StepIndicator
            steps={[
              {
                label: 'Criar conta',
                status: 'complete',
                href: '/registro',
              },
              {
                label: 'Escolher pacotes',
                status: 'complete',
                href: rotaPacote(),
              },
              {
                label: 'Confirmar roteiro',
                status: 'current',
              },
            ]}
          />
        </div>
        <section className={styles.intro}>
          <h1>Roteiro de Viagem</h1>
          <p>Confira os detalhes dos dias incríveis que preparamos para você em cada destino!</p>
        </section>

        <section className={styles.roteirosGrid}>
          {roteiros.map((roteiro) => (
            <article key={roteiro.id} className={styles.roteiroCard}>
              <h2>{roteiro.destino}</h2>

              <div className={styles.diasList}>
                {roteiro.dias.map((dia) => (
                  <div key={dia.dia} className={styles.diaItem}>
                    <div className={styles.diaBadge}>Dia {dia.dia}</div>
                    <p className={styles.descricao}>{dia.descricao}</p>
                  </div>
                ))}
              </div>

              <Link href={rotaPacote()} className={`${styles.btnPacote} focus-ring`}>
                Ver Pacote
              </Link>
            </article>
          ))}
        </section>
      </Main>
      <Footer />
    </>
  )
}
