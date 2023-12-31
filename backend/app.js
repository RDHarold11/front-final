import express from "express"
import cors from "cors"
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})