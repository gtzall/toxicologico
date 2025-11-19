'use client'

import Link from 'next/link'

const plans = [
  {
    name: "CNH Profissional",
    price: "189,90",
    detail: "Categorias C, D e E",
    features: ["Resultado em 48h", "Envio direto ao RENACH", "Coleta indolor"]
  },
  {
    name: "Corporativo",
    price: "199,90",
    detail: "Admissional e Periódico",
    features: ["Gestão de laudos", "Atendimento in-company", "Faturamento mensal"]
  },
  {
    name: "Concursos",
    price: "249,90",
    detail: "Certificação Oficial",
    features: ["Laudo impresso", "Cadeia de custódia", "Validade nacional"]
  }
]

export default function PriceCalculator() {
  return (
    <section id="precos" className="py-32 bg-background animate-fade-in-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Investimento</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Transparência e facilidade no pagamento para sua tranquilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 md:p-12 transition-all duration-500 border flex flex-col justify-between min-h-[500px] group ${
                index === 1 ? 'bg-foreground text-background border-foreground' : 'bg-background border-border hover:border-foreground'
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                <p className={`text-sm mb-12 ${index === 1 ? 'text-white/60' : 'text-muted-foreground'}`}>
                  {plan.detail}
                </p>
                
                <div className="mb-12">
                  <span className="text-5xl font-light tracking-tighter">R$ {plan.price}</span>
                  <span className={`block text-xs mt-3 uppercase tracking-widest ${index === 1 ? 'text-white/40' : 'text-muted-foreground'}`}>
                    em até 6x sem juros
                  </span>
                </div>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <span className={`h-px w-4 ${index === 1 ? 'bg-white/40' : 'bg-foreground/40'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="https://wa.me/5511949379725"
                className={`w-full py-4 text-center text-xs uppercase tracking-widest transition-all duration-300 border ${
                  index === 1 
                    ? 'bg-white text-black hover:bg-white/90 border-white' 
                    : 'bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                Agendar Agora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
