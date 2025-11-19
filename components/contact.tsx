'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <section className="py-24 bg-background animate-fade-in-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Fale com a GuaruToxic
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Tire dúvidas, agende seu exame toxicológico ou solicite informações sobre laudos corporativos.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">WhatsApp e Telefone</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Atendimento rápido para agendamentos, valores e orientações sobre documentos necessários.
            </p>
            <div className="space-y-3 text-sm">
              <Link
                href="https://wa.me/5511949379725"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground text-foreground text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                WhatsApp GuaruToxic
              </Link>
              <p className="text-muted-foreground">
                Telefone: <span className="font-medium text-foreground">(11) 94937-9725</span>
              </p>
              <p className="text-muted-foreground text-sm">
                E-mail: <span className="font-medium text-foreground">contato@guarutoxic.com.br</span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Envie uma mensagem</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preencha os dados abaixo e retornaremos com todas as informações necessárias para o seu exame.
            </p>
            <form className="space-y-4 text-sm">
              <div className="space-y-1">
                <label className="block text-xs font-medium tracking-widest uppercase text-muted-foreground">Nome completo</label>
                <input
                  type="text"
                  className="w-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium tracking-widest uppercase text-muted-foreground">WhatsApp ou telefone</label>
                <input
                  type="tel"
                  className="w-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 94937-9725"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium tracking-widest uppercase text-muted-foreground">Mensagem</label>
                <textarea
                  className="w-full border border-border bg-background px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="button"
                className="w-full mt-2 bg-foreground text-background py-3 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Localização</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Avenida Santos Dumont, 246A
              <br />
              Cumbica, Guarulhos - SP
              <br />
              07180-270
            </p>
            <div className="rounded-none border border-foreground/10 overflow-hidden h-64 bg-secondary/40">
              <iframe
                title="Mapa GuaruToxic"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.260779935223!2d-46.473!3d-23.558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzI4LjAiUyA0NsKwMjgnMjMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
