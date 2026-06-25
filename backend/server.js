import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import http from 'http'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/mints/live', (req, res) => {
  res.json({
    mints: [
      {
        name: 'Sample NFT Collection',
        contractAddress: '0x1234...',
        floorPrice: 0.5,
        volume24h: 12.4,
        itemCount: 5000,
        scamScore: 15,
        isVerified: true,
        openseaLink: 'https://opensea.io'
      }
    ]
  })
})

app.get('/api/degen/projects', (req, res) => {
  res.json({
    projects: [
      {
        name: 'Micro Apes',
        contractAddress: '0x5678...',
        floorPrice: 0.02,
        volume24h: 0.8,
        itemCount: 2000,
        scamScore: 35,
        isVerified: false,
        openseaLink: 'https://opensea.io'
      }
    ]
  })
})

app.get('/api/trending', (req, res) => {
  res.json({
    trending: [
      { name: 'Pudgy Penguins', mentions: 1240, sentiment: 'Bullish', score: 0.92 },
      { name: 'Azuki', mentions: 1050, sentiment: 'Bullish', score: 0.85 }
    ]
  })
})

app.get('/api/analytics', (req, res) => {
  res.json({
    volume24h: 1234.5,
    newCollections: 89,
    verifiedContracts: 45,
    scamAlerts: 12
  })
})

// WebSocket connection
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`\n🚀 NFT Mint Tracker running on http://localhost:${PORT}`)
  console.log(`📊 WebSocket connected on ws://localhost:${PORT}\n`)
})