
import { Calendar, DollarSign, Users, Shield, BarChart3, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"

const features = [
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Sistema anti-colisão que impede agendamentos duplicados. Organize múltiplos profissionais sem conflitos.",
  },
  {
    icon: DollarSign,
    title: "Gestão Financeira",
    description: "Controle de caixa completo, comissões automáticas e relatórios de faturamento em tempo real.",
  },
  {
    icon: Users,
    title: "Controle de Profissionais",
    description: "Gerencie horários, folgas, comissões e desempenho de cada barbeiro da sua equipe.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Backup automático na nuvem e criptografia de dados para proteger seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Análises de performance, serviços mais vendidos e previsão de faturamento.",
  },
  {
    icon: Clock,
    title: "Otimização de Tempo",
    description: "Reduza faltas com confirmações automáticas e lembretes para seus clientes.",
  },
]

export function FeaturesB2B() {
  return (
    <section id="funcionalidades" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Para Donos de Barbearia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Painel Web <span className="text-primary">Completo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tudo que você precisa para gerenciar sua barbearia em um só lugar. 
              Acesse de qualquer dispositivo, a qualquer hora.
            </p>
          </div>
        </FadeIn>
        
        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px -20px rgba(201, 162, 39, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
