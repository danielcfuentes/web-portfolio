"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, TrendingUp, Heart, Presentation, Globe, Linkedin, Instagram } from "lucide-react"

export function Leadership() {
  const stats = [
    { label: "Students Helped", value: "100+", icon: Users, color: "text-emerald-primary" },
    { label: "Organization Awards", value: "2x", icon: Award, color: "text-chart-blue" },
    { label: "Success Rate", value: "95%", icon: TrendingUp, color: "text-chart-orange" },
    { label: "Community Impact", value: "High", icon: Heart, color: "text-chart-pink" },
  ]

  const activities = [
    { name: "Mock interview sessions", icon: "🎯", description: "Personalized technical interview prep" },
    { name: "LeetCode problem-solving workshops", icon: "💻", description: "Algorithm and data structure mastery" },
    { name: "Resume review and feedback", icon: "📄", description: "Professional document optimization" },
    { name: "Career preparation events", icon: "🚀", description: "Industry readiness training" },
    { name: "Networking opportunities", icon: "🤝", description: "Professional connection building" },
    { name: "STEM outreach to Hispanic youth", icon: "🌟", description: "Community empowerment initiatives" },
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
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-primary via-emerald-secondary to-emerald-light bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          Leadership & Impact 👥
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Building community, empowering the next generation, and creating lasting change in tech education
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-emerald-primary to-emerald-secondary rounded-xl shadow-lg">
                  <img
                    src="/images/cic-logo.png"
                    alt="Coding Interview Club"
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    onError={(e) => {
                      console.error("Failed to load CIC logo:", "/images/cic-logo.png")
                      e.currentTarget.style.display = "none"
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement
                      if (fallback) {
                        fallback.style.display = "flex"
                      }
                    }}
                    onLoad={() => {
                      console.log("Successfully loaded CIC logo")
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-text dark:text-white">
                    President, Coding Interview Club
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">August 2024 - Present</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Leading the Coding Interview Club to unprecedented success, transforming it into UTEP&apos;s premier tech
                  career development organization. Our mission: empowering students to land their dream tech roles while
                  building a supportive, inclusive community.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-chart-orange to-chart-pink text-white font-semibold px-3 py-1">
                    <Award className="w-4 h-4 mr-2" />
                    Organization of the Year (2x Winner)
                  </Badge>
                  <Badge className="bg-gradient-to-r from-emerald-primary to-emerald-secondary text-white font-semibold px-3 py-1">
                    <Globe className="w-4 h-4 mr-2" />
                    GMIS Conference Presenter
                  </Badge>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <a
                    href="https://www.linkedin.com/company/the-coding-interview-club/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/codinginterviewclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Presentation className="w-5 h-5 text-emerald-primary" />
                  <h4 className="font-semibold text-emerald-primary">Key Activities & Programs:</h4>
                </div>
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-card/50 dark:bg-gray-700/30 hover:bg-gray-card dark:hover:bg-gray-700/50 transition-all"
                    >
                      <span className="text-lg">{activity.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-text dark:text-white">{activity.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-text dark:text-white">Impact by Numbers 📊</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gray-card/50 dark:bg-gray-700/50 hover:bg-gray-card dark:hover:bg-gray-700/70 transition-all"
                  >
                    <div>
                      <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-text dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-text dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-chart-blue" />
                Community Focus & Outreach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-emerald-primary/5 to-chart-blue/5 border border-emerald-primary/20"
                >
                  <div className="flex items-center gap-2 mb-2">

                    <Presentation className="w-5 h-5 text-emerald-primary" />
                    <span className="font-semibold text-emerald-primary">GMIS Conference Presentation</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our organization presented at the{" "}
                    <span className="font-semibold text-gray-text dark:text-white">
                      Great Minds in STEM (GMIS) Conference
                    </span>
                    , sharing our successful strategies for helping students across the United States land tech
                    internships and full-time roles.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-chart-pink/5 to-chart-orange/5 border border-chart-pink/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-chart-pink" />
                    <span className="font-semibold text-chart-pink">STEM Outreach</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Promoting STEM education among{" "}
                    <span className="font-semibold text-gray-text dark:text-white">Hispanic youth</span> through
                    community partnerships, mentorship programs, and inspiring the next generation to pursue careers in
                    technology.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-chart-orange/5 to-emerald-primary/5 border border-chart-orange/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-chart-orange" />
                    <span className="font-semibold text-chart-orange">Career Development Excellence</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Providing comprehensive support from technical interview preparation to professional networking,
                    with a <span className="font-semibold text-gray-text dark:text-white">95% success rate</span> in
                    helping students secure their target roles.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
