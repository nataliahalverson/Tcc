import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Form } from '@/components/Form'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contato — Viagem de Formatura',
  description: 'Entre em contato conosco para tirar suas dúvidas'
}

export default function ContatoPage() {
  const handleContact = async (data: Record<string, string>) => {
    console.log('Contact data:', data)
    // Aqui você pode integrar com sua API de envio de emails
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1>Entre em Contato</h1>
          <p className={styles.subtitle}>Preencha o formulário e retornaremos o mais breve possível</p>

          <div className={styles.content}>
            <div className={styles.formSection}>
              <h2>Envie uma mensagem</h2>
              <Form
                fields={[
                  {
                    id: 'nome',
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
                    id: 'assunto',
                    label: 'Assunto',
                    type: 'text',
                    placeholder: 'Assunto da mensagem',
                    required: true
                  },
                  {
                    id: 'mensagem',
                    label: 'Mensagem',
                    type: 'textarea',
                    placeholder: 'Sua mensagem aqui...',
                    required: true,
                    rows: 6
                  }
                ]}
                onSubmit={handleContact}
                submitLabel="Enviar Mensagem"
              />
            </div>

            <div className={styles.infoSection}>
              <h2>Informações de Contato</h2>
              <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>suporte@viagemdeformatura.com.br</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Telefone</h3>
                <p>(11) 1234-5678</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 10h às 14h</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
