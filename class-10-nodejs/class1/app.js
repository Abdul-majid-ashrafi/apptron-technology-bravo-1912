const express = require('express');
const app = express();
const port = 5000;

app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>")
})
app.get("/greeting", (request, response) => {
    response.send("Hello Majid")
})
app.get("/completeName", (request, response) => {
    response.send("Majid Ashraf")
})

app.listen(port, () => console.log("server is running localhost:" + port))

