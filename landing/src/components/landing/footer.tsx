import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "App Mobile", href: "#app" },
    { label: "Planos", href: "#planos" },
    { label: "Integrações", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Contato", href: "#" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Documentação", href: "#" },
    { label: "Status", href: "#" },
    { label: "API", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "LGPD", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <FadeIn className="col-span-2">
            <a href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img
                  src="/icon.png"
                  alt="BarbAgenda Logo"
                  width={120}
                  height={120}
                  className="h-12 w-auto"
                />
              </motion.div>
            </a>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              O sistema completo para barbearias modernas. 
              Painel Web + App Mobile para seus clientes.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                </motion.div>
              ))}
            </div>
          </FadeIn>
          
          {/* Produto */}
          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <StaggerItem key={link.label}>
                  <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
          
          {/* Empresa */}
          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <StaggerItem key={link.label}>
                  <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
          
          {/* Suporte */}
          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <StaggerItem key={link.label}>
                  <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
          
          {/* Legal */}
          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <StaggerItem key={link.label}>
                  <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>
        
        {/* Bottom */}
        <FadeIn delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BarbAgenda. Todos os direitos reservados.
            </p>
            <motion.p
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm text-muted-foreground"
            >
              Feito com <span className="text-red-500">❤️</span> para barbearias do Brasil
            </motion.p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
