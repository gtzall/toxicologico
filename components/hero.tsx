'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
          alt="Laboratório moderno" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-white">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Exames Toxicológicos
            <br />
            <span className="font-light">com Excelência</span>
          </h1>
          
          <div className="h-px w-24 bg-white/50 my-8" />

          <p className="text-lg md:text-xl font-light max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Tecnologia de ponta e atendimento humanizado. Resultados precisos e certificados para renovação de CNH, admissão CLT e concursos públicos em Guarulhos.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Link 
              href="https://wa.me/5511949379725" 
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
            >
              Agendar Agora
              <span>→</span>
            </Link>
            <Link 
              href="#servicos" 
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              Conhecer Serviços
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Scroll</span>
          <div className="w-px h-12 bg-white/30"></div>
        </div>
      </div>
    </section>
  )
}
