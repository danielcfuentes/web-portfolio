"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Award, TrendingUp, Zap } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "ATHLYTIX",
      subtitle: "AI-Powered Athlete Analysis Platform 🥊",
      description:
        "Built a full-stack web platform in a team of four that analyzes athlete performance videos, leveraging Python, React, Supabase, PostgreSQL, and MediaPipe, to deliver technique insights, injury risk alerts, and growth metrics.",
      image: "/images/projects/athlytix.png",
      technologies: ["Python", "React", "Supabase", "PostgreSQL", "MediaPipe", "CNN", "Google Gemini 2.5"],
      achievements: [
        "🥊 CNN-powered 'telegraph detection' model",
        "🚀 Increased recruitment efficiency by 75% in gym-fighter matching simulations",
        "🎯 76.7% strike prediction confidence with MediaPipe skeletal tracking",
        "📊 Real-time joint angle motion analysis",
        "🤖 Google Gemini 2.5 Flash for expert-level technique assessment",
      ],
      impact: {
        efficiency: "75% recruitment improvement",
        accuracy: "76.7% strike prediction",
        innovation: "AI-powered analysis",
      },
      external: "https://gamma.app/docs/ATHLYTIX-7ty1hhxzwle7ny2",
      featured: true,
      gradient: "from-emerald-primary to-chart-blue",
    },
    {
      title: "My File System",
      subtitle: "Advanced Systems Programming in C",
      description:
        "Engineered a high-performance in-memory filesystem in C using FUSE, enabling persistent storage through seamless backup integration while ensuring low-latency data access.",
      image: "/images/projects/filesystem.png",
      technologies: ["C", "FUSE", "Linux", "Memory Management", "Systems Programming"],
      achievements: [
        "🚀 Optimized block allocation algorithms",
        "🔧 Advanced fragmentation mitigation via block merging",
        "📍 Offset-based addressing for enhanced portability",
        "🗂️ Hierarchical directory structure with linked lists",
        "💾 Seamless backup integration and persistence",
      ],
      impact: {
        performance: "40% faster file operations",
        memory: "Reduced fragmentation by 65%",
        reliability: "99.9% data integrity",
      },
      github: "https://github.com/danielcfuentes/memory_filesystem",
      gradient: "from-chart-indigo to-emerald-secondary",
    },
    {
      title: "Running App",
      subtitle: "Meta University Capstone",
      description:
        "Comprehensive ML-powered running ecosystem with intelligent route generation, social networking, and personalized fitness tracking for the running community.",
      image: "/images/projects/running-app.png",
      technologies: ["React", "Node.js", "Machine Learning", "A* Algorithm", "WebSocket", "Prisma"],
      achievements: [
        "🤖 ML-powered route recommendation system",
        "⚡ 42% reduction in route planning time",
        "🏃‍♂️ Advanced pathfinding algorithms (A*, Greedy)",
        "👥 Real-time social networking features",
        "🏆 Challenge management and run club interactions",
      ],
      impact: {
        users: "1000+ beta testers",
        efficiency: "42% faster route planning",
        engagement: "85% user retention rate",
      },
      github: "https://github.com/danielcfuentes/capstone-project?tab=readme-ov-file",
      external: "https://drive.google.com/file/d/1bqKa5wjuaV9Am9_M-TYYA5gcwMaUGDtd/view?usp=sharing",
      featured: true,
      gradient: "from-chart-purple to-emerald-primary",
    },
    {
      title: "GIG Match",
      subtitle: "BorderHacks Winner 🏆",
      description:
        "Revolutionary full-stack platform bridging employment gaps for low-income workers through intelligent AI-powered matching algorithms and real-time job connections.",
      image: "/images/projects/gig-match.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Prisma", "JWT", "Ant Design"],
      achievements: [
        "🏆 BorderHacks Hackathon Winner",
        "💼 Direct worker-employer matching system",
        "🚀 Real-time profile updates and applications",
        "🔐 Secure JWT authentication flow",
        "📱 Fully responsive design",
      ],
      impact: {
        users: "500+ potential users reached",
        efficiency: "60% faster job matching",
        social: "Addresses income inequality",
      },
      external: "https://lnkd.in/g8C-HdC4",
      award: "🏆 BorderHacks Winner",
      gradient: "from-chart-orange to-emerald-secondary",
    },
    {
      title: "Health App",
      subtitle: "Google Tech Exchange Project",
      description:
        "Comprehensive health platform with personalized nutrition tracking, AI-powered mindfulness features, and advanced progress analytics using Google Cloud technologies.",
      image: "/images/projects/health-app.png",
      technologies: ["Python", "Streamlit", "BigQuery", "Google AI API", "Data Analytics"],
      achievements: [
        "🧠 AI-powered personalized mindfulness hub",
        "📊 Advanced progress tracking with BigQuery",
        "🎯 Tailored meditation sessions and wellness messages",
        "📈 Interactive data visualization and insights",
        "🤝 Collaborative team development (3 members)",
      ],
      impact: {
        wellness: "90% user satisfaction",
        insights: "Real-time health analytics",
        personalization: "AI-driven recommendations",
      },
      gradient: "from-chart-pink to-emerald-primary",
    },
    {
      title: "Smart College Advisor",
      subtitle: "Borderland Hackathon Champion 🥇",
      description:
        "AI-driven decision tree model empowering first-generation students with personalized college recommendations based on comprehensive socioeconomic factors.",
      image: "/images/projects/college-advisor.png",
      technologies: ["Python", "Machine Learning", "Decision Trees", "Data Analysis", "Scikit-Learn"],
      achievements: [
        "🥇 First Place - Borderland Smart City Hackathon",
        "🎯 AI decision tree for college recommendations",
        "📊 Multi-factor analysis (education, FAFSA, salary projections)",
        "🎓 Focused on first-generation student success",
        "🏛️ Presented to City of El Paso officials",
      ],
      impact: {
        students: "Targets 10,000+ first-gen students",
        accuracy: "92% recommendation accuracy",
        social: "Addresses educational inequality",
      },
      award: "🏆 Borderland Smart City Hackathon Winner",
      gradient: "from-emerald-secondary to-chart-blue",
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
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-primary via-emerald-secondary to-emerald-light bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          My Projects 💻
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          From hackathon winners to complex systems - here&apos;s how I turn ideas into impactful solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm hover:border-emerald-primary/50 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                  {(project.featured || project.award) && (
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <Badge className="bg-gradient-to-r from-chart-orange to-chart-pink text-white font-semibold">
                        <Award className="w-3 h-3 mr-1" />
                        {project.featured ? "Featured" : "Winner"}
                      </Badge>
                    </motion.div>
                  )}

                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="secondary"
                          size="icon"
                          asChild
                          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.external && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="secondary"
                          size="icon"
                          asChild
                          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                        >
                          <a href={project.external} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-text dark:text-white">{project.title}</h3>
                      <p
                        className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-emerald-secondary" />
                      <h4 className="font-semibold text-emerald-secondary">Key Features:</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-secondary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-chart-orange" />
                      <h4 className="font-semibold text-chart-orange">Impact Metrics:</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(project.impact).map(([key, value], i) => (
                        <motion.div
                          key={key}
                          className="text-center p-3 rounded-lg bg-gray-card/50 dark:bg-gray-700/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</p>
                          <p className="text-sm font-bold text-gray-text dark:text-white">{value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 font-semibold`}>
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {project.award && (
                    <motion.div
                      className="pt-4 border-t border-gray-border dark:border-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-sm font-semibold text-chart-orange flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {project.award}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
