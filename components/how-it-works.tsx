import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Scissors, FlaskConical, FileCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Agende Online ou Presencial',
    description: 'Escolha o melhor dia e horário. Atendimento rápido sem filas.',
  },
  {
    number: '02',
    icon: Scissors,
    title: 'Coleta Rápida',
    description: 'Coleta de cabelo ou pelos. Procedimento indolor em menos de 10 minutos.',
  },
  {
    number: '03',
    icon: FlaskConical,
    title: 'Análise Laboratorial',
    description: 'Amostra analisada em laboratório certificado com tecnologia de ponta.',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Receba o Resultado',
    description: 'Laudo enviado automaticamente ao DETRAN ou entregue impresso e lacrado.',
  },
]

export default function HowItWorks() {
  return null;
}
