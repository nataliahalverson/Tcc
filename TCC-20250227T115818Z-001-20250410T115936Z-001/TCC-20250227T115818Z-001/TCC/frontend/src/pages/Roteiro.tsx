import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Roteiro(){
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Roteiro</h2>
        <p className="mt-2">Informações do roteiro</p>
      </main>
      <Footer />
    </div>
  )
}
