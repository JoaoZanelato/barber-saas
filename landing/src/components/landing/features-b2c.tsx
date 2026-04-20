
import { Smartphone, Bell, History, Star, MapPin, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "./motion-wrapper"

const features = [
  {
    icon: Smartphone,
    title: "Agendamento 24/7",
    description: "Seus clientes agendam a qualquer hora, de qualquer lugar, direto pelo app. Sem ligações, sem espera.",
    align: "left" as const,
  },
  {
    icon: Bell,
    title: "Notificações Push",
    description: "Lembretes automáticos de agendamentos reduzem faltas em até 40%. Seu cliente nunca mais esquece.",
    align: "right" as const,
  },
  {
    icon: History,
    title: "Histórico de Cortes",
    description: "O cliente acessa todo histórico de serviços, barbeiros favoritos e valores. Experiência premium.",
    align: "left" as const,
  },
  {
    icon: Star,
    title: "Avaliações",
    description: "Sistema de avaliação integrado para manter a qualidade do atendimento sempre alta.",
    align: "right" as const,
  },
  {
    icon: MapPin,
    title: "Localização Fácil",
    description: "Integração com mapas para o cliente chegar facilmente até sua barbearia.",
    align: "left" as const,
  },
  {
    icon: CreditCard,
    title: "Pagamento Online",
    description: "Opção de pagamento antecipado ou reserva com cartão para garantir o agendamento.",
    align: "right" as const,
  },
]

export function FeaturesB2C() {
  return (
    <section id="app" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      <motion.div
        animate={{
          x: [0, 30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Para Clientes da Barbearia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              App Mobile <span className="text-primary">Exclusivo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Seus clientes merecem a melhor experiência. Um app moderno, rápido e 
              personalizado com a identidade da sua barbearia.
            </p>
          </div>
        </FadeIn>
        
        {/* Zigzag Layout */}
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              delay={0.1 * index}
              direction={feature.align === "left" ? "right" : "left"}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  feature.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 text-center ${feature.align === "left" ? "md:text-left" : "md:text-right"}`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4`}
                  >
                    <feature.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                    {feature.description}
                  </p>
                </div>
                
                {/* Visual */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -10, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative aspect-[9/16] max-w-[200px] mx-auto rounded-3xl bg-gradient-to-br from-card to-secondary border-4 border-border overflow-hidden shadow-2xl"
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  >
                    {/* Phone notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-background rounded-full" />
                    
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    
                    {/* Content placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full space-y-3">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          className="h-2 bg-primary/20 rounded-full w-3/4 mx-auto"
                        />
                        <div className="h-2 bg-border rounded-full w-1/2 mx-auto" />
                        <div className="h-8 bg-primary/10 rounded-lg w-full mt-4" />
                        <div className="h-8 bg-border/50 rounded-lg w-full" />
                        <div className="h-8 bg-border/50 rounded-lg w-full" />
                      </div>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "200%", opacity: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
