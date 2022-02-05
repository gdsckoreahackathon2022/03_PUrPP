const express = require('express');
const app = express();

const PORT = 3000;
const path = require('path');

function handleListen() {
    console.log("Listen on 3000 Port")
}

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));

function handleHome(req, res) {
    console.log('Home');
    res.render('index.html')
}

app.get('/', handleHome);

app.listen(PORT, handleListen);