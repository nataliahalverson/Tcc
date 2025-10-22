import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { seed, getPackages, createPackage, deletePackage, Package } from '../mockApi'

export default function Pacotes(){
  const [packages, setPackages] = React.useState<Package[]>([])
  const [title, setTitle] = React.useState('')
  const [price, setPrice] = React.useState<number | ''>('')

  React.useEffect(()=>{ seed(); refresh() },[])
  function refresh(){ getPackages().then(items=> setPackages(items || [])) }

  async function onCreate(e: React.FormEvent){
    e.preventDefault()
    if(!title || !price) return
    await createPackage({ id: 'p'+Date.now(), title, price: Number(price) })
    setTitle(''); setPrice('')
    refresh()
  }

  async function onDelete(id: string){ await deletePackage(id); refresh() }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Pacotes</h2>

        <section className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <form onSubmit={onCreate} className="space-y-3 p-4 bg-white rounded shadow">
              <div>
                <label className="block text-sm font-medium">Título</label>
                <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Preço</label>
                <input type="number" value={price as any} onChange={e=>setPrice(e.target.value? Number(e.target.value): '')} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <button className="px-4 py-2 bg-sky-800 text-white rounded">Criar pacote</button>
              </div>
            </form>
          </div>

          <div>
            <div className="space-y-4">
              {packages.map(p=> (
                <div key={p.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-slate-600">R$ {p.price.toFixed(2)}</div>
                  </div>
                  <div>
                    <button onClick={()=> onDelete(p.id)} className="text-red-600">Excluir</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
