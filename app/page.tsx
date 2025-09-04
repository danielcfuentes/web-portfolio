"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Leadership } from "@/components/leadership"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen bg-white text-gray-text">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-chart-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-chart-indigo/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section style={{ opacity }} className="min-h-screen relative overflow-hidden">
        <Hero />
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gray-card/30">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-20 bg-white">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 bg-gray-card/30">
        <Projects />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-12 md:py-20 bg-white">
        <Leadership />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-gray-card/30">
        <Contact />
      </section>
    </div>
  )
}
