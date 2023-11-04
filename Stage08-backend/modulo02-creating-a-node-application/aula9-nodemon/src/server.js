const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


//route params
app.get('/message/:id/:user', (req, res) => {
    const { id, user} = req.params

    res.send(`
    Mensagem ID: ${id}.
    Para o usuario: ${user}
    `)
})

//query params
app.get('/users', (req, res) =>{
    const { page, limit} = req.query

    res.send(`Pagina: ${page}. Limit: ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`listening on ${PORT}`))