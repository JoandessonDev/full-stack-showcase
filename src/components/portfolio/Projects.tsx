import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  features: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema ERP Empresarial",
    description: "Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e RH.",
    fullDescription: "Um sistema ERP robusto desenvolvido para empresas de médio porte. Inclui controle de estoque em tempo real, gestão de vendas com relatórios detalhados, módulo financeiro completo com contas a pagar/receber, e gestão de recursos humanos. Arquitetura escalável com microserviços e alta disponibilidade.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    ],
    tags: [".NET Core", "React", "SQL Server", "Azure"],
    features: [
      "Dashboard interativo com métricas em tempo real",
      "Controle de estoque com alertas automáticos",
      "Módulo financeiro com conciliação bancária",
      "Gestão de RH com folha de pagamento",
      "Relatórios personalizáveis",
      "API RESTful documentada",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Marketplace",
    description: "Plataforma de marketplace completa com múltiplos vendedores e gateway de pagamento.",
    fullDescription: "Marketplace desenvolvido do zero com sistema de múltiplos vendedores, carrinho de compras inteligente, integração com diversos gateways de pagamento (Stripe, PagSeguro, MercadoPago), sistema de avaliações e reviews, chat entre compradores e vendedores, e painel administrativo completo.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
    tags: ["Laravel", "React", "MySQL", "Redis"],
    features: [
      "Sistema multi-vendedor",
      "Integração com múltiplos gateways",
      "Chat em tempo real",
      "Sistema de cupons e promoções",
      "Notificações push",
      "SEO otimizado",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "App de Gestão de Tarefas",
    description: "Aplicação de produtividade com kanban, calendário e integração com APIs externas.",
    fullDescription: "Aplicação moderna de gestão de tarefas e projetos inspirada em ferramentas como Notion e Trello. Possui quadros kanban customizáveis, visualização em calendário, gráficos de produtividade, integração com Google Calendar e Slack, sistema de tags e filtros avançados, e modo offline com sincronização.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    ],
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    features: [
      "Quadros Kanban drag-and-drop",
      "Calendário integrado",
      "Gráficos de produtividade",
      "Integração com Google Calendar",
      "Notificações personalizáveis",
      "Modo offline",
    ],
    github: "https://github.com",
  },
  {
    id: 4,
    title: "API de Microserviços",
    description: "Arquitetura de microserviços escalável com autenticação JWT e mensageria.",
    fullDescription: "Infraestrutura de microserviços desenvolvida para uma fintech. Inclui gateway de API, serviço de autenticação com JWT e OAuth2, sistema de mensageria com RabbitMQ, cache distribuído com Redis, monitoramento com Prometheus e Grafana, e deployment automatizado com Kubernetes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    ],
    tags: [".NET Core", "Docker", "RabbitMQ", "Kubernetes"],
    features: [
      "Gateway de API centralizado",
      "Autenticação JWT e OAuth2",
      "Mensageria assíncrona",
      "Cache distribuído",
      "Monitoramento em tempo real",
      "CI/CD automatizado",
    ],
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Dashboard Analítico",
    description: "Painel de análise de dados com gráficos interativos e relatórios customizáveis.",
    fullDescription: "Dashboard executivo para análise de dados de negócios. Possui visualizações interativas com Recharts, filtros dinâmicos, drill-down em dados, exportação para PDF e Excel, agendamento de relatórios automáticos, e integração com múltiplas fontes de dados através de APIs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdc37c56d?w=800&h=600&fit=crop",
    ],
    tags: ["React", "TypeScript", "C#", "PostgreSQL"],
    features: [
      "Gráficos interativos",
      "Filtros dinâmicos",
      "Drill-down em dados",
      "Exportação PDF/Excel",
      "Relatórios agendados",
      "Múltiplas fontes de dados",
    ],
    live: "https://example.com",
  },
  {
    id: 6,
    title: "Sistema de Agendamentos",
    description: "Plataforma de agendamento online com notificações e integração com calendários.",
    fullDescription: "Sistema de agendamentos para clínicas e profissionais liberais. Possui calendário visual com disponibilidade em tempo real, agendamento online para clientes, lembretes automáticos por email e SMS, integração com Google Calendar e Outlook, e relatórios de atendimentos.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    ],
    tags: ["PHP", "Laravel", "Vue.js", "MySQL"],
    features: [
      "Calendário visual",
      "Agendamento online",
      "Lembretes automáticos",
      "Integração com calendários",
      "Gestão de profissionais",
      "Relatórios de atendimentos",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// Portfólio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades
            em diferentes tecnologias e domínios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-elevated">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-background/90 rounded-full text-sm font-medium text-foreground">
                      Ver detalhes
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
