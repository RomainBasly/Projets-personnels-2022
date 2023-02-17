const express = require('express')
const app = express()
const parkings = require('./parkings.json')
const reservations = require('./reservations.json')

app.use(express.json());

app.get('/parkings', (request, result) => {
    result.status(200).json(parkings)
});

app.get('/parkings/:id/reservations', (request, result) => {
    const id = parseInt(request.params.id)
    const reservation = reservations.filter(reservations => reservations.parkingId === id)
    result.status(200).json(reservation)
});

app.get('/parkings/:id/reservations', (request, result) => {
    const id = parseInt(request.params.id)
    const parking = parkings.find(parking => parking.id === id)
    result.status(200).json(reservations)
})

app.post('/parkings', (request, result) => {
    parkings.push(request.body)
    result.status(200).json(parkings)
})

app.put('/parkings/:id', (request, result) => {
    const id = parseInt(request.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name = request.body.name,
        parking.city = request.body.city,
        parking.type = request.body.type,
        result.status(200).json(parking)
})

app.delete('/parkings/:id', (request, result) => {
    const id = parseInt(request.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking), 1)
    result.status(200).json(parkings)
})

app.listen(8000, () => {
    console.log('Serveur à l\'écoute')
})