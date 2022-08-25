const express = require('express')
const app = express()

const calculator = (x, y, opp) => {
    switch (opp) {
        case "add":
            return eval(x) + eval(y)
        case "sub":
            return eval(x) - eval(y)
        case "div":
            return eval(x) / eval(y)
        case "mult":
            return eval(x) * eval(y)
    }
}

app.get('/calculate',(req, res) => {
    const fst = req.query.fst
    const snd = req.query.snd
    const opp = req.query.opp
    res.json({"ans":calculator(fst,snd,opp)})
})
app.listen(3000)