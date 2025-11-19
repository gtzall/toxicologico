import Link from 'next/link'

const services = [
  {
    id: '01',
    title: 'Renovação CNH',
    description: 'Processo simplificado para categorias C, D e E. Laudo integrado diretamente ao sistema DETRAN com resultados em até 48 horas.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Corporativo & CLT',
    description: 'Soluções completas para admissão e demissão conforme NR-7. Gestão eficiente para conformidade empresarial com laudos técnicos certificados.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Concursos Públicos',
    description: 'Rigor técnico absoluto e certificação garantida para todas as etapas do seu processo seletivo. Atendemos todos os editais.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="py-32 bg-secondary/40 text-foreground animate-fade-in-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-foreground/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-xl">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-muted-foreground max-w-xs text-sm mt-6 md:mt-0 leading-relaxed">
            Excelência técnica e rapidez em cada procedimento realizado.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}>

              <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3] relative image-dark">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-xs font-medium tracking-widest text-muted-foreground block mb-4">
                  ({service.id})
                </span>
                <h3 className="text-3xl md:text-5xl font-bold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Link href="https://wa.me/5511949379725" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
                    Solicitar Orçamento
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
