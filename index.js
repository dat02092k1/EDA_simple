const express = require('express');
const {EventEmitter} = require("events");
const EventHandlers = require("./event");
const MyService = require("./service");

const app = express();

const eventEmitter = new EventEmitter();

const eventHandler = new EventHandlers(eventEmitter);
const myService = new MyService(eventEmitter);

eventHandler.registerRouteEventHandlers();

app.get('/start', (req, res) => {
    try {
        myService.accessRoute('start');
        return res.status(200).json({message: 'welcome EDA'});
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({message: 'Internal Server Error'})
    }
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});