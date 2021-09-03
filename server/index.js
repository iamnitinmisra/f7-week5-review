const express = require("express");
const cors = require("cors");
const ctrl = require("./ctrl/ctrl");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", ctrl.compliments);
app.get("/api/encourage", ctrl.encourage);
app.get("/api/fortune", ctrl.fortunes);
app.post("/api/goals", ctrl.goals);

app.listen(4000, () => console.log("Server running on 4000"));
