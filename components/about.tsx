"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Flag, Code, Lightbulb, Award, BookOpen } from "lucide-react"

export function About() {
  const skills = [
    { name: "Python", color: "from-emerald-primary to-emerald-secondary" },
    { name: "JavaScript", color: "from-chart-blue to-emerald-primary" },
    { name: "Java", color: "from-emerald-secondary to-chart-indigo" },
    { name: "C", color: "from-chart-purple to-emerald-primary" },
    { name: "PostgreSQL", color: "from-chart-orange to-emerald-secondary" },
    { name: "HTML", color: "from-emerald-primary to-chart-blue" },
    { name: "CSS", color: "from-chart-indigo to-emerald-secondary" },
    { name: "Scala", color: "from-chart-pink to-emerald-primary" },
    { name: "MySQL", color: "from-emerald-secondary to-chart-purple" },
    { name: "PHP", color: "from-chart-orange to-emerald-primary" },
    { name: "Hack", color: "from-chart-blue to-emerald-secondary" },
  ]

  const tools = [
    { name: "React", color: "from-emerald-primary to-chart-blue" },
    { name: "Node.js", color: "from-chart-indigo to-emerald-secondary" },
    { name: "Express", color: "from-emerald-secondary to-chart-purple" },
    { name: "Prisma", color: "from-chart-pink to-emerald-primary" },
    { name: "Git", color: "from-chart-orange to-emerald-secondary" },
    { name: "Android Studio", color: "from-emerald-primary to-chart-indigo" },
    { name: "Docker", color: "from-chart-blue to-emerald-secondary" },
    { name: "Flutter", color: "from-chart-purple to-emerald-primary" },
    { name: "SQL SMS", color: "from-emerald-secondary to-chart-pink" },
    { name: "GraphQL", color: "from-chart-orange to-emerald-primary" },
  ]

  const coursework = [
    "Applied Data Structures",
    "Software Development Studio",
    "Operating Systems",
    "Computer Vision",
    "Software Engineering Requirements",
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
          About Me 🚀
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Get to know the person behind the code - my story, my passion, and what drives me every day
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">


                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 mb-6">
                  <Flag className="w-6 h-6 text-emerald-primary" />
                  <h3 className="text-2xl font-bold text-gray-text dark:text-white">My Story 🇲🇽</h3>
                </motion.div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    ¡Hola! I&apos;m Daniel, a proud Mexican-American from El Paso, Texas - right on the border where two
                    cultures beautifully collide. Growing up in a Hispanic household taught me the values of{" "}
                    <span className="text-emerald-primary font-semibold">familia</span>, hard work, and never forgetting
                    where you come from.
                  </p>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-gradient-to-r from-emerald-primary/5 to-chart-blue/5 p-4 rounded-lg border-l-4 border-emerald-primary"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-emerald-primary" />
                      <span className="font-semibold text-emerald-primary">Why Computer Science?</span>
                    </div>
                    <p className="text-sm">
                      I fell in love with CS because of the incredible{" "}
                      <span className="text-chart-blue font-semibold">freedom</span> it gives you - the power to have an
                      idea and actually bring it to life through code. There&apos;s something magical about turning thoughts
                      into reality with just a keyboard and determination.
                    </p>
                  </motion.div>

                  <p>
                    My journey has taken me from competitive programming at UTEP to internships at Meta and Google, but
                    I&apos;ve never lost sight of my mission: using technology to lift up my community and create
                    opportunities for others who look like me.
                  </p>
                </div>

                <motion.div
                  className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-border dark:border-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-primary" />
                    <span>Major GPA: 3.93/4.00 📚</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-chart-pink" />
                    <span>Tech & Community 💖</span>
                  </div>
                </motion.div>
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
          {/* Education */}
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/utep-logo.png"
                    alt="UTEP"
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                  <GraduationCap className="w-6 h-6 text-emerald-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-text dark:text-white">Education 🎓</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-emerald-primary">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-chart-blue">Minor in Mathematics</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The University of Texas at El Paso</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Anticipated: December 2025</p>
                  <p className="text-sm font-semibold text-emerald-secondary">Major GPA: 3.93/4.00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Relevant Coursework */}
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-chart-indigo" />
                <h3 className="text-xl font-bold text-gray-text dark:text-white">Relevant Coursework 📚</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-emerald-primary/10 text-emerald-primary border border-emerald-primary/20 font-medium px-3 py-1">
                      {course}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>



          {/* Programming Languages */}
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-emerald-primary" />
                <h3 className="text-xl font-bold text-gray-text dark:text-white">Programming Languages 💻</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge className={`bg-gradient-to-r ${skill.color} text-white border-0 font-semibold px-3 py-1`}>
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-chart-blue" />
                <h3 className="text-xl font-bold text-gray-text dark:text-white">Tools & Technologies 🛠️</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge className={`bg-gradient-to-r ${tool.color} text-white border-0 font-semibold px-3 py-1`}>
                      {tool.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
