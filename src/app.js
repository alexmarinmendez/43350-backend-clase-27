import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())

// app.use((req, res, next) => {
    // res.set('Access-Control-Allow-Origin', '*')
    // res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/')
    // res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5000/')
    // next()
// })

app.use(cors())

app.get('/', (req, res) => {
    res.json({ status: 'ok' })
})

app.listen(8080, () => console.log('Server Up!'))