const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('dotenv').config();
require('./config/db.js');
const Event = require('./models/Event.js');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, "../client/dist")))


// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE //

// START ROUTES //

// get the events


app.get("/events", async (req, res) => {
    let arrayOfEvents = await Event.find();
    res.send(arrayOfEvents);
});

app.post("/events/employees", async (req, res) => {
    let arrayOfEmployees = await Employee.find();
    res.send(arrayOfEmployee);
});



app.delete("/events/:idOfEvent", async (req, res) => {
    // .findByIdAndDelete()
    let id = req.params.idOfEvent;
    let response = await Event.findByIdAndDelete(id);
    console.log(response);
    res.send('deleted event!')
});

app.put('/events/:idOfEvent', async (req, res) => {
    let id = req.params.idOfEvent;
    let response = await Event.findByIdAndUpdate(id,  req.body, { new: true } );
    console.log(response);
    res.send(response)
});


app.post("/events", async (req, res) => {
    // 1. get the data that was sent from the frontend
    // let eventData = req.body.eventData;

    // 2. Model.create(eventData)

    try {
        let response = await Event.create(req.body);
        res.status(201).send(response)
    } catch (err) {
        console.error(err)
        res.send("ERROR")
    }
    
});


// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});

