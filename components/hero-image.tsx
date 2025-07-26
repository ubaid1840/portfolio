"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create the glowing beam effect
    let animationFrameId: number
    let hue = 220 // Blue hue
    let time = 0

    const render = () => {
      time += 0.01

      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
      gradient.addColorStop(1, "rgba(10, 10, 30, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw multiple beams
      drawBeam(ctx, canvas.width * 0.7, canvas.height, hue, time)
      drawBeam(ctx, canvas.width * 0.3, canvas.height, hue + 30, time + 1)
      drawBeam(ctx, canvas.width * 0.9, canvas.height, hue - 30, time + 2)

      // Add some noise texture
      addNoiseTexture(ctx, canvas.width, canvas.height)

      // Animate
      hue = (hue + 0.1) % 360
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ position: "absolute", top: 0, left: 0 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
    </motion.div>
  )
}

function drawBeam(ctx: CanvasRenderingContext2D, x: number, height: number, hue: number, time: number) {
  const beamWidth = 50 + Math.sin(time) * 20

  // Create a curved path for the beam
  const curveAmplitude = 100
  const curveFrequency = 0.005

  ctx.beginPath()
  ctx.moveTo(x, 0)

  for (let y = 0; y < height; y += 5) {
    const xOffset = Math.sin(y * curveFrequency + time) * curveAmplitude
    ctx.lineTo(x + xOffset, y)
  }

  // Draw the beam with gradient
  const beamGradient = ctx.createLinearGradient(x - beamWidth / 2, 0, x + beamWidth / 2, 0)
  beamGradient.addColorStop(0, `hsla(${hue}, 100%, 50%, 0)`)
  beamGradient.addColorStop(0.5, `hsla(${hue}, 100%, 70%, 0.8)`)
  beamGradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`)

  ctx.strokeStyle = beamGradient
  ctx.lineWidth = beamWidth
  ctx.stroke()

  // Add glow effect
  ctx.shadowBlur = 30
  ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.8)`

  // Draw particles along the beam
  // for (let i = 0; i < 20; i++) {
  //   const y = Math.random() * height
  //   const xOffset = Math.sin(y * curveFrequency + time) * curveAmplitude
  //   const particleX = x + xOffset + (Math.random() - 0.5) * beamWidth
  //   const size = Math.random() * 3 + 1

  //   ctx.fillStyle = `hsla(${hue}, 100%, 80%, ${Math.random() * 0.7})`
  //   ctx.beginPath()
  //   ctx.arc(particleX, y, size, 0, Math.PI * 2)
  //   ctx.fill()
  // }

  // Reset shadow
  ctx.shadowBlur = 0
}

function addNoiseTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    // Add subtle noise
    if (Math.random() < 0.01) {
      data[i] = data[i] * 0.95
      data[i + 1] = data[i + 1] * 0.95
      data[i + 2] = data[i + 2] * 0.95
    }
  }

  ctx.putImageData(imageData, 0, 0)
}
