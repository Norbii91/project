// Szükséges modulok betöltése
const mysql = require('mysql2');
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


const bodyParser = require('body-parser');


const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost',
  port:'3307',
  user: 'admin',
  password: 'admin',
  database: 'planner'
});

connection.connect();




app.post('/api/insert', (req, res) => {
    const data = req.body;
    console.log(data.uid)
    const sql = `INSERT INTO plans(PLANNAME, DATE, DESCRIPTION, UID) VALUES ("${data.name}","${data.date}","${data.description}","${data.uid}")`;
    connection.query(sql, [data.name,data.date,data.description,data.uid], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error inserting data' });
      } else {
        res.json({ success: true, message: 'Data inserted successfully' });
      }
    });
});


const PORT = 9000

console.log(`WEB -es kiszolgáló indítása a ${PORT} -porton`)

app.listen(PORT)



