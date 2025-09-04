export type Package = { id: string; title: string; description?: string; price: number }

const LS_KEY = 'tcc:packages'

function read(): Package[] {
  try{ return JSON.parse(localStorage.getItem(LS_KEY) || 'null') || [] }catch{ return [] }
}

function write(items: Package[]){ localStorage.setItem(LS_KEY, JSON.stringify(items)) }

export function seed(){
  if(read().length===0){
    write([
      { id: 'p1', title: 'Porto Seguro — 5 dias', description: 'Pacote para turma', price: 1299.00 },
      { id: 'p2', title: 'Florianópolis — 4 dias', description: 'Pacote com festas', price: 1499.00 }
    ])
  }
}

export function getPackages(){ return Promise.resolve(read()) }
export function getPackage(id: string){ return Promise.resolve(read().find(p=>p.id===id)) }
export function createPackage(p: Package){ const items = read(); items.push(p); write(items); return Promise.resolve(p) }
export function deletePackage(id: string){ const items = read().filter(x=>x.id!==id); write(items); return Promise.resolve(true) }
