const express = require("express");
const getRouter = express();
const data = require("./data.json");

getRouter.get("/data", (req, res) => {
    // res.send(data.map((article) => article));
    res.send(data);
    console.log("Welcom to the App !");
})

module.exports = getRouter;