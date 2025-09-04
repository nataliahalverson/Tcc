import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Login(){
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="mt-2">Área de login (mock)</p>
      </main>
      <Footer />
    </div>
  )
}
