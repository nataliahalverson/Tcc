'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LogIn, Mail, Lock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Card from '@/components/Card'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    console.log('Login data:', data)
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-md mx-auto px-4">
          <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 rounded-lg">
                  <LogIn className="text-primary-600" size={32} />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2 text-slate-900">Bem-vindo de Volta!</h1>
              <p className="text-slate-600">Acesse sua conta para gerenciar sua viagem</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card border>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-slate-400" size={20} />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="password" className="text-sm font-medium text-slate-700">
                        Senha
                      </label>
                      <Link href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Esqueceu?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 text-slate-400" size={20} />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth className="mt-8">
                    Entrar
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-6">
              <p className="text-slate-600">
                Não tem uma conta?{' '}
                <Link href="/registro" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Cadastre-se
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
