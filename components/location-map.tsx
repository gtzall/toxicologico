'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export default function LocationMap() {
  return (
    <section id="localizacao" className="py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Fácil acesso em Guarulhos, próximo ao Aeroporto Internacional
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.9544934738484!2d-46.46877968446825!3d-23.449999862768366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef50f1e8d5d6b%3A0x3f7b3b3b3b3b3b3b!2sAv.%20Santos%20Dumont%2C%20246%20-%20Cumbica%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização GuaruToxi"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">GuaruToxi - Exames Toxicológicos</p>
                  <p className="text-muted-foreground">
                    Avenida Santos Dumont, 246A
                    <br />
                    Cumbica, Guarulhos - SP
                    <br />
                    CEP: 07180-270
                  </p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a
                    href="https://www.google.com/maps/dir//Av.+Santos+Dumont,+246+-+Cumbica,+Guarulhos+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Como Chegar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Segunda a Sexta</span>
                    <span className="font-semibold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-semibold text-destructive">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm opacity-90 mb-1">Telefone</p>
                  <a href="tel:07180270" className="text-xl font-bold hover:underline">
                    (11) 07180-270
                  </a>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/5511945890504"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:underline"
                  >
                    (11) 94589-0504
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
