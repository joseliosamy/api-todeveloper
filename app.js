


const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req,res) =>{
    res.json({
        ok: 'rso'
    })
})
app.get('/nlw1',(req,res)=>{
    res.json({
        nlw1: 'oksao'
    })
})

app.listen(PORT, ()=>{
    console.log('escutando na porta: ' + PORT);
})
