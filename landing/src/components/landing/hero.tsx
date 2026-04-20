
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, Floating } from "./motion-wrapper"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <span className="text-sm text-primary font-medium">
                  +500 barbearias já faturam mais
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                Aumente seu{" "}
                <span className="text-primary relative">
                  faturamento
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 origin-left"
                  />
                </span>{" "}
                e organize sua barbearia
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-foreground">Painel Web Administrativo</strong> para você gerenciar tudo.{" "}
                <strong className="text-foreground">App Mobile exclusivo</strong> para seus clientes agendarem 24/7.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 gap-2 shadow-xl shadow-primary/25 group"
                  >
                    Começar Agora
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-border text-foreground hover:bg-secondary font-semibold text-lg px-8 py-6 gap-2 group"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play size={20} />
                    </motion.span>
                    Ver Demonstração
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start">
                {[
                  { value: "+12k", label: "Agendamentos/mês" },
                  { value: "98%", label: "Satisfação" },
                  { value: "24/7", label: "Disponível" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Visual Placeholder */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden shadow-2xl"
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-center p-8 cursor-pointer"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-primary" />
                    </motion.div>
                    <p className="text-muted-foreground">Preview do Sistema</p>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </motion.div>
              
              {/* Floating card */}
              <Floating delay={0} y={8}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                    >
                      <span className="text-primary font-bold">+</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Novo agendamento</p>
                      <p className="text-xs text-muted-foreground">Corte + Barba às 14h</p>
                    </div>
                  </div>
                </motion.div>
              </Floating>
              
              {/* Floating card 2 */}
              <Floating delay={1.5} y={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -top-4 -right-4 p-4 rounded-xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                    >
                      <span className="text-green-500 font-bold">$</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Faturamento</p>
                      <p className="text-xs text-green-500">+32% este mês</p>
                    </div>
                  </div>
                </motion.div>
              </Floating>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
