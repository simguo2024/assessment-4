const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/currenttime", controller.getTime);
app.get("/api/whattoeat", controller.getDish);
app.post("/api/getmultiplefortune", controller.getMultipleFortunes);

app.listen(4000, () => console.log("Server running on 4000"));
