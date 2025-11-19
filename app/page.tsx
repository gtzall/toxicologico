"use client"

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Substances from '@/components/substances'
import PriceCalculator from '@/components/price-calculator'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

type TabKey = 'inicio' | 'sobre' | 'servicos' | 'substancias' | 'precos' | 'faq' | 'contato'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('inicio')

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <div className={"flex-1 flex flex-col pt-16 animate-fade-in-up"}>
        {activeTab === 'inicio' && (
          <div className="flex-1 flex flex-col">
            <Hero />
          </div>
        )}

        {activeTab === 'sobre' && (
          <div className="flex-1 flex flex-col">
            <About />
          </div>
        )}

        {activeTab === 'servicos' && (
          <div className="flex-1 flex flex-col">
            <Services />
          </div>
        )}

        {activeTab === 'substancias' && (
          <div className="flex-1 flex flex-col">
            <Substances />
          </div>
        )}

        {activeTab === 'precos' && (
          <div className="flex-1 flex flex-col">
            <PriceCalculator />
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="flex-1 flex flex-col">
            <FAQ />
          </div>
        )}

        {activeTab === 'contato' && (
          <div className="flex-1 flex flex-col justify-between">
            <Contact />
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
