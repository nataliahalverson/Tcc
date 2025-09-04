import React from 'react'

export default function Header(){
  return (
    <header className="bg-sky-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FORMA+</h1>
        <nav className="space-x-4">
          <a href="#/" className="hover:underline">Início</a>
          <a href="#/pacotes" className="hover:underline">Pacotes</a>
          <a href="#/roteiro" className="hover:underline">Roteiro</a>
          <a href="#/login" className="hover:underline">Login</a>
          <a href="#/contato" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  )
}
