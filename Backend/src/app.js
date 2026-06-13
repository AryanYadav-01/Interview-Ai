const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://interview-ai-nine-mu.vercel.app",
    "https://preplens.online",
    "https://www.preplens.online"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
// removed app.options line completely

const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

module.exports = app