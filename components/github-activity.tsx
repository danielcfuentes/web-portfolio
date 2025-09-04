"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch } from "lucide-react"

interface GitHubStats {
  totalContributions: number
  currentStreak: number
  publicRepos: number
  activityLevel: string
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    currentStreak: 0,
    publicRepos: 0,
    activityLevel: "Loading..."
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Using GitHub's REST API to get public user data
        const response = await fetch('https://api.github.com/users/danielcfuentes')
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data')
        }

        const userData = await response.json()
        
        // Get public repos count
        const publicRepos = userData.public_repos || 42
        
        // For now, using the provided data (303 contributions this year)
        // In a real implementation, you'd need to use GitHub's GraphQL API with authentication
        // to get detailed contribution data
        const currentYearContributions = 303
        const totalContributions = 1247 // This would come from the API in a real implementation

        // Determine activity level based on contributions
        let activityLevel = "Active"
        if (currentYearContributions > 500) activityLevel = "Very Active"
        else if (currentYearContributions > 200) activityLevel = "Active"
        else if (currentYearContributions > 50) activityLevel = "Moderate"
        else activityLevel = "Getting Started"

        setStats({
          totalContributions: totalContributions,
          currentStreak: 23, // This would need to be calculated from the API
          publicRepos: publicRepos,
          activityLevel: activityLevel
        })
      } catch (err) {
        console.error('Error fetching GitHub stats:', err)
        setError('Failed to load GitHub data')
        // Fallback to static data
        setStats({
          totalContributions: 1247,
          currentStreak: 23,
          publicRepos: 42,
          activityLevel: "Very Active"
        })
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const getActivityPercentage = () => {
    const contributions = stats.totalContributions
    if (contributions > 1000) return 95
    if (contributions > 500) return 85
    if (contributions > 200) return 70
    if (contributions > 50) return 50
    return 25
  }

  return (
    <Card className="bg-gray-card dark:bg-gray-800/50 border-gray-border dark:border-gray-600 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <GitBranch className="w-6 h-6 text-chart-purple" />
          <h3 className="text-xl font-bold text-gray-text dark:text-white">GitHub Activity 📊</h3>
        </div>
        
        {loading && (
          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error} - Showing fallback data
          </div>
        )}

        {!loading && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Total Contributions</span>
              <motion.span 
                className="text-2xl font-bold text-emerald-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stats.totalContributions.toLocaleString()}
              </motion.span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">This Year</span>
              <span className="text-xl font-bold text-chart-orange">303 🔥</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Current Streak</span>
              <span className="text-xl font-bold text-chart-orange">{stats.currentStreak} days 🔥</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Public Repos</span>
              <span className="text-xl font-bold text-gray-text dark:text-white">{stats.publicRepos}</span>
            </div>
            <div className="w-full bg-gray-border dark:bg-gray-700 rounded-full h-2 mt-4">
              <motion.div
                className="bg-gradient-to-r from-emerald-primary to-emerald-secondary h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${getActivityPercentage()}%` }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              2024 Activity Level: {stats.activityLevel}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
