import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'FORMA+ — Viagem de Formatura',
  description: 'Escolha o melhor destino para sua viagem de formatura. Pacotes incríveis para Porto Seguro e Florianópolis.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
