"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Meta Software Engineer Intern - Advertisements and Monetization",
      company: "Meta",
      period: "May 2025 - August 2025",
      location: "Remote",
      logo: "/images/meta-logo.svg",
      description:
        "Improved advertiser diagnostic workflows and enhanced platform usability through React, JavaScript, CSS, and GraphQL implementations.",
      achievements: [
        "Improved advertiser diagnostic workflow efficiency and shipped to 100% of users after successful A/B testing",
        "Increased the Integrations platform usability by 34% in onboarding completion rates by redesigning the page",
        "Enhanced system performance and maintainability by migrating legacy selectors to GraphQL queries",
        "Developed 'Share Diagnostic' feature using React, JavaScript, and CSS",
      ],
      technologies: ["React", "JavaScript", "CSS", "GraphQL", "Hack", "A/B Testing"],
      gradient: "from-emerald-primary to-emerald-secondary",
      side: "left",
      featured: true,
    },
    {
      title: "Security Operations Center Intern",
      company: "University of Texas at El Paso",
      period: "January 2024 - Present",
      location: "El Paso, TX",
      logo: "/images/utep-logo.png",
      description:
        "Developed comprehensive vulnerability assessment management systems and automated security workflows to enhance enterprise cybersecurity operations.",
      achievements: [
        "Reduced scan management time by 40% with React.js and Flask portal",
        "Achieved 100% reduction in manual email generation through Python automation",
        "Improved vulnerability remediation rates by 40% with automated SQL processing",
        "Integrated Nessus Manager for efficient network vulnerability monitoring",
      ],
      technologies: ["React.js", "Flask", "Python", "SQL", "Nessus", "ManageEngine", "Microsoft Outlook"],
      gradient: "from-chart-blue to-emerald-primary",
      side: "right",
    },
    {
      title: "International Collegiate Programming Contest Competitor (ICPC)",
      company: "University of Texas at El Paso",
      period: "November 2024",
      location: "El Paso, TX",
      logo: "/images/icpc-logo.png",
      description:
        "Pioneered UTEP's inaugural participation in ICPC as lead programmer, representing the university in Division 1 competition.",
      achievements: [
        "Lead programmer for UTEP's first-ever ICPC team",
        "Successfully completed Division 1 competition challenges",
        "Demonstrated advanced algorithmic problem-solving under time constraints",
        "Collaborated effectively in high-pressure team environment",
      ],
      technologies: ["Python", "Algorithms", "Data Structures", "Competitive Programming"],
      gradient: "from-chart-indigo to-emerald-secondary",
      side: "left",
    },
    {
      title: "Meta University Software Engineer Intern",
      company: "Meta",
      period: "June 2024 - August 2024",
      location: "Remote",
      logo: "/images/meta-logo.svg",
      description:
        "Architected a comprehensive full-stack running application ecosystem with ML-powered features and real-time social networking capabilities.",
      achievements: [
        "Built full-stack running app with React, Node.js, and Prisma ORM",
        "Reduced route planning time by 42% with ML-powered recommendations",
        "Implemented advanced pathfinding algorithms (A*, Greedy)",
        "Developed real-time social features with WebSocket integration",
        "Created challenge management and run club interaction systems",
      ],
      technologies: ["React", "Node.js", "Prisma", "Machine Learning", "WebSocket", "A* Algorithm"],
      gradient: "from-chart-purple to-emerald-primary",
      featured: true,
      side: "right",
    },
    {
      title: "Google Tech Exchange",
      company: "Google",
      period: "January 2024 - May 2024",
      location: "Remote",
      logo: "/images/google-logo.png",
      description:
        "Selected as one of 180 students nationwide for advanced coursework and mentorship in Applied Data Structures & Algorithms and Software Development Studio.",
      achievements: [
        "Completed advanced courses in Applied Data Structures & Algorithms",
        "Participated in Software Development Studio projects",
        "Received one-on-one mentorship from Google engineers",
        "Built professional network and received career planning support",
        "Collaborated in 3-person team to build personalized health app",
      ],
      technologies: ["Python", "Streamlit", "BigQuery", "Google AI API", "Data Analytics"],
      gradient: "from-chart-orange to-emerald-secondary",
      featured: true,
      side: "left",
    },
    {
      title: "AT&T Technology Academy",
      company: "AT&T",
      period: "June 2024 - July 2024",
      location: "Remote",
      logo: "/images/at&t-logo.svg",
      description:
        "Completed comprehensive training program in cutting-edge telecommunications and cloud technologies.",
      achievements: [
        "Mastered network troubleshooting techniques",
        "Gained expertise in 5G technology strategy",
        "Learned cloud computing fundamentals",
        "Participated in executive leadership sessions",
      ],
      technologies: ["5G Technology", "Cloud Computing", "Network Troubleshooting"],
      gradient: "from-chart-pink to-emerald-primary",
      side: "right",
    },
    {
      title: "Bloomberg Tech Lab on Campus",
      company: "Bloomberg",
      period: "April 2024",
      location: "El Paso, TX",
      logo: "/images/bloomberg-logo.png",
      description:
        "Selected as one of 40 students to collaborate with Bloomberg engineers on building financial technology applications.",
      achievements: [
        "Built robust message queue system using RabbitMQ",
        "Enhanced real-time data processing capabilities",
        "Mastered Docker containerization",
        "Gained financial domain knowledge (Tickers, Industry Sectors)",
      ],
      technologies: ["Python", "RabbitMQ", "Docker", "Financial Systems"],
      gradient: "from-emerald-secondary to-chart-blue",
      side: "left",
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
          My Journey 🚀
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          From competitive programming to Big Tech internships - here&apos;s how I&apos;ve grown as a developer and leader
        </p>
      </motion.div>

      {/* Alternating Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-primary via-emerald-secondary to-emerald-light rounded-full hidden md:block"></div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex ${exp.side === "left" ? "justify-start" : "justify-end"} flex-col md:flex-row`}
            >
              {/* Timeline dot */}
              {/* Desktop Timeline dot */}
              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white dark:border-gray-dark z-10 hidden md:block`}
                whileHover={{ scale: 1.5 }}
                animate={{
                  boxShadow: ["0 0 0 0 oklch(0.45 0.15 160 / 0.4)", "0 0 0 10px oklch(0.45 0.15 160 / 0)"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              
              {/* Mobile Timeline dot */}
              <motion.div
                className={`w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full border-2 border-white dark:border-gray-dark mx-auto mb-4 md:hidden`}
                whileHover={{ scale: 1.2 }}
              />

              <div className={`w-full md:w-5/12 ${exp.side === "left" ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                  <Card
                    className={`bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm hover:border-emerald-primary/50 transition-all duration-300 ${exp.featured ? "ring-2 ring-emerald-primary/30" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          {exp.logo && (
                            <div
                              className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${exp.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                            >
                              <img
                                src={exp.logo || "/placeholder.svg"}
                                alt={exp.company}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                style={{
                                  filter: exp.logo?.includes('.svg') ? 'brightness(0) invert(1)' : 'none'
                                }}
                                onError={(e) => {
                                  console.error(`Failed to load logo for ${exp.company}:`, exp.logo)
                                  e.currentTarget.style.display = "none"
                                }}
                                onLoad={() => {
                                  console.log(`Successfully loaded logo for ${exp.company}:`, exp.logo)
                                }}
                              />
                            </div>
                          )}
                          <div>
                            <CardTitle className="text-xl text-gray-text dark:text-white flex items-center gap-2">
                              {exp.title}
                              {exp.featured && (
                                <Badge className="bg-gradient-to-r from-chart-orange to-chart-pink text-white">
                                  <Award className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </CardTitle>
                            <p className="text-lg font-semibold bg-gradient-to-r from-emerald-primary to-emerald-secondary bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-emerald-secondary" />
                          <h4 className="font-semibold text-emerald-secondary">Key Achievements:</h4>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
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
                        <h4 className="font-semibold mb-3 text-emerald-primary">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Badge className={`bg-gradient-to-r ${exp.gradient} text-white border-0`}>{tech}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
