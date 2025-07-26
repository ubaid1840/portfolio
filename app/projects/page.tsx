"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Eye, Lock, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"



export default function AllProjectsPage() {



  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  const projects = [
    {
      id: 1,
      title: "SENFENG Pakistan CRM",
      description: "A full-stack business management web app streamlining team management, customer handling, payments, and task tracking in one platform.",
      image: "/senfeng_web.png?height=400&width=600&text=E-Commerce Platform",
      category: "Web Development",
      year: "2025",
      technologies: ["Next.js", "Shadcn", "PostgreSql", "Node.js", "Firebase", "Supabase"],
      liveUrl: "http://app.senfenglaserpk.com/",
      demoCredentials: {
        user: {
          email: "ubaidrehman1840@gmail.com",
          password: "12345678"
        },
        admin: {
          email: "m.adeelahsan@hotmail.com",
          password: "m.adeelahsan"
        }
      },
      features: ["Google login", "Firebase authentication", "Google maps", "Team tracking", "Customers & payments", "Real-time progress", "Role-based dashboards"]
    },
    {
      id: 2,
      title: "SENFENG Mobile",
      description: "Manage customers, complaints, commissions, team messaging, site visits, attendance and live location all in one place.",
      image: "/senfeng_mobile.png?height=400&width=600&text=Social Media Dashboard",
      category: "Mobile App Development",
      year: "2025",
      technologies: ["React Native", "Expo", "EAS", "Firebase", "Supabase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.octasoft.adcrm&pcampaignid=web_share",
      demoCredentials: {
        user: {
          email: "ubaidrehman1840@gmail.com",
          password: "12345678"
        },
        admin: {
          email: "m.adeelahsan@hotmail.com",
          password: "m.adeelahsan"
        }
      },
      features: ["Attendance", "Live location", "Google login", "Real-time messaging", "Site visits", "Complaints"]
    },
    {
      id: 3,
      title: "TMS Blink Sales",
      description: "A web platform tailored for immigration consultants to manage leads, assign tasks, send emails, and track overall business operations efficiently.",
      image: "/tms.png?height=400&width=600&text=Task Management",
      category: "Web Development",
      year: "2024",
      technologies: ["React", "Typescript", "Node.js", "MySql", "Socket.io"],

      liveUrl: "https://tms.blink-sales.com/",
      demoCredentials: {
        admin: {
          email: "system",
          password: "serenity"
        }
      },
      features: ["CRM", "Immigration services", "Leads management", "Facebook leads", "Payment tracking"]
    },
    {
      id: 4,
      title: "SaaS Hosital Management System",
      description: "A SaaS-based Hospital Management System to streamline hospital operations. It supports staff onboarding, patient management, and both walk-in and online consultations.",
      category: "Web Development",
      image: "/hospital.png?height=600&width=800&text=E-Commerce Platform",
      year: "2024",
      technologies: ["Next.js", "Chakra UI", "PostgreSql", "Stream", "AI", "Firebase"],
      liveUrl: "https://hospital-management-theta-nine.vercel.app/",
      demoCredentials: {
        admin: {
          email: "centrediagnostic@gmail.com",
          password: "1234qwer"
        },
        insurance: {
          email: "cnamgs@gmail.com",
          password: "1234qwer"
        },
        doctor: {
          email: "audrey.kamdeu@gmail.com",
          password: "1234qwer"
        },
        frontdesk: {
          email: "mistral@gmail.com",
          password: "1234qwer"
        }
      },
      features: ["Hospital registration", "Walk-in and online patient consultation", "Patient records", "Appointment scheduling", "Automatic insurance document generation", "Role-based dashboards", "Scalable SaaS architecture", "AI voice-based diagnosis summary"]
    },
    {
      id: 5,
      title: "Quiz Master",
      description: "A Quiz Master is a thrilling trivia game packed with exciting features like multiple choice questions, picture-matching puzzles, and a spin wheel of fortune to keep things fresh and entertaining!",
      image: "/quiz.png?height=400&width=600&text=Learning Management System",
      category: "Mobile App Development",
      year: "2024",
      technologies: ["React Native", "Supabase", "Firebase", "Typescript"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.octasoft.quiz",
      demoCredentials: {
        signup: {
          email: "youremail@domain.com",
          password: "yourpassword"
        },

      },
      features: ["Quiz", "Trivia", "Daily Rewards", "Google ads", "Wheel of fortune", "Match the images"]
    },
    {
      id: 6,
      title: "Chess Game",
      description: "An online multiplayer chess game based on html5 and firebase.",
      image: "/chess.png?height=400&width=600&text=Food Delivery App",
      category: "Game Development",
      year: "2024",
      technologies: ["HTML5", "Node.js", "firebase", "Socket.io",],
      liveUrl: "https://chess-game-f1pi.onrender.com",
      demoCredentials: {
        player1: {
          link: `https://chess-game-f1pi.onrender.com/?roomID=${randomNumber}&playerID=1&isHost=true&time=1`,
        },
        player2: {
          link: `https://chess-game-f1pi.onrender.com/?roomID=${randomNumber}&playerID=2&time=1`,
        }
      },
      features: ["Chess game", "Multiplayer", "Modern stripes", "Animation"]
    },
    {
      id: 7,
      title: "UNO Game",
      description: "An online multiplayer classic UNO card game based on html5 and socket.",
      image: "/uno.png?height=400&width=600&text=Food Delivery App",
      category: "Game Development",
      year: "2024",
      technologies: ["HTML5", "Node.js", "MongoDB", "Socket.io",],
      liveUrl: "https://uno-game-d3oe.onrender.com/",
      demoCredentials: {
        player1: {
          link: `https://uno-game-d3oe.onrender.com/?roomID=${randomNumber}&playerID=1&playerName=Player1&numOfPlayers=2&isHost=true`,
        },
        player2: {
          link: `https://uno-game-d3oe.onrender.com/?roomID=${randomNumber}&playerID=2&playerName=Player2`,
        }
      },
      features: ["UNO game", "Multiplayer", "Modern stripes", "Animation", "2-4 players"]
    },
    {
      id: 8,
      title: "Sathee",
      description: "Sathee is a supportive companion for the elderly, offering an engaging environment through text and video-based interactions. Helping to alleviate loneliness and promote emotional health.",
      image: "/sathee.png?height=400&width=600&text=Learning Management System",
      category: "Web Development",
      year: "2023",
      technologies: ["Next.js", "Firebase", "Node.js", "Firestore", "chakra UI"],
      liveUrl: "https://caregiver-black.vercel.app/",
      demoCredentials: {
        caregiver: {
          email: "famu@gmail.com",
          password: "12345678"
        },
        elderly : {
          email : "zainu@gmail.com",
          password : "12345678"
        }

      },
      features: ["Health care", "Medical records", "Reminders", "Realtime notificaiton", "Emergency notification",]
    },
     {
      id: 9,
      title: "Soccer Game",
      description: "An online multiplayer soccer game based on html5 and socket.",
      image: "/soccer.png?height=400&width=600&text=Food Delivery App",
      category: "Game Development",
      year: "2023",
      technologies: ["HTML5", "Node.js", "Firebase", "Socket.io",],
      liveUrl: "https://soccer-game.onrender.com/",
      demoCredentials: {
        player1: {
          link: `https://soccer-game.onrender.com/?roomID=${randomNumber}&playerID=1&playerName=Player1&numOfPlayers=2&isHost=true`,
        },
        player2: {
          link: `https://soccer-game.onrender.com/?roomID=${randomNumber}&playerID=2&playerName=Player2`,
        }
      },
      features: ["Soccer game", "Multiplayer", "Modern stripes", "Animation",]
    },

     {
      id: 10,
      title: "Soccer Head Game",
      description: "An online multiplayer soccer head game based on construct 3d",
      image: "/soccer_head.png?height=400&width=600&text=Food Delivery App",
      category: "Game Development",
      year: "2023",
      technologies: ["construc 3d", "HTML5", "Node.js", "Socket.io",],
      liveUrl: "https://soccer-head-game.onrender.com",
      demoCredentials: {
        player1: {
          link: `https://soccer-head-game.onrender.com/?roomname=${randomNumber}&playerid=1`,
        },
        player2: {
          link: `https://soccer-head-game.onrender.com/?roomname=${randomNumber}&playerid=2`,
        }
      },
      features: ["Soccer head game", "Multiplayer", "Construc 3d",]
    },
  ]



  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full p-3">
                <ArrowLeft size={20} className="mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="text-2xl font-bold">
              <span className="text-white">Recent</span>
              <span className="text-blue-400"> Projects</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Live</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore my complete portfolio of live applications. Each project includes demo credentials for testing.
              Please note that these are live applications - avoid making permanent changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectShowcase key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Warning Notice */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-t border-red-500/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-red-500/10 border-red-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                  <CardTitle className="text-2xl font-bold text-red-400">Important Notice</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-white/90 leading-relaxed">
                  <strong>Please be respectful when testing these applications.</strong> These are live demo environments that other visitors may also be exploring.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      What you can do:
                    </h4>
                    <ul className="text-white/80 space-y-1 ml-4">
                      <li>• Browse and explore all features</li>
                      <li>• Test user interactions and workflows</li>
                      <li>• View sample data and content</li>
                      <li>• Experience the full functionality</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      Please avoid:
                    </h4>
                    <ul className="text-white/80 space-y-1 ml-4">
                      <li>• Deleting existing data or content</li>
                      <li>• Uploading inappropriate content</li>
                      <li>• Making permanent configuration changes</li>
                      <li>• Attempting to break the application</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-300 text-sm">
                    <strong>Note:</strong> Demo data is reset periodically to maintain the quality of the experience for all visitors.
                    If you encounter any issues or have questions about any project, feel free to contact me.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              Interested in working together? Let's discuss your next project.
            </p>
            <Link href="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectShowcase({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-12 items-start ${isEven ? "" : "lg:grid-flow-col-dense"}`}
    >
      {/* Project Image */}
      <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Category and Year Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-lg text-white/70 leading-relaxed mb-6">{project.description}</p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Key Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feature: string) => (
              <div key={feature} className="flex items-center text-white/70">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Lock className="h-5 w-5 text-blue-400 mr-2" />
            <h4 className="text-lg font-semibold text-white">Demo Credentials</h4>
          </div>
          <div className="grid gap-4">
            {Object.entries(project.demoCredentials).map(([role, credentials]: [string, any]) => (
              <div key={role} className="bg-white/5 rounded-lg p-4">
                <div className="text-sm font-medium text-blue-400 mb-2 capitalize">{role} Account</div>
                <div className="space-y-1 text-sm">
                  {credentials?.email &&
                    <div className="flex justify-between">
                      <span className="text-white/60">Email:</span>
                      <span className="text-white font-mono">{credentials.email}</span>
                    </div>
                  }
                  {credentials?.password &&
                    <div className="flex justify-between">
                      <span className="text-white/60">Password:</span>
                      <span className="text-white font-mono">{credentials.password}</span>
                    </div>
                  }
                  {credentials.link &&
                    <div className="flex justify-between">
                      <Button
                        onClick={() => window.open(credentials.link, "_blank")}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 transition-all duration-300 group"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Play</span>
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>

                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {!project.technologies.includes("HTML5")
          &&
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => window.open(project.liveUrl, "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 transition-all duration-300 group"
            >
              <Eye className="mr-2 h-4 w-4" />
              <span>Live Demo</span>
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        }
      </div>
    </motion.div>
  )
}
