"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Activity, BookOpen, Coffee, Heart, Camera } from "lucide-react"

export function Dashboard() {
  const widgets = [
    {
      title: "🏃‍♂️ Fitness Tracker",
      icon: Activity,
      gradient: "from-teal-500 to-sage-500",
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">This Week</span>
            <Badge className="bg-gradient-to-r from-teal-500 to-sage-500">5 runs 🔥</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Distance</span>
              <span className="text-sm font-bold text-teal-400">23.4 mi</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Avg Pace</span>
              <span className="text-sm font-bold text-sage-400">7:32/mi</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Calories</span>
              <span className="text-sm font-bold text-emerald-400">2,340 🔥</span>
            </div>
          </div>
          <p className="text-xs text-gray-500">Strava API Ready 📱</p>
        </div>
      ),
    },
    {
      title: "📍 Current Vibe",
      icon: MapPin,
      gradient: "from-sage-500 to-emerald-500",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-4 h-4 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-sm font-semibold text-emerald-400">El Paso, TX 🌵</span>
          </div>
          <p className="text-xs text-gray-400">University of Texas at El Paso</p>
          <div className="text-xs text-gray-400 space-y-1">
            <div>🌡️ 72°F • ☀️ Sunny</div>
            <div>🎯 Grinding for graduation Dec 2025</div>
            <div>💪 Probably at the gym or coding</div>
          </div>
        </div>
      ),
    },
    {
      title: "📚 Currently Obsessed With",
      icon: BookOpen,
      gradient: "from-emerald-500 to-sage-500",
      content: (
        <div className="space-y-3">
          <div className="text-sm">
            <p className="mb-1 text-emerald-400 font-semibold">📖 Reading:</p>
            <p className="text-gray-300">System Design Interview Vol 2</p>
          </div>
          <div className="text-sm">
            <p className="mb-1 text-teal-400 font-semibold">🚀 Learning:</p>
            <p className="text-gray-300">Kubernetes & DevOps</p>
          </div>
          <div className="text-sm">
            <p className="mb-1 text-sage-400 font-semibold">🎵 Playlist:</p>
            <p className="text-gray-300">Latin Pop + Coding Beats</p>
          </div>
        </div>
      ),
    },
    {
      title: "💖 What I Love",
      icon: Heart,
      gradient: "from-teal-500 to-emerald-500",
      content: (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {["🎤 Karaoke", "🏃‍♂️ Running", "💪 Lifting", "💃 Dancing"].map((hobby) => (
              <motion.div
                key={hobby}
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-gradient-to-r from-teal-500/20 to-emerald-500/20 px-2 py-1 rounded-full border border-teal-400/30"
              >
                {hobby}
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-2">🍰 Sweet tooth alert! Always down for dessert</div>
        </div>
      ),
    },
    {
      title: "📸 Recent Memories",
      icon: Camera,
      gradient: "from-sage-500 to-teal-500",
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-400/30 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={`/memory-${i}.jpg`}
                  alt={`Memory ${i}`}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement
                    if (fallback) {
                      fallback.style.display = "flex"
                    }
                  }}
                />
                <Camera className="w-4 h-4 text-emerald-400" />
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Latest adventures & achievements</p>
        </div>
      ),
    },
    {
      title: "☕ Status",
      icon: Coffee,
      gradient: "from-emerald-500 to-teal-500",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-3 h-3 bg-emerald-400 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-sm font-semibold text-emerald-400">Available for opportunities</span>
          </div>
          <div className="space-y-1 text-xs text-gray-400">
            <p>🎯 Seeking Summer 2025 internships</p>
            <p>💼 Open to full-time roles post-grad</p>
            <p>☕ Fueled by cold brew & ambition</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-sage-400 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          My Digital Dashboard ✨
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          A real-time glimpse into my world - what I&apos;m jamming to, crushing at the gym, and passionate about right now.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets.map((widget, index) => (
          <motion.div
            key={widget.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Card className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <motion.div
                    className={`p-2 rounded-lg bg-gradient-to-r ${widget.gradient}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <widget.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-white">{widget.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>{widget.content}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
