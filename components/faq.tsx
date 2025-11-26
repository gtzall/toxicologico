'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "Qual a validade do exame toxicológico?",
    answer: "O exame toxicológico tem validade de 90 dias a partir da coleta. Para renovar a CNH com tranquilidade, recomenda-se fazer o exame com antecedência para que o laudo já esteja no sistema do RENACH."
  },
  {
    question: "Quais substâncias são detectadas?",
    answer: "O exame detecta substâncias psicoativas como maconha e derivados, cocaína e derivados (crack, merla), anfetaminas (rebites), metanfetaminas (rebites, speed, ice), ecstasy (MDMA, MDA) e opiáceos (heroína, morfina, codeína)."
  },
  {
    question: "Preciso parar de tomar meus remédios?",
    answer: "Não. Informe todos os medicamentos em uso no momento da coleta. O laboratório considera essas informações para diferenciar tratamento médico de possível uso indevido de substâncias."
  },
  {
    question: "É feito com cabelo ou pelos do corpo?",
    answer: "Pode ser feito com ambos. A preferência é por cabelo (mínimo 3cm), mas caso não haja comprimento suficiente, a coleta é realizada com pelos do corpo (axilas, peito, braços ou pernas), sem necessidade de depilação total."
  },
  {
    question: "O exame dói? Precisa de jejum?",
    answer: "Não dói e não precisa de jejum. O procedimento é rápido e não invasivo: é retirada apenas uma pequena amostra de cabelo ou pelos, sem alterar a sua aparência."
  },
  {
    question: "Serve para concursos públicos?",
    answer: "Sim. Realizamos exames toxicológicos para concursos públicos (Polícia Militar, Civil, Federal, Guarda Municipal, etc.) seguindo rigorosamente os editais. Traga seu edital no dia da coleta."
  },
  {
    question: "Preciso agendar horário?",
    answer: "Não é necessário agendamento prévio para a realização da coleta. Atendemos por ordem de chegada, mas você pode entrar em contato pelo WhatsApp para verificar o movimento ou tirar dúvidas específicas antes de vir."
  },
  {
    question: "Quanto tempo demora o resultado?",
    answer: "O resultado geralmente fica pronto em até 48 horas após a chegada da amostra no laboratório de análise. O laudo é inserido automaticamente no sistema do RENACH para fins de CNH."
  },
  {
    question: "O que acontece se o resultado for positivo?",
    answer: "Se o resultado for positivo, o motorista fica impedido de renovar a CNH por 3 meses e pode sofrer penalidades administrativas. É garantido o direito à contraprova caso o doador discorde do resultado."
  },
  {
    question: "Quais as consequências de não renovar/realizar o exame toxicológico no prazo?",
    answer: "Pelo art. 165-B do CTB: Após 30 dias do vencimento do exame periódico, se conduzir veículo que exija categoria C, D ou E, incorre em infração gravíssima, com multa de R$ 1.467,35 e suspensão do direito de dirigir por 3 meses. Em caso de reincidência em 12 meses, a multa é aplicada em dobro (R$ 2.934,70). Na RENOVAÇÃO da CNH, condutor com EAR que não tiver feito o periódico também é multado nos mesmos valores e sofre suspensão (parágrafo único do art. 165-B). Não há computação de pontos quando a penalidade já prevê suspensão (Res. Contran 723/18, § 3º). Observação: a infração do caput não se aplica quando conduz veículos das categorias A ou B."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 bg-background animate-fade-in-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-xl">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-xs text-sm mt-6 md:mt-0 leading-relaxed">
            Esclareça as principais questões sobre o exame toxicológico.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-foreground/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-xl md:text-2xl font-medium pr-8">{faq.question}</span>
                <span className={cn(
                  "text-2xl transition-transform duration-300 font-light",
                  openIndex === index ? "rotate-45" : "rotate-0"
                )}>
                  +
                </span>
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === index ? "max-h-48 opacity-100 mb-8" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
