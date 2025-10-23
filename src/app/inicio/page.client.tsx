'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Palmtree } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Breadcrumbs from '@/components/Breadcrumbs'
import Main from '@/components/Main'

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

export default function InícioPageClient() {
  const shouldReduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const localFadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6 },
  }

  const localStagger = {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  }
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      alt: 'Calçadão entre palmeiras conduzindo até uma praia de mar azul e céu claro.',
      blurDataURL:
        'data:image/svg+xml;base64,59bPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiA5Jz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB4Mj0nMScgeTE9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAlJyBzdG9wLWNvbG9yPScjMGVhNWU5Jy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjMDIyYzQzJy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=',
      credit: {
        name: 'Autor no Unsplash',
        url: 'https://unsplash.com/photos/b586d89ba3ee',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1529429617124-aee94ff1c57e?auto=format&fit=crop&w=1600&q=80',
      alt: 'Roda gigante iluminada ao entardecer em parque de diversões.',
      blurDataURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiA5Jz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB4Mj0nMScgeTE9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAlJyBzdG9wLWNvbG9yPScjZjU5ZTBiJy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjYjkxYzFjJy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=',
      credit: {
        name: 'Autor no Unsplash',
        url: 'https://unsplash.com/photos/aee94ff1c57e',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      alt: 'Onda azul intensa quebrando na praia sob o pôr do sol dourado.',
      blurDataURL:
        'data:image/svg+xml;base64,59bPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiA5Jz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB4Mj0nMScgeTE9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAlJyBzdG9wLWNvbG9yPScjMWUzYThhJy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjMGYxNzJhJy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=',
      credit: {
        name: 'Autor no Unsplash',
        url: 'https://unsplash.com/photos/b723cf961d3e',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
      alt: 'Grupo animado dançando sob luzes coloridas em festa noturna.',
      blurDataURL:
        'data:image/svg+xml;base64,59bPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiA5Jz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB4Mj0nMScgeTE9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAlJyBzdG9wLWNvbG9yPScjZjQ3MmI2Jy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjYzAyNmQzJy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=',
      credit: {
        name: 'Autor no Unsplash',
        url: 'https://unsplash.com/photos/7a46d19cd819',
      },
    },
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
      <div className="bg-slate-50/80 border-b border-slate-200">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Início' },
            ]}
          />
        </div>
      </div>
      <Main aria-labelledby="intro-title">
        <section id="carousel" className="py-8" aria-label="Galeria de imagens dos destinos">
          <div className="container-wide">
            <motion.div initial="initial" animate="animate" variants={localStagger}>
              <motion.div variants={localFadeInUp} className="overflow-hidden rounded-2xl shadow-hard">
                <Carousel images={carouselImages} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="intro" className="section bg-gradient-to-br from-primary-50 to-accent-50" aria-labelledby="intro-title">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={localStagger}
              className="text-center"
            >
              <motion.h1 id="intro-title" variants={localFadeInUp} className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl">
                Bem-vindo à Viagem de Formatura
              </motion.h1>
              <motion.p variants={localFadeInUp} className="mx-auto mb-8 max-w-2xl text-xl text-slate-700">
                Escolha o melhor destino para sua formatura! Temos pacotes incríveis para Porto Seguro e Florianópolis com tudo que você precisa para uma experiência inesquecível.
              </motion.p>
              <motion.div variants={localFadeInUp}>
                <Button variant="primary" size="lg">
                  <Link href="/pacotes" aria-label="Ver pacotes disponíveis" className="focus-ring flex items-center gap-2">
                    Veja os Pacotes <ArrowRight size={20} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="destinos" className="section" aria-labelledby="destinos-title">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={localStagger}
              className="mb-12"
            >
              <motion.h2 id="destinos-title" variants={localFadeInUp} className="mb-4 text-center text-4xl font-bold">
                Destinos Incríveis
              </motion.h2>
              <motion.p variants={localFadeInUp} className="mx-auto text-center text-slate-600">
                Cada destino oferece uma experiência única e memorável. Confira os destaques de cada um!
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={localStagger}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              {destinos.map((destino) => (
                <motion.div key={destino.nome} variants={localFadeInUp}>
                  <Card interactive gradient border className="h-full overflow-hidden">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="text-6xl">{destino.emoji}</div>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                        {destino.dias}
                      </span>
                    </div>

                    <h3 className="mb-2 text-3xl font-bold text-slate-900">{destino.nome}</h3>
                    <p className="mb-6 text-slate-600">{destino.descricao}</p>

                    <div className="mb-6 border-t border-slate-200 pt-6">
                      <h4 className="mb-4 font-semibold text-slate-900">Destaques:</h4>
                      <ul className="space-y-2">
                        {destino.destaques.map((destaque) => (
                          <li key={destaque} className="flex items-center gap-2 text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-primary-500" />
                            {destaque}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="primary" size="md" fullWidth>
                      <Link href="/pacotes" aria-label={`Saiba mais sobre ${destino.nome}`} className="focus-ring block w-full">
                        Saiba Mais
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="porque" className="section bg-slate-50" aria-labelledby="porque-title-inicio">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={localStagger}
              className="mb-12 text-center"
            >
              <motion.h2 id="porque-title-inicio" variants={localFadeInUp} className="mb-4 text-4xl font-bold">
                Por Que Escolher Nossos Destinos?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={localStagger}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              <motion.div variants={localFadeInUp}>
                <Card border>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary-100 p-3">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Localizações Únicas</h3>
                  </div>
                  <p className="text-slate-600">
                    Paraísos naturais com praias de areia branca, água cristalina e cenários de tirar o fôlego.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={localFadeInUp}>
                <Card border>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-accent-100 p-3">
                      <Users className="text-accent-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Turma Feliz</h3>
                  </div>
                  <p className="text-slate-600">
                    Momentos inesquecíveis com sua turma, criando recordações que durarão a vida toda.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={localFadeInUp}>
                <Card border>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-success-100 p-3">
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
      </Main>
      <Footer />
    </>
  )
}
