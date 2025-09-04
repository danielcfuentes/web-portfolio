"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Calendar, Instagram } from "lucide-react"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, oklch(0.45 0.15 160 / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, oklch(0.6 0.2 220 / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, oklch(0.55 0.2 270 / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 30%, oklch(0.65 0.2 290 / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Profile Image Section */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-primary via-emerald-secondary to-emerald-light p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/dcfuentes@miners.utep.edu-9adeaa4b.jpg"
                  alt="Daniel Camilo Fuentes"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: 'center 30%' }}
                  onError={(e) => {
                    console.error("Failed to load profile image")
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>
            </div>
          </div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-primary via-emerald-secondary to-emerald-light bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            Daniel Camilo Fuentes
          </motion.h1>

          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Computer Science Student 🎓",
                2000,
                "Full-Stack Developer 💻",
                2000,
                "Problem Solver 🧩",
                2000,
                "Community Leader 👥",
                2000,
                "Meta Software Engineer Intern 🚀",
                2000,
                "ICPC Competitor 🏆",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-300">
            <motion.div
              className="flex items-center gap-2 bg-gray-card dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-border dark:border-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-4 h-4 text-emerald-primary" />
              <span>Graduating Dec 2025 🎓</span>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { icon: Github, href: "https://github.com/danielcfuentes", color: "hover:text-gray-600" },
              { icon: Linkedin, href: "https://linkedin.com/in/danielcfuentes", color: "hover:text-emerald-primary" },
              { icon: Instagram, href: "https://instagram.com/dani.fountains", color: "hover:text-chart-pink" },
              { icon: Mail, href: "mailto:danielscollege04@gmail.com", color: "hover:text-emerald-secondary" },
            ].map((social, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className={`border-2 border-gray-border dark:border-gray-600 ${social.color} transition-all duration-300 hover:border-current`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-8 h-12 border-2 border-emerald-primary rounded-full flex justify-center bg-gradient-to-b from-transparent to-emerald-primary/10">
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-emerald-primary to-emerald-secondary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </div>
  )
}
