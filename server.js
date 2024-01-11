const express = require('express');
const app = express();
const port = 4131;

app.set("views", "templates");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    let freq = await fetch("https://api.frankfurter.app/currencies");
    let json = await freq.json();
    let symbols = Object.keys(json);
    res.status(200);
    res.header("Content-Type", "text/html; charset=utf-8");
    res.render("main.pug", {symbols});
})

app.get('/main.css', (req, res) => {
    res.status(200);
    res.header("Content-Type", "text/css; charset=utf-8");
    res.sendFile("/resources/css/main.css", {root: '.'});
})

app.get('/main.js', (req, res) => {
    res.status(200);
    res.header("Content-Type", "text/javascript; charset=utf-8");
    res.sendFile("/resources/js/main.js", {root: '.'});
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})