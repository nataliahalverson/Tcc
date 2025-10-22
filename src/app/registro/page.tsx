import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { UserPlus, Mail, Lock, User } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Registro — Viagem de Formatura',
  description: 'Crie sua conta na FORMA+',
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function RegistroPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    }
    console.log('Register data:', data)
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-md mx-auto px-4">
          <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent-100 rounded-lg">
                  <UserPlus className="text-accent-600" size={32} />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2 text-slate-900">Crie sua Conta</h1>
              <p className="text-slate-600">Junte-se a FORMA+ e comece sua jornada</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card border>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-slate-400" size={20} />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

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
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                      Senha
                    </label>
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

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                      Confirmar Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 text-slate-400" size={20} />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth className="mt-8">
                    Criar Conta
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-6">
              <p className="text-slate-600">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Faça login
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
