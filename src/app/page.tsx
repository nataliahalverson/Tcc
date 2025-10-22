'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, MapPin, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Card from '@/components/Card'

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

export default function HomePage() {
  const features = [
    {
      icon: MapPin,
      title: 'Destinos Incríveis',
      description: 'Porto Seguro e Florianópolis à sua espera',
    },
    {
      icon: Zap,
      title: 'Pacotes Completos',
      description: 'Transporte, hospedagem e passeios inclusos',
    },
    {
      icon: Users,
      title: 'Experiências Memoráveis',
      description: 'Viva momentos incríveis com sua turma',
    },
    {
      icon: Heart,
      title: 'Melhor Preço Garantido',
      description: 'Qualidade premium com o melhor custo-benefício',
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32 text-white">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32 -mb-32" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Sua Melhor Viagem de Formatura Começa Aqui
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Crie memórias inesquecíveis com FORMA+. Pacotes completos para Porto Seguro e Florianópolis.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-slate-100 font-bold">
                  <Link href="/inicio" className="flex items-center gap-2 w-full">
                    Explorar Destinos <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/pacotes">Ver Pacotes</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold">2+</div>
                  <div className="text-white/80">Destinos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">1000+</div>
                  <div className="text-white/80">Clientes Felizes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">5⭐</div>
                  <div className="text-white/80">Avaliação</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gradient-to-br from-slate-50 to-white">
          <div className="container-wide">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
                Por Que Escolher FORMA+?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto">
                Oferecemos as melhores experiências com qualidade, segurança e preços imbatíveis.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card interactive gradient border>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-primary-100 rounded-lg">
                          <Icon className="text-primary-600" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                          <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary-600 to-accent-600 text-white">
          <div className="container-wide text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para uma Aventura Inesquecível?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Inicie seu cadastro agora e receba ofertas exclusivas para os melhores pacotes.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-slate-100">
                  <Link href="/registro">Criar Conta Agora</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
