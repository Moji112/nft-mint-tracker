import { useState, useEffect } from 'react'
import { FiBarChart2, FiTrendingUp, FiDollarSign, FiZap } from 'react-icons/fi'

export default function Analytics() {
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/analytics')
      const data = await response.json()
      setAnalytics(data)
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold gradient-text mb-2">Analytics</h1>
        <p className="text-gray-400">NFT market insights and statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Total Volume (24h)</p>
              <p className="text-3xl font-bold text-accent">1,234 ETH</p>
            </div>
            <FiDollarSign className="text-accent text-4xl opacity-30" />
          </div>
        </div>

        <div className="glass rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">New Collections</p>
              <p className="text-3xl font-bold text-accent">89</p>
            </div>
            <FiZap className="text-accent text-4xl opacity-30" />
          </div>
        </div>

        <div className="glass rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Verified Contracts</p>
              <p className="text-3xl font-bold text-success">45</p>
            </div>
            <FiTrendingUp className="text-success text-4xl opacity-30" />
          </div>
        </div>

        <div className="glass rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Scam Alerts</p>
              <p className="text-3xl font-bold text-danger">12</p>
            </div>
            <FiBarChart2 className="text-danger text-4xl opacity-30" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Risk Distribution</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Very Low Risk</span>
                <span className="text-success">45%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Low Risk</span>
                <span className="text-accent">34%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '34%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Medium Risk</span>
                <span className="text-warning">16%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: '16%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">High Risk</span>
                <span className="text-danger">5%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-danger h-2 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Top Metrics</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Avg Floor Price</span>
              <span className="text-accent font-semibold">0.82 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Highest Volume</span>
              <span className="text-accent font-semibold">428 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Trades</span>
              <span className="text-accent font-semibold">12,340</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Unique Sellers</span>
              <span className="text-accent font-semibold">3,245</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Unique Buyers</span>
              <span className="text-accent font-semibold">2,841</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}