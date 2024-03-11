const express = require("express");
const app = express();
const getUser = require("./get-router.js");
const PORT = 3000;

app.use(express.json());
app.use(getUser);

const myMiddleware = (req, res, next) => {
    
    console.log(Date.now());
    next();
}

app.get("/", (req, res) => {
    res.send("Welcom to the App !")
    console.log("Welcom to the App !");
});



app.post("/users", myMiddleware, (req, res) => {
    console.log(req.body);
    res.end();
})

app.listen(PORT, console.log(`Server running on port ${PORT}`));