"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  highlightClass?: string
  highlightWords?: string[]
  delay?: number
}

export default function AnimatedText({
  text,
  className,
  highlightClass,
  highlightWords = [],
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ")

  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  // Animation variants for each word
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div className={cn("flex flex-wrap", className)} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn("mr-2", highlightWords.includes(word) ? highlightClass : "")}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
