import express from "express"

import * as dotenv from "dotenv" 
dotenv.config()

import { db } from "./database"

import { router } from "./routes"

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, async () => {
    await db.sync()
    console.log("Server is running")
})



