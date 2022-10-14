const express = require('express');

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

module.exports = server;