'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type TabKey = 'inicio' | 'sobre' | 'servicos' | 'substancias' | 'precos' | 'faq' | 'contato'

interface HeaderProps {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [scrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-3 px-6 md:px-12 flex items-center justify-between bg-white backdrop-blur-md shadow-md border-b border-border'
        )}
      >
        <Link href="/" className="text-xl md:text-2xl font-serif tracking-tight z-50 relative">
          GuaruToxic
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
          <button
            type="button"
            onClick={() => onTabChange('inicio')}
            className={cn(
              'transition-all duration-200 pb-1 border-b-2 border-transparent hover:opacity-80 hover:-translate-y-0.5',
              activeTab === 'inicio' && 'opacity-100 border-foreground'
            )}
          >
            Início
          </button>
          <button
            type="button"
            onClick={() => onTabChange('sobre')}
            className={cn(
              'transition-all duration-200 pb-1 border-b-2 border-transparent hover:opacity-80 hover:-translate-y-0.5',
              activeTab === 'sobre' && 'opacity-100 border-foreground'
            )}
          >
            Sobre
          </button>
          <button
            type="button"
            onClick={() => onTabChange('servicos')}
            className={cn(
              'transition-all duration-200 pb-1 border-b-2 border-transparent hover:opacity-80 hover:-translate-y-0.5',
              activeTab === 'servicos' && 'opacity-100 border-foreground'
            )}
          >
            Serviços
          </button>
          <button
            type="button"
            onClick={() => onTabChange('precos')}
            className={cn(
              'transition-all duration-200 pb-1 border-b-2 border-transparent hover:opacity-80 hover:-translate-y-0.5',
              activeTab === 'precos' && 'opacity-100 border-foreground'
            )}
          >
            Preços
          </button>
          <button
            type="button"
            onClick={() => onTabChange('faq')}
            className={cn(
              'transition-all duration-200 pb-1 border-b-2 border-transparent hover:opacity-80 hover:-translate-y-0.5',
              activeTab === 'faq' && 'opacity-100 border-foreground'
            )}
          >
            FAQ
          </button>
          <button
            type="button"
            onClick={() => onTabChange('contato')}
            className={cn(
              'transition-all duration-200 pb-1 border-b-2 border-transparent hover:opacity-80 hover:-translate-y-0.5',
              activeTab === 'contato' && 'opacity-100 border-foreground'
            )}
          >
            Contato
          </button>
        </nav>

        <Link 
          href="https://wa.me/5511949379725" 
          className={cn(
            "hidden md:block text-sm font-medium tracking-wide px-6 py-2 rounded-full transition-all duration-300",
            scrolled 
              ? "border border-foreground bg-transparent hover:bg-foreground hover:text-background"
              : "border border-foreground/40 hover:bg-foreground hover:text-background"
          )}
        >
          Agendar
        </Link>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-sm tracking-wide z-50 relative"
          aria-label="Menu"
        >
          {mobileMenuOpen ? 'Fechar' : 'Menu'}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden animate-fade-in-up">
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
            <button
              type="button"
              onClick={() => { onTabChange('inicio'); handleLinkClick() }}
              className="hover:opacity-70 transition-opacity"
            >
              Início
            </button>
            <button
              type="button"
              onClick={() => { onTabChange('sobre'); handleLinkClick() }}
              className="hover:opacity-70 transition-opacity"
            >
              Sobre
            </button>
            <button
              type="button"
              onClick={() => { onTabChange('servicos'); handleLinkClick() }}
              className="hover:opacity-70 transition-opacity"
            >
              Serviços
            </button>
            <button
              type="button"
              onClick={() => { onTabChange('precos'); handleLinkClick() }}
              className="hover:opacity-70 transition-opacity"
            >
              Preços
            </button>
            <button
              type="button"
              onClick={() => { onTabChange('faq'); handleLinkClick() }}
              className="hover:opacity-70 transition-opacity"
            >
              FAQ
            </button>
            <button
              type="button"
              onClick={() => { onTabChange('contato'); handleLinkClick() }}
              className="hover:opacity-70 transition-opacity"
            >
              Contato
            </button>
            <Link 
              href="https://wa.me/5511949379725" 
              onClick={handleLinkClick}
              className="border border-foreground px-8 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300 mt-4"
            >
              Agendar pelo WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
