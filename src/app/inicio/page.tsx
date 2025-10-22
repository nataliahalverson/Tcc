import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Palmtree } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Button from '@/components/Button'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Início — Viagem de Formatura',
  description: 'Bem-vindo à FORMA+! Escolha o melhor destino para sua viagem de formatura.',
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

export default function InícioPage() {
  const carouselImages = [
    { src: '/placeholder-1.jpg', alt: 'Imagem de Florianópolis' },
    { src: '/placeholder-2.jpg', alt: 'Imagem do Beto Carrero' },
    { src: '/placeholder-3.jpg', alt: 'Imagem de Porto Seguro' },
    { src: '/placeholder-4.jpg', alt: 'Imagem da festa' },
  ]

  const destinos = [
    {
      nome: 'Porto Seguro',
      emoji: '🏝️',
      descricao: 'Conheça as praias paradisíacas de Porto Seguro e faça uma viagem inesquecível com sua turma!',
      destaques: ['Praias paradisíacas', 'Vida noturna vibrante', 'Atividades aquáticas'],
      dias: '10 dias',
    },
    {
      nome: 'Florianópolis',
      emoji: '🏄',
      descricao: 'Descubra as belezas de Florianópolis, com suas praias, festas e muito mais!',
      destaques: ['42 praias incríveis', 'Trilhas e aventura', 'Gastronomia local'],
      dias: '7 dias',
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Carousel Section */}
        <section className="py-8">
          <div className="container-wide">
            <motion.div initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-hard">
                <Carousel images={carouselImages} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
                Bem-vindo à Viagem de Formatura
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-slate-700 max-w-2xl mx-auto mb-8">
                Escolha o melhor destino para sua formatura! Temos pacotes incríveis para Porto Seguro e Florianópolis com
                tudo que você precisa para uma experiência inesquecível.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="primary" size="lg">
                  <Link href="/pacotes" className="flex items-center gap-2">
                    Veja os Pacotes <ArrowRight size={20} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="section">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4 text-center">
                Destinos Incríveis
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 text-center max-w-2xl mx-auto">
                Cada destino oferece uma experiência única e memorável. Confira os destaques de cada um!
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {destinos.map((destino, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card interactive gradient border className="overflow-hidden h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-6xl">{destino.emoji}</div>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold text-sm">
                        {destino.dias}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{destino.nome}</h3>
                    <p className="text-slate-600 mb-6">{destino.descricao}</p>

                    <div className="mb-6 pb-6 border-t border-slate-200 pt-6">
                      <h4 className="font-semibold text-slate-900 mb-4">Destaques:</h4>
                      <ul className="space-y-2">
                        {destino.destaques.map((destaque, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full" />
                            {destaque}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="primary" size="md" fullWidth>
                      <Link href="/pacotes">Saiba Mais</Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
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
                Por Que Escolher Nossos Destinos?
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Localizações Únicas</h3>
                  </div>
                  <p className="text-slate-600">
                    Paraísos naturais com praias de areia branca, água cristalina e cenários de tirar o fôlego.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent-100 rounded-lg">
                      <Users className="text-accent-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Turma Feliz</h3>
                  </div>
                  <p className="text-slate-600">Momentos inesquecíveis com sua turma, criando recordações que durarão a vida toda.</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card border>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-success-100 rounded-lg">
                      <Palmtree className="text-success-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Experiências Completas</h3>
                  </div>
                  <p className="text-slate-600">Tudo planejado para você: atividades, festas, gastronomia e diversão!</p>
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
