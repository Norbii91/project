// Szükséges modulok betöltése

const express = require('express')
const Service = require('./service')

/**
 * Indító modul.
 */

console.log('Rendszer indítás')

const app = express()

app.use(express.static('./www'))
app.use(express.json())


app.post('/api', async (request, response) => {
    if (request.body.action && request.body.action === 'login') {
        const name = await Service.login(request.body.uid, request.body.password)

        response.send(JSON.stringify({ name: name }))
        
    } else if (request.body.action && request.body.action === 'loadplans') {
        const plans = await Service.loadPlans()
        response.send(JSON.stringify(plans))

    }
})



const PORT = 9000

console.log(`WEB -es kiszolgáló indítása a ${PORT} -porton`)

app.listen(PORT)
