import React from 'react'
import Home from './pages/Home'
import Pacotes from './pages/Pacotes'
import Roteiro from './pages/Roteiro'
import Contato from './pages/Contato'
import Login from './pages/Login'

type RouteMap = { [key: string]: React.FC }

const routes: RouteMap = {
  '': Home,
  '#/': Home,
  '#/pacotes': Pacotes,
  '#/roteiro': Roteiro,
  '#/contato': Contato,
  '#/login': Login,
}

export default function Router(){
  const [hash, setHash] = React.useState(window.location.hash || '#/')
  React.useEffect(()=>{
    const onHash = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return ()=> window.removeEventListener('hashchange', onHash)
  },[])

  const Page = routes[hash] || Home
  return <Page />
}
