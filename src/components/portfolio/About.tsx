import { motion } from "framer-motion";
import { Code2, Database, Server, Layers } from "lucide-react";

const About = () => {
  const stats = [
    { value: "5+", label: "Anos de Experiência" },
    { value: "50+", label: "Projetos Entregues" },
    { value: "30+", label: "Clientes Satisfeitos" },
    { value: "10+", label: "Tecnologias" },
  ];

  const expertise = [
    {
      icon: Server,
      title: "Backend Development",
      description: "APIs robustas com .NET, C#, PHP e Laravel. Arquitetura limpa e escalável.",
    },
    {
      icon: Layers,
      title: "Frontend Development",
      description: "Interfaces modernas com React e TypeScript. Design responsivo e performático.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Modelagem de dados eficiente. SQL Server, MySQL, PostgreSQL.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Código limpo, testável e bem documentado. Boas práticas e padrões de projeto.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Sobre mim</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Criando soluções
              <br />
              <span className="text-gradient">digitais completas</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sou um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas 
              que fazem a diferença. Com experiência sólida em desenvolvimento backend 
              e frontend, busco sempre entregar projetos de alta qualidade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Minha jornada na programação começou há anos, e desde então venho 
              aperfeiçoando minhas habilidades em diversas tecnologias. Acredito 
              que o bom código é aquele que resolve problemas de forma elegante 
              e eficiente.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <span className="text-2xl md:text-3xl font-bold text-gradient block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
