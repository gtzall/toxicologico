export default function About() {
  return (
    <section id="sobre" className="py-32 bg-secondary/30 animate-fade-in-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Sobre a GuaruToxic</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-6 mb-12">
              Análise Abrangente e Certificada
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Metodologia Avançada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Equipamentos modernos e protocolos padronizados para identificar substâncias psicoativas com alto grau de precisão, sempre alinhados às normas do CONTRAN.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Certificações e Credenciais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Laboratório regularizado e equipe formada por biomédicos e farmacêuticos habilitados, garantindo laudos confiáveis e aceitos em todo o território nacional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Janela de Detecção</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cabelo indica consumo em até 90 dias; urina, uso recente em poucos dias. Você recebe um laudo claro, objetivo e fácil de apresentar aos órgãos competentes.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Processo Completo</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">01</span>
                    <span>Coleta de material biológico (cabelo, pelo ou urina) por profissional capacitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">02</span>
                    <span>Processamento em laboratório com tecnologia de ponta e controle de qualidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">03</span>
                    <span>Análise por cromatografia gasosa acoplada à espectrometria de massa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">04</span>
                    <span>Emissão de laudo técnico assinado digitalmente e integrado aos sistemas oficiais</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Diferenciais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Atendimento rápido, resultado em até 48 horas, laudo enviado ao DETRAN sem burocracia e estrutura pensada para um processo discreto e confortável.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 border border-foreground/10 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Tem dúvidas sobre o processo?</h4>
                <p className="text-muted-foreground">Nossa equipe está pronta para atendê-lo</p>
              </div>
              <a 
                href="https://wa.me/5511949379725" 
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-foreground/90 transition-all duration-300 whitespace-nowrap"
              >
                Falar com Especialista
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
