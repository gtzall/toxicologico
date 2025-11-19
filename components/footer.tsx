import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contato" className="bg-secondary/60 pt-16 pb-10 border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter block mb-8">
              GuaruToxic
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Excelência em diagnósticos toxicológicos. 
              Compromisso com a precisão, agilidade e o atendimento humanizado em Guarulhos.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8">Contato</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Avenida Santos Dumont, 246A</p>
              <p>Cumbica, Guarulhos - SP</p>
              <p>07180-270</p>
              <br />
              <Link href="tel:+5511949379725" className="hover:text-foreground transition-colors block font-medium">
                (11) 94937-9725
              </Link>
              <Link href="mailto:contato@guarutoxic.com.br" className="hover:text-foreground transition-colors block font-medium">
                contato@guarutoxic.com.br
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8">Navegação</h4>
            <div className="space-y-4 text-sm text-muted-foreground flex flex-col">
              <Link href="#sobre" className="hover:text-foreground transition-colors">Sobre</Link>
              <Link href="#servicos" className="hover:text-foreground transition-colors">Serviços</Link>
              <Link href="#precos" className="hover:text-foreground transition-colors">Valores</Link>
              <Link href="#faq" className="hover:text-foreground transition-colors">Dúvidas Frequentes</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-foreground/5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2025 GuaruToxic. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link href="#" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
               Privacidade
             </Link>
             <Link href="#" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
               Termos
             </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
