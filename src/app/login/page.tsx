import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Form } from '@/components/Form'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Login — Viagem de Formatura',
  description: 'Acesse sua conta na FORMA+'
}

export default function LoginPage() {
  const handleLogin = async (data: Record<string, string>) => {
    console.log('Login data:', data)
    // Aqui você pode integrar com sua API de autenticação
    // await fetch('/api/login', { method: 'POST', body: JSON.stringify(data) })
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1>Faça Login</h1>
          <p className={styles.subtitle}>Entre em sua conta para acessar seus pacotes</p>

          <Form
            fields={[
              {
                id: 'email',
                label: 'Email',
                type: 'email',
                placeholder: 'seu@email.com',
                required: true
              },
              {
                id: 'password',
                label: 'Senha',
                type: 'password',
                placeholder: 'Sua senha',
                required: true
              }
            ]}
            onSubmit={handleLogin}
            submitLabel="Entrar"
          />

          <p className={styles.link}>
            Ainda não tem uma conta? <Link href="/registro">Cadastre-se</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
