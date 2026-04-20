/**
 * Portfólio Cainã Reis - Neo-Brutalism Tech Design
 * * Design Philosophy:
 * - Neo-Brutalist aesthetic with terminal/hacker vibes
 * - High contrast: neon green (#00FF41) and cyan (#00D9FF) on dark backgrounds
 * - Solid offset shadows, no gradients
 * - Monospace typography for code feel
 * - Glitch effects and typing animations
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Terminal,
  Server,
  Shield,
  Code2,
  Database,
  Cpu,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Typing effect hook
function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "// sobre", href: "#sobre" },
    { label: "// experiência", href: "#experiencia" },
    { label: "// projetos", href: "#projetos" },
    { label: "// skills", href: "#skills" },
    { label: "// formação", href: "#formacao" },
    { label: "// contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-primary/30" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono text-primary text-lg font-bold hover:text-secondary transition-colors">
            {"<CR />"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-primary/30 pt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const { displayText: nameText, isComplete: nameComplete } = useTypingEffect("Cainã Reis", 80, 500);
  const { displayText: roleText } = useTypingEffect("Desenvolvedor Fullstack Jr", 50, 1500);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Terminal-style intro */}
          <div className="font-mono text-primary/70 text-sm mb-4">
            <span className="text-secondary">$</span> whoami
          </div>

          {/* Name with typing effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-4">
            <span className="text-primary neon-glow">{nameText}</span>
            <span className={nameComplete ? "animate-pulse" : ""}>_</span>
          </h1>

          {/* Role with typing effect */}
          <div className="text-xl md:text-2xl lg:text-3xl font-mono text-secondary mb-8 h-[1.5em]">
            <span className="text-muted-foreground">{">"}</span> {roleText}
            <span className="animate-pulse">_</span>
          </div>

          {/* Terminal-style description */}
          <div className="brutal-card p-6 max-w-2xl mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-3" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
            </div>
            <pre className="font-mono text-sm text-foreground/90 whitespace-pre-wrap">
              <span className="text-secondary">const</span> <span className="text-primary">dev</span> = {"{"}
              {"\n"}  <span className="text-muted-foreground">stack:</span> <span className="text-chart-3">["React", "Python", "Django", "Flask"]</span>,
              {"\n"}  <span className="text-muted-foreground">location:</span> <span className="text-chart-3">"Fortaleza, CE"</span>,
              {"\n"}  <span className="text-muted-foreground">status:</span> <span className="text-chart-3">"Disponível para oportunidades"</span>
              {"\n"}{"}"};
            </pre>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contato">
              <Button className="brutal-card bg-primary text-primary-foreground hover:bg-primary/90 font-mono px-6 py-3 h-auto">
                {">"} Entrar em contato
              </Button>
            </a>
            <a href="#projetos">
              <Button variant="outline" className="brutal-card border-secondary text-secondary hover:bg-secondary/10 font-mono px-6 py-3 h-auto">
                {">"} Ver projetos
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 relative" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-6xl font-bold opacity-20">01</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              <span className="text-secondary">{"// "}</span>Sobre mim
            </h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sou um <span className="text-primary font-semibold">Desenvolvedor Fullstack Jr</span> apaixonado 
                por tecnologia e resolução de problemas. Com experiência em suporte técnico, arquitetura de 
                soluções de T.I. e desenvolvimento de sistemas internos.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Minha jornada inclui desde a <span className="text-secondary font-semibold">gestão de servidores 
                corporativos</span> até o <span className="text-secondary font-semibold">desenvolvimento de 
                plataformas com IA</span> para tomada de decisão. Busco constantemente aprender novas tecnologias 
                e aplicá-las em projetos que fazem a diferença.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="brutal-card p-4">
                  <div className="font-mono text-3xl text-primary font-bold">2+</div>
                  <div className="font-mono text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="brutal-card p-4">
                  <div className="font-mono text-3xl text-secondary font-bold">10+</div>
                  <div className="font-mono text-sm text-muted-foreground">Cursos concluídos</div>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="brutal-card p-2 max-w-md mx-auto">
                <img 
                  src="/images/about-visual.png" 
                  alt="Developer workspace visualization"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary/30 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "PROTEKSEG",
      role: "Estágio em Arquiteto de Soluções de T.I.",
      period: "Julho 2024 – Janeiro 2025",
      location: "Fortaleza / CE",
      image: "/images/experience-protekseg.png",
      highlights: [
        "Desenvolvimento e planejamento de projetos de CFTV e controle de acesso",
        "Elaboração de plantas técnicas com AutoCAD e prototipação com Figma",
        "Criação do sistema FreeTek com IA básica de apoio à decisão",
        "Arquitetura de soluções de segurança corporativa"
      ],
      techs: ["AutoCAD", "Figma", "Python", "IA"]
    },
    {
      company: "Freelance / Autônomo",
      role: "Auxiliar de T.I.",
      period: "2022 – Presente",
      location: "Fortaleza / CE",
      image: null,
      highlights: [
        "Manutenção preventiva e corretiva de hardware e software",
        "Configuração de redes locais e suporte técnico a usuários",
        "Implementação e gestão de sistemas de CRM para pequenos negócios",
        "Otimização de processos internos através de ferramentas digitais"
      ],
      techs: ["Hardware", "Redes", "CRM", "Suporte"]
    },
    {
      company: "CALLMED",
      role: "Estágio em Suporte Técnico",
      period: "Outubro 2021 – Abril 2022",
      location: "Fortaleza / CE",
      image: "/images/experience-callmed.png",
      highlights: [
        "Gerenciamento e configuração de servidores corporativos",
        "Desenvolvimento de protótipo de servidor para gestão de usuários em Python",
        "Rotinas de backups, monitoramento e controle de licenciamento",
        "Gerenciamento de infraestrutura de redes corporativas"
      ],
      techs: ["Python", "SQLite", "Flask", "Tkinter", "Redes"]
    },
    {
      company: "Concentrix",
      role: "Agente de Home Office",
      period: "Experiência Adicional",
      location: "Remoto",
      image: null,
      highlights: [
        "Atendimento remoto a clientes por canais digitais",
        "Utilização de sistemas corporativos e plataformas de atendimento",
        "Registro de chamados e acompanhamento de solicitações"
      ],
      techs: ["Atendimento", "CRM", "Suporte"]
    }
  ];

  return (
    <section id="experiencia" className="py-24 relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{ backgroundImage: "url('/images/skills-pattern.png')", backgroundSize: "400px" }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-6xl font-bold opacity-20">02</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              <span className="text-secondary">{"// "}</span>Experiência
            </h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="brutal-card p-6 md:p-8"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 border border-primary/30">
                        {index === 0 ? <Shield className="text-primary" size={24} /> :
                         index === 1 ? <Server className="text-primary" size={24} /> :
                         <Terminal className="text-primary" size={24} />}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-mono text-primary">
                          {exp.company}
                        </h3>
                        <p className="text-secondary font-mono">{exp.role}</p>
                        <p className="text-sm text-muted-foreground font-mono mt-1">
                          {exp.period} | {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-primary font-mono mt-1">{">"}</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary font-mono text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  {exp.image && (
                    <div className="hidden md:block">
                      <div className="border-2 border-primary/30 p-1">
                        <img 
                          src={exp.image} 
                          alt={`${exp.company} visualization`}
                          className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Section (Nova Adição)
function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: "in-memoria",
      title: "In Memória",
      description: "Plataforma interativa para exploração de memoriais e criação de árvores genealógicas em homenagem a entes queridos.",
      image: "/images/project-in-memoria.png",
      link: "https://in-memoria.onrender.com", // Substitua pela URL exata
      isHosted: true,
      techs: ["React", "TypeScript", "Tailwind", "Shadcn UI"]
    },
    {
      id: "zengames",
      title: "ZenGames",
      description: "Plataforma focada em usabilidade e design limpo para o ecossistema de jogos.",
      image: "/images/project-zengames.png",
      link: "https://zengames.onrender.com", // Substitua pela URL exata
      isHosted: true,
      techs: ["React", "TypeScript", "Node.js"]
    },
    {
      id: "notas-fiscais",
      title: "Sistema de Notas Fiscais",
      description: "Sistema interno para gerenciamento, organização e automação de processos envolvendo notas fiscais.",
      image: "/images/project-notas.png",
      link: "https://github.com/Cainareiss", // Substitua com o link direto do repositório
      isHosted: false,
      techs: ["Python", "Flask", "SQLite"]
    }
  ];

  return (
    <section id="projetos" className="py-24 relative" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-6xl font-bold opacity-20">03</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              <span className="text-secondary">{"// "}</span>Projetos
            </h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="brutal-card flex flex-col overflow-hidden group"
              >
                {/* Imagem do Projeto com Link */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block border-b-2 border-primary/30 overflow-hidden cursor-pointer bg-muted aspect-video"
                  title={project.isHosted ? "Acessar projeto no Render" : "Ver código no GitHub"}
                >
                  <img 
                    src={project.image} 
                    alt={`Screenshot do projeto ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback visual estilo terminal caso você ainda não tenha colocado a imagem na pasta
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100%" height="100%" fill="%230D0D0D"/><text x="50%" y="50%" fill="%2300FF41" font-family="monospace" font-size="6" text-anchor="middle" dominant-baseline="middle">>_ IMG_NOT_FOUND</text></svg>';
                    }}
                  />
                  {/* Overlay interativo no Hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="font-mono text-primary flex items-center gap-2 px-4 py-2 border border-primary/30 bg-background/50">
                      <ExternalLink size={18} />
                      {project.isHosted ? "Acessar Deploy" : "Ver Código"}
                    </span>
                  </div>
                </a>

                {/* Conteúdo */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {!project.isHosted && (
                      <span className="text-[10px] font-mono px-2 py-1 bg-secondary/10 text-secondary border border-secondary/30 shrink-0">
                        OFFLINE
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tecnologias estilo terminal */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techs.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Front-End",
      icon: <Code2 size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Alpine.js"]
    },
    {
      title: "Back-End",
      icon: <Server size={24} />,
      skills: ["Python", "Django", "Flask", "MySQL", "SQLite", "REST APIs"]
    },
    {
      title: "Ferramentas",
      icon: <Cpu size={24} />,
      skills: ["Git", "AutoCAD", "Figma", "Tkinter", "FastAPI"]
    },
    {
      title: "Infraestrutura & T.I.",
      icon: <Database size={24} />,
      skills: ["Manutenção de PCs", "Redes", "CRMs", "CIS", "CFTV", "Backup"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-6xl font-bold opacity-20">04</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              <span className="text-secondary">{"// "}</span>Skills
            </h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="brutal-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="font-mono text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-foreground/80 font-mono text-sm"
                    >
                      <span className="text-secondary">{">"}</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Language note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <span className="font-mono text-muted-foreground">
              <span className="text-secondary">{"// "}</span>
              Inglês: Nível Básico (em desenvolvimento)
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    { name: "JavaScript Básico", institution: "DIO / Alura", hours: "20H", year: "2023" },
    { name: "JavaScript Avançado", institution: "DIO / Alura", hours: "40H", year: "2024" },
    { name: "Escola de Jovens Programadores", institution: "Rede Cuca", hours: "183H", year: "2020" },
    { name: "Banco de Dados MySQL", institution: "Rede Cuca", hours: "36H", year: "2020" },
    { name: "Redes de Computadores Básico", institution: "Rede Cuca", hours: "30H", year: "2021" },
    { name: "Lógica de Programação Essencial", institution: "DIO", hours: "4H", year: "2023" },
    { name: "Introdução a Programação Python", institution: "DIO", hours: "8H", year: "2023" },
    { name: "Desenvolvendo REST APIs Com Python e Flask", institution: "DIO", hours: "5H", year: "2023" },
    { name: "Python Avançado", institution: "Rede Cuca", hours: "35H", year: "2023" },
    { name: "Python para Machine Learning", institution: "DIO", hours: "3H", year: "2023" },
  ];

  return (
    <section id="formacao" className="py-24 relative" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-6xl font-bold opacity-20">05</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              <span className="text-secondary">{"// "}</span>Formação
            </h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          {/* Main education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="brutal-card p-6 md:p-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 border border-primary/30">
                <Terminal className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-mono text-primary">
                  UNIATENEU
                </h3>
                <p className="text-secondary font-mono">
                  Tecnólogo em Análise e Desenvolvimento de Sistemas
                </p>
                <p className="text-sm text-muted-foreground font-mono mt-1">
                  Em andamento | Desde Setembro 2023 | Fortaleza, CE
                </p>
              </div>
            </div>
          </motion.div>

          {/* Courses grid */}
          <h3 className="font-mono text-xl text-foreground mb-6">
            <span className="text-secondary">{">"}</span> Cursos Complementares
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="brutal-card p-4 hover:border-secondary transition-colors"
              >
                <div className="font-mono text-sm text-primary font-semibold mb-1">
                  {course.name}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {course.institution} | {course.hours} | {course.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "darkreis2@gmail.com",
      href: "mailto:darkreis2@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Telefone",
      value: "(85) 98876-8488",
      href: "tel:+5585988768488"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/cainã-reis",
      href: "https://linkedin.com/in/cainã-reis-9b1622152"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/Cainareiss",
      href: "https://github.com/Cainareiss"
    },
    {
      icon: <MapPin size={24} />,
      label: "Localização",
      value: "Fortaleza, CE",
      href: null
    }
  ];

  return (
    <section id="contato" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-6xl font-bold opacity-20">06</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              <span className="text-secondary">{"// "}</span>Contato
            </h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <p className="text-lg text-foreground/80 mb-8">
                Estou disponível para novas oportunidades e desafios. 
                Entre em contato para conversarmos sobre como posso contribuir 
                com seu projeto ou equipe.
              </p>

              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="brutal-card p-4 flex items-center gap-4 group"
                      >
                        <div className="text-primary group-hover:text-secondary transition-colors">
                          {contact.icon}
                        </div>
                        <div>
                          <div className="font-mono text-xs text-muted-foreground">
                            {contact.label}
                          </div>
                          <div className="font-mono text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                            {contact.value}
                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="brutal-card p-4 flex items-center gap-4">
                        <div className="text-primary">{contact.icon}</div>
                        <div>
                          <div className="font-mono text-xs text-muted-foreground">
                            {contact.label}
                          </div>
                          <div className="font-mono text-foreground">{contact.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Terminal-style message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="brutal-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-chart-3" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">message.sh</span>
              </div>
              <pre className="font-mono text-sm text-foreground/90 whitespace-pre-wrap">
                <span className="text-muted-foreground">#!/bin/bash</span>
                {"\n\n"}
                <span className="text-secondary">echo</span> <span className="text-chart-3">"Olá! 👋"</span>
                {"\n\n"}
                <span className="text-secondary">echo</span> <span className="text-chart-3">"Obrigado por visitar meu portfólio."</span>
                {"\n\n"}
                <span className="text-secondary">echo</span> <span className="text-chart-3">"Estou sempre em busca de novos"</span>
                {"\n"}<span className="text-secondary">echo</span> <span className="text-chart-3">"desafios e oportunidades para"</span>
                {"\n"}<span className="text-secondary">echo</span> <span className="text-chart-3">"crescer como desenvolvedor."</span>
                {"\n\n"}
                <span className="text-secondary">echo</span> <span className="text-chart-3">"Vamos construir algo incrível juntos?"</span>
                {"\n\n"}
                <span className="text-primary">exit 0</span>
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-primary/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-secondary">{"// "}</span>
            Desenvolvido por <span className="text-primary">Cainã Reis</span> | 2025
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-secondary">{"<"}</span>
            <span className="text-primary">React</span>
            <span className="text-secondary">{" + "}</span>
            <span className="text-primary">TypeScript</span>
            <span className="text-secondary">{" + "}</span>
            <span className="text-primary">Tailwind</span>
            <span className="text-secondary">{" />"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection /> {/* NOVA SEÇÃO RENDERIZADA AQUI */}
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}