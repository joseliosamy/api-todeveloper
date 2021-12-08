

const express = require("express");
const cors = require('cors');
const app = express();

const port = 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.get('/', (req, res) => {
    res.json({
        ok: 'vamos'
    })
})

app.get('/nlw', (req, res) => {
    res.json({
        ok: 'isso ai'
    })
})


app.listen(port, () => {
    console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
