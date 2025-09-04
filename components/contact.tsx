"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email content
      const emailSubject = encodeURIComponent(formData.subject || 'Message from Portfolio')
      const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `)
      
      // Open user's email client
      const mailtoLink = `mailto:danielscollege04@gmail.com?subject=${emailSubject}&body=${emailBody}`
      window.open(mailtoLink, '_blank')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Show success message (you could add a toast notification here)
      alert('Email client opened! Please send your message.')
    } catch (error) {
      console.error('Error sending email:', error)
      alert('There was an error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "danielscollege04@gmail.com",
      color: "text-emerald-primary",
      href: "mailto:danielscollege04@gmail.com",
    },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/danielcfuentes", color: "hover:text-gray-600" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/danielcfuentes",
      color: "hover:text-emerald-primary",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/dani.fountains",
      color: "hover:text-chart-pink",
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
          Let&apos;s Connect! 🚀
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Ready to collaborate, discuss opportunities, or just chat about tech? I&apos;d love to hear from you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-text dark:text-white text-2xl">Contact Information 📞</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-card/50 dark:bg-gray-700/30 hover:bg-gray-card dark:hover:bg-gray-700/50 transition-all"
                  >
                    <div>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-text dark:text-white">{contact.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-border dark:border-gray-600">
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className={`border-2 border-gray-border dark:border-gray-600 ${social.color} transition-all duration-300 hover:border-current`}
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}>
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
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
        >
          <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-text dark:text-white text-2xl">Send a Message 💌</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-white dark:bg-gray-800/50 border-gray-border dark:border-gray-600 text-gray-text dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-emerald-primary"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white dark:bg-gray-800/50 border-gray-border dark:border-gray-600 text-gray-text dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-emerald-primary"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-white dark:bg-gray-800/50 border-gray-border dark:border-gray-600 text-gray-text dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-emerald-primary"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello! 👋"
                    rows={5}
                    className="bg-white dark:bg-gray-800/50 border-gray-border dark:border-gray-600 text-gray-text dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-emerald-primary"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-primary to-emerald-secondary hover:from-emerald-secondary hover:to-emerald-light text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Opening Email...' : 'Send Message 🚀'}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
