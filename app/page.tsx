"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, AnimatePresence, useSpring, useInView } from "framer-motion"
import { Github, Menu, X, ChevronRight, ArrowRight, Download, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroImage from "@/components/hero-image"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ParticleField from "@/components/particle-field"
import AnimatedCounter from "@/components/animated-counter"
import GeometricShapes from "@/components/geometric-shapes"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("hero")
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const navItems = [
    { name: "About", id: "about" },
    { name: "Work", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ]

  const projects = [
    {
      title: "SaaS Hosital Management System",
      description:
        "A SaaS-based Hospital Management System to streamline hospital operations. It supports staff onboarding, patient management, and both walk-in and online consultations.",
      tech: ["Next.js", "Chakra UI", "PostgreSql", "Stream", "AI"],
      image: "/hospital.png?height=600&width=800&text=E-Commerce Platform",
      category: "Web Development",
      year: "2024",
      link: "https://hospital-management-theta-nine.vercel.app/"
    },
    {
      title: "SENFENG Pakistan CRM",
      description:
        "A full-stack business management web app streamlining team management, customer handling, payments, and task tracking in one platform.",
      tech: ["Next.js", "Shadcn", "PostgreSql", "Node.js", "Firebase", "Supabase"],
      image: "/senfeng_web.png?height=600&width=800&text=Social Media App",
      category: "Web Development",
      year: "2025",
      link: "http://app.senfenglaserpk.com/"
    },
    {
      title: "SENFENG Mobile",
      description:
        "Manage customers, complaints, commissions, team messaging, site visits, attendance and live location all in one place.",
      tech: ["React Native", "Expo", "EAS", "Firebase", "Supabase"],
      image: "/senfeng_mobile.png?height=600&width=800&text=Task Management",
      category: "Mobile App Development",
      year: "2025",
      link: "https://play.google.com/store/apps/details?id=com.octasoft.adcrm&pcampaignid=web_share"
    },

    {
      title: "TMS Blink Sales",
      description:
        "A web platform tailored for immigration consultants to manage leads, assign tasks, send emails, and track overall business operations efficiently.",
      tech: ["React", "Typescript", "Node.js", "MySql", "Socket"],
      image: "/tms.png?height=600&width=800&text=AI Analytics",
      category: "Web Development",
      year: "2024",
      link: "https://tms.blink-sales.com/"
    },
  ]

  const skills = [
    {
      category: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces",
      items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn", "Chakra UI"],
      icon: "🎨",
    },
    {
      category: "Mobile Development",
      description: "Cross-platform mobile applications",
      items: ["React Native", "Expo", "EAS", "iOS", "Android", "Reusables", "Kitten UI"],
      icon: "📱",
    },
    {
      category: "Backend Development",
      description: "Scalable server-side solutions",
      items: ["Node.js", "Express", "Python", "C#", "API Development"],
      icon: "⚙️",
    },
    {
      category: "Database & Cloud",
      description: "Data management and cloud infrastructure",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
      icon: "☁️",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <GeometricShapes />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              <span className="text-white">Ubaid</span>
              <span className="text-blue-400"> Ur Rehman</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full relative",
                    activeSection === item.id
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="ml-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300"
                >
                  Let's Talk
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-xl font-medium py-4 px-6 text-left border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <Button
                  onClick={() => {
                    scrollToSection("contact")
                    setMobileMenuOpen(false)
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 py-4 mt-4 text-lg"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <HeroImage />
        <ParticleField />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Available for new projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold leading-tight mb-6"
              >
                <span className="text-white">Full Stack</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Developer
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl leading-relaxed"
            >
              I craft exceptional digital experiences through innovative web and mobile applications. Specializing in
              modern technologies to bring your ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold group transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/5 rounded-2xl px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300"
              >
                Get In Touch
              </Button>
              {/* <Button
                onClick={() => window.open("/resume.pdf", "_blank")}
                size="lg"
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/5 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl"
            >
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={50} />+
                </div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={9} />+
                </div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={20} />+
                </div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} className="rotate-90 text-white/60" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6">
                About Me
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Passionate about</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  creating excellence
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                With over 9 years of experience in full-stack development, I specialize in creating scalable,
                user-centric applications that drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm a passionate full-stack developer who believes in the power of clean code and exceptional user
                  experiences. My journey in technology has led me to work with startups and enterprises, helping them
                  transform ideas into successful digital products.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or mentoring aspiring developers. I believe in continuous learning and staying ahead of industry
                  trends.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 transition-all duration-300"
                  >
                    View My Work
                  </Button>
                  {/* <Button
                    onClick={() => window.open("https://github.com/yourusername", "_blank")}
                    variant="outline"
                    className="border border-white/20 text-white hover:bg-white/5 rounded-xl px-6 py-3 transition-all duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button> */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              className="relative hidden sm:block" 
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6">
              Featured Work
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Selected</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of my recent work, demonstrating expertise across web development, mobile applications, and
              innovative solutions.
            </motion.p>
          </motion.div>

          <div className="grid gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href={"/projects"}>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/5 rounded-2xl px-8 py-4 text-lg font-semibold group transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                <span>View All Recent Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6">
              Technical Skills
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Technologies &</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Expertise
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
              experiences.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6">
              Get In Touch
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Let's create</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                something amazing
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to bring your ideas to life? Let's discuss your project and explore how we can work together.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm mb-12"
            >
              <ContactForm />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <ContactCard
                icon={<Mail size={24} />}
                title="Email"
                value="ubaidrehman1840@gmail.com"
                link="mailto:ubaidrehman1840@gmail.com"
              />
              {/* <ContactCard
                icon={<Github size={24} />}
                title="GitHub"
                value="github.com/ubaid1840"
                link="https://github.com/ubaid1840"
              /> */}
              {/* <ContactCard
                icon={<Linkedin size={24} />}
                title="LinkedIn"
                value="linkedin.com/in/yourprofile"
                link="https://linkedin.com/in/yourprofile"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} Ubaid Ur Rehman. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {/* <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Linkedin size={20} />
              </a> */}
              <a
                href="mailto:your.email@example.com"
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await fetch('/api/msg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false)
      alert("Inquiry submitted, will get back to you soon")
    } catch (error) {
      alert("someting went wrong")
    }



  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-3">Name</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-white/40"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-3">Email</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-white/40"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-3">Subject</label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-white/40"
          placeholder="Project inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-3">Message</label>
        <textarea
          id="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all placeholder-white/40"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <Button
        disabled={loading}
        type="submit"
        size="lg"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 text-lg font-semibold transition-all duration-300"
      >
        {loading ? "Submitting..." : "Send Message"}
      </Button>
    </form>
  );
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
    >
      <div className="flex items-center mb-6">
        <div className="text-3xl mr-4">{skill.icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{skill.category}</h3>
          <p className="text-white/60 text-sm">{skill.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {skill.items.map((item: string, i: number) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
          >
            <SkillBadge name={item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ContactCard({
  icon,
  title,
  value,
  link,
}: { icon: React.ReactNode; title: string; value: string; link: string }) {
  return (
    <motion.a
      href={link}
      target={title !== "Email" ? "_blank" : undefined}
      rel={title !== "Email" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-white font-semibold mb-1">{title}</div>
        <div className="text-white/60 text-sm">{value}</div>
      </div>
    </motion.a>
  )
}
