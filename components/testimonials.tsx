'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Motorista de Caminhão',
    content:
      'Excelente atendimento! Fiz meu exame toxicológico periódico e o resultado saiu em menos de 48h. Equipe profissional e local muito limpo.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Motorista de Ônibus',
    content:
      'Muito satisfeita com o serviço. Agendei pelo WhatsApp, fui atendida no horário marcado e recebi o laudo direto no DETRAN. Recomendo!',
    rating: 5,
  },
  {
    name: 'João Pereira',
    role: 'Candidato Concurso Público',
    content:
      'Precisava do exame para concurso e estava com prazo apertado. A GuaruToxi foi super eficiente, resultado em 8 dias e laudo lacrado. Perfeito!',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Motorista CLT',
    content:
      'Ótima experiência! Preço justo, parcelamento facilitado e atendimento humanizado. Voltarei com certeza para o próximo exame periódico.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            O Que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Avaliações reais de motoristas que realizaram exame conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary">5.0</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-primary">5.000+</div>
            <div className="text-sm text-muted-foreground">Exames Realizados</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
