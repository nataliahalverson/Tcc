/**
 * UserMenu - Menu do Usuário Autenticado
 * 
 * Mostra:
 * - Nome do usuário
 * - Botão de Logout
 * 
 * Se não autenticado, mostra Login/Registrar
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, User } from 'lucide-react'
import Button from './Button'
import { useAuth } from '@/contexts/AuthContext'

export default function UserMenu() {
  const { user, loading, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (loading) {
    return (
      <div className="hidden md:flex gap-2">
        <div className="h-9 w-24 bg-slate-200 rounded animate-pulse" />
      </div>
    )
  }

  // Usuário autenticado
  if (user) {
    return (
      <div className="relative">
        <Button
          variant="primary"
          size="md"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <User size={18} />
          <span className="hidden sm:inline">{user.name}</span>
        </Button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
            <div className="px-4 py-3 border-b border-slate-100">
              <p className="text-sm font-medium text-slate-900">{user.name}</p>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
            <button
              onClick={async () => {
                await logout()
                setIsOpen(false)
              }}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
            >
              <LogOut size={16} />
              Fazer Logout
            </button>
          </div>
        )}
      </div>
    )
  }

  // Não autenticado
  return (
    <div className="hidden md:flex gap-2">
      <Button variant="link" size="md">
        <Link href="/login" className="flex items-center gap-2">
          Login
        </Link>
      </Button>
      <Button variant="primary" size="md">
        <Link href="/registro" className="flex items-center gap-2">
          Registrar
        </Link>
      </Button>
    </div>
  )
}
