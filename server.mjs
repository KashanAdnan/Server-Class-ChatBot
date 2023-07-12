import express from "express"
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hi , I am Kashan Adnan. Server is Running !")
})

app.get("/:name", (req, res) => {
    res.send(`<h1>You Are ${req.params.name} !</h1>`)
})


app.listen(port, () => {
    console.log(`Server listening on Port : ${port}`)
})