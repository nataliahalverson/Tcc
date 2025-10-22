import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Form } from '@/components/Form'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Registro — Viagem de Formatura',
  description: 'Crie sua conta na FORMA+'
}

export default function RegistroPage() {
  const handleRegister = async (data: Record<string, string>) => {
    console.log('Register data:', data)
    // Aqui você pode integrar com sua API de registro
    // await fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1>Crie sua Conta</h1>
          <p className={styles.subtitle}>Registre-se para começar a planejar sua viagem</p>

          <Form
            fields={[
              {
                id: 'name',
                label: 'Nome',
                type: 'text',
                placeholder: 'Seu nome completo',
                required: true
              },
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
                placeholder: 'Crie uma senha segura',
                required: true
              },
              {
                id: 'confirmPassword',
                label: 'Confirmar Senha',
                type: 'password',
                placeholder: 'Repita sua senha',
                required: true
              }
            ]}
            onSubmit={handleRegister}
            submitLabel="Cadastrar"
          />

          <p className={styles.link}>
            Já tem uma conta? <Link href="/login">Faça login</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
