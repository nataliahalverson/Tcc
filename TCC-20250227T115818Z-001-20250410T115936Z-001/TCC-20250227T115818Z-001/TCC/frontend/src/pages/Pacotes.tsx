import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pacotes(){
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Pacotes</h2>
        <p className="mt-2">Lista de pacotes (mocked)</p>
      </main>
      <Footer />
    </div>
  )
}
