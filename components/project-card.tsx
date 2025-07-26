"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  category?: string
  year?: string
  link :string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:grid-flow-col-dense"}`}
    >
      {/* Image */}
      <motion.div
        className={`relative ${isEven ? "" : "md:col-start-2"}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        </div>
        {project.category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
              {project.category}
            </span>
          </div>
        )}
        {project.year && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
              {project.year}
            </span>
          </div>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        className={`space-y-6 ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-lg text-white/70 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {/* <Button
            variant="outline"
            className="border border-white/20 text-white hover:bg-white/5 rounded-xl px-6 py-3 transition-all duration-300 bg-transparent"
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button> */}
          <Button onClick={()=> handleDemo(project.link)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 transition-all duration-300">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function handleDemo(link : string){
  window.open(link, "_blank")
}
