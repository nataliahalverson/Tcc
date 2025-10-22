'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star, Calendar, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'

export const metadata: Metadata = {
  title: 'Pacotes — Viagem de Formatura',
  description: 'Conheça nossos pacotes incríveis para Porto Seguro e Florianópolis.',
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function PacotesPage() {
  const pacotes = [
    {
      id: 1,
      nome: 'Porto Seguro',
      duracao: '10 dias',
      preco: 'A partir de R$ 3.500',
      destaque: true,
      avaliacao: 4.9,
      avaliacoes: 342,
      itens: [
        'Transporte aéreo incluso',
        'Hospedagem 5 noites com café da manhã',
        '3 festas temáticas exclusivas',
        'Passeios culturais e praia',
        'Seguro viagem incluído',
        'Guia turístico profissional',
      ],
      imagem: '🏝️',
    },
    {
      id: 2,
      nome: 'Florianópolis',
      duracao: '7 dias',
      preco: 'A partir de R$ 2.800',
      destaque: false,
      avaliacao: 4.8,
      avaliacoes: 198,
      itens: [
        'Transporte rodoviário incluso',
        'Hospedagem 6 noites com café da manhã',
        'Passeio fotográfico e trilhas',
        'Festas universitárias',
        '2 refeições por dia',
        'Atividades de aventura incluídas',
      ],
      imagem: '🏄',
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="section bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container-wide">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-4">
                Pacotes Incríveis
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-2xl mx-auto">
                Escolha o pacote perfeito para sua viagem de formatura. Todas as opções incluem experiências memoráveis.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {pacotes.map((pacote) => (
                <motion.div key={pacote.id} variants={fadeInUp}>
                  <Card
                    interactive
                    border
                    className={`relative overflow-hidden ${
                      pacote.destaque ? 'lg:transform lg:scale-105 lg:shadow-hard' : ''
                    }`}
                  >
                    {/* Badge Destaque */}
                    {pacote.destaque && (
                      <div className="absolute top-0 right-0 z-10">
                        <Badge variant="accent" className="rounded-none rounded-bl-lg">
                          ⭐ Mais Popular
                        </Badge>
                      </div>
                    )}

                    {/* Header do Pacote */}
                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <div className="text-6xl mb-4">{pacote.imagem}</div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">{pacote.nome}</h2>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.floor(pacote.avaliacao) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}
                            />
                          ))}
                          <span className="text-sm text-slate-600 ml-2">
                            {pacote.avaliacao} ({pacote.avaliacoes} avaliações)
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Calendar size={20} />
                        <span className="font-semibold">{pacote.duracao}</span>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <p className="text-4xl font-bold text-primary-600">{pacote.preco}</p>
                    </div>

                    {/* Itens */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-4">O que está incluído:</h3>
                      <ul className="space-y-3">
                        {pacote.itens.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="text-success-500 flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-6 border-t border-slate-200">
                      <Button variant="primary" size="md" fullWidth>
                        <Link href="/roteiro">Ver Roteiro</Link>
                      </Button>
                      <Button variant="secondary" size="md" fullWidth>
                        <Link href="/registro">Reservar Agora</Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section bg-slate-50">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
                Por Que Nos Escolher?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
                  <p className="text-slate-600">Seguro viagem incluído em todos os pacotes para total tranquilidade.</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-2">Melhor Preço</h3>
                  <p className="text-slate-600">Garanta os melhores preços do mercado com nossas ofertas exclusivas.</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
                  <p className="text-slate-600">Nossa equipe sempre disponível para ajudar durante sua viagem.</p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
