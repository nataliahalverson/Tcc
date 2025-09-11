import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { seed, getPackages, Package } from '../mockApi'

const slides = [
  { src: '/imagens/imagem1.jpg', alt: 'Praia' },
  { src: '/imagens/imagem2.jpeg', alt: 'Festa' },
  { src: '/imagens/imagem3.jpg', alt: 'Paisagem' },
]

export default function Home(){
  const [packages, setPackages] = React.useState<Package[]>([])
  React.useEffect(()=>{ seed(); getPackages().then(setPackages) },[])

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Carousel slides={slides} />

        <section className="text-center py-8">
          <h2 className="text-3xl font-bold text-sky-800">Bem-vindo à Viagem de Formatura</h2>
          <p className="mt-2 text-slate-600">Escolha o melhor destino para a sua formatura!</p>
          <a href="#/pacotes" className="inline-block mt-4 px-6 py-3 bg-sky-800 text-white rounded">Veja os Pacotes</a>
        </section>

        <section className="grid md:grid-cols-2 gap-6 p-6">
          {packages.map(p=> (
            <article key={p.id} className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-600">{p.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-sky-800">R$ {p.price.toFixed(2)}</span>
                <a href="#/pacotes" className="text-sky-700 hover:underline">Saiba mais</a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
