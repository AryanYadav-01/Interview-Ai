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
app.options("*", cors(corsOptions))   // fixed — was passing cors() without config

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

module.exports = app