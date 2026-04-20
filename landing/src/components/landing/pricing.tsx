
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"

const plans = [
  {
    name: "Starter",
    description: "Para barbearias iniciando a digitalização",
    price: "97",
    period: "/mês",
    features: [
      "Até 2 profissionais",
      "Agendamento online",
      "App personalizado",
      "Notificações push",
      "Suporte por email",
    ],
    highlighted: false,
    cta: "Começar Grátis",
  },
  {
    name: "Profissional",
    description: "O mais escolhido pelas barbearias",
    price: "197",
    period: "/mês",
    features: [
      "Até 5 profissionais",
      "Tudo do Starter",
      "Gestão financeira completa",
      "Relatórios avançados",
      "Comissões automáticas",
      "Múltiplas unidades",
      "Suporte prioritário",
    ],
    highlighted: true,
    cta: "Testar 14 Dias Grátis",
    badge: "Mais Popular",
  },
  {
    name: "Enterprise",
    description: "Para redes e franquias",
    price: "397",
    period: "/mês",
    features: [
      "Profissionais ilimitados",
      "Tudo do Profissional",
      "API personalizada",
      "Dashboard multi-unidades",
      "Gestor de conta dedicado",
      "Treinamento da equipe",
      "SLA garantido",
    ],
    highlighted: false,
    cta: "Falar com Vendas",
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Planos e Preços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Escolha o plano <span className="text-primary">ideal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Todos os planos incluem 14 dias grátis. Sem compromisso, cancele quando quiser.
            </p>
          </div>
        </FadeIn>
        
        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ 
                  y: plan.highlighted ? -12 : -8,
                  boxShadow: plan.highlighted 
                    ? "0 30px 60px -20px rgba(201, 162, 39, 0.35)"
                    : "0 20px 40px -20px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative rounded-2xl p-6 lg:p-8 transition-colors duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-2xl shadow-primary/10 md:scale-105 z-10"
                    : "bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/30"
                    >
                      {plan.badge}
                    </motion.span>
                  </motion.div>
                )}
                
                {/* Plan Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-4xl lg:text-5xl font-bold text-foreground"
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + featureIndex * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted ? "bg-primary/20" : "bg-border"
                        }`}
                      >
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                      </motion.div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* CTA */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Trust badges */}
        <FadeIn delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Pagamento seguro com</p>
            <div className="flex items-center justify-center gap-6">
              {["Stripe", "PIX", "Cartão"].map((method, index) => (
                <motion.span
                  key={method}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="text-foreground font-semibold cursor-default"
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
