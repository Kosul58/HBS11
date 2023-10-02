const express = require('express');
const app = express();
const path = require('path');

app.get('/as',(req,res) => {
    const filePath = path.join(__dirname, '../about.html');
    res.sendFile(filePath)
})

app.listen(2000, () => {
    console.log('App listening on port 2000')
});