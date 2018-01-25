const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, "../client/public" )));
app.use(bodyParser.json());

app.post('/reverse', (req, res) => {
  let word = req
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}` )
});
