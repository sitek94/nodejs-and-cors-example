const fs = require('fs');
const http = require('http');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World.');
});

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 5000);
