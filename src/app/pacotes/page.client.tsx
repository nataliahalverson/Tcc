'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star, Calendar, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import StepIndicator from '@/components/StepIndicator'
import Breadcrumbs from '@/components/Breadcrumbs'
import Main from '@/components/Main'
import { reservaHref, rotaPacote } from '@/lib/links'

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

export default function PacotesPageClient() {
  const pacotes = [
    {
      id: 1,
      nome: 'Porto Seguro',
      slug: 'porto-seguro-3d2n',
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
      slug: 'porto-seguro-3d2n',
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

  const steps = [
    {
      label: 'Criar conta',
      description: 'Acesse sua área personalizada',
      href: '/registro',
      status: 'complete' as const,
    },
    {
      label: 'Escolher pacotes',
      description: 'Compare destinos e valores',
      href: rotaPacote(),
      status: 'current' as const,
    },
    {
      label: 'Confirmar roteiro',
      description: 'Ajuste o cronograma com a turma',
      href: '/roteiro',
      status: 'upcoming' as const,
    },
  ]

  return (
    <>
      <Header />
      <div className="border-b border-slate-200 bg-slate-50/80">
        <div className="container-wide px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Pacotes' },
            ]}
          />
        </div>
      </div>
      <Main>
        <section className="section bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
          <div className="container-wide">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center">
              <motion.h1 variants={fadeInUp} className="mb-4 text-5xl font-bold md:text-6xl">
                Pacotes Incríveis
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto text-xl text-slate-300">
                Escolha o pacote perfeito para sua viagem de formatura. Todas as opções incluem experiências memoráveis.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-6 backdrop-blur-sm">
                  <StepIndicator steps={steps} colorScheme="dark" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              {pacotes.map((pacote) => {
                const detalhesHref = rotaPacote(pacote.slug)
                const reservaLink = reservaHref(pacote.slug)

                return (
                  <motion.div key={pacote.id} variants={fadeInUp}>
                    <Card
                      interactive
                      border
                      className={`relative overflow-hidden ${
                        pacote.destaque ? 'lg:transform lg:scale-105 lg:shadow-hard' : ''
                      }`}
                    >
                      {pacote.destaque && (
                        <div className="absolute right-0 top-0 z-10">
                          <Badge variant="accent" className="rounded-bl-lg rounded-none">
                            ⭐ Mais Popular
                          </Badge>
                        </div>
                      )}

                      <div className="border-b border-slate-200 pb-6">
                        <div className="mb-4 text-6xl">{pacote.imagem}</div>
                        <h2 className="mb-2 text-3xl font-bold text-slate-900">{pacote.nome}</h2>
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < Math.floor(pacote.avaliacao) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}
                              />
                            ))}
                            <span className="ml-2 text-sm text-slate-600">
                              {pacote.avaliacao} ({pacote.avaliacoes} avaliações)
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <Calendar size={20} />
                          <span className="font-semibold">{pacote.duracao}</span>
                        </div>
                      </div>

                      <div className="border-b border-slate-200 pb-6">
                        <p className="text-4xl font-bold text-primary-600">{pacote.preco}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="mb-4 font-semibold text-slate-900">O que está incluído:</h3>
                        <ul className="space-y-3">
                          {pacote.itens.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="mt-0.5 flex-shrink-0 text-success-500" size={20} />
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 border-t border-slate-200 pt-6">
                        <Link href={detalhesHref} className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-5 py-2.5 font-semibold text-white shadow-lg transition-all duration-200 hover:from-primary-500 hover:to-accent-500 hover:shadow-xl active:scale-95">
                          Ver roteiro completo
                        </Link>
                        <Link href={reservaLink} className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-200 bg-white px-5 py-2.5 font-semibold text-primary-700 shadow-sm transition-all duration-200 hover:bg-primary-50 active:scale-95">
                          Reservar agora
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        <section className="section bg-slate-50">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12 text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold">
                Por Que Nos Escolher?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="mb-4 text-4xl">🛡️</div>
                  <h3 className="mb-2 text-xl font-semibold">Segurança Garantida</h3>
                  <p className="text-slate-600">Seguro viagem incluído em todos os pacotes para total tranquilidade.</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="mb-4 text-4xl">💰</div>
                  <h3 className="mb-2 text-xl font-semibold">Melhor Preço</h3>
                  <p className="text-slate-600">Garanta os melhores preços do mercado com nossas ofertas exclusivas.</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="mb-4 text-4xl">👥</div>
                  <h3 className="mb-2 text-xl font-semibold">Suporte 24/7</h3>
                  <p className="text-slate-600">Nossa equipe sempre disponível para ajudar durante sua viagem.</p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}
