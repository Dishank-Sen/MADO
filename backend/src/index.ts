import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/ping", (req, res) => {
    return res.send("pong")
})

app.listen(port, () => {
    console.log("server running on port ", port)
})