// create http server


const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];



app.get("/", (req, res) => {
    const johnkidneys = users[0].kidneys[0];
    console.log(johnkidneys.healthy);
    return res.send(johnkidneys.healthy);    
});


app.listen(3000);