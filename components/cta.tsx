import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Calendar, Phone } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="agendamento" className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm border-2">
          <CardContent className="p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance text-card-foreground">
                Pronto para Regularizar Seu <span className="text-primary">Exame Toxicológico?</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Agende agora mesmo e evite multas. Atendimento rápido, resultado certificado e
                parcelamento facilitado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg font-semibold h-14 px-8 group bg-primary hover:bg-primary/90" asChild>
                <Link href="https://wa.me/5511945890504" target="_blank">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-2"
                asChild
              >
                <a href="tel:07180270">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Resultado em 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Parcelamento sem juros</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Certificado pelo DETRAN</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
