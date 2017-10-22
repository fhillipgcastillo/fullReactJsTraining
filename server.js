import express from "express";
import config from "./config";

const server = express();
// "dir", controller
server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.get('/about.html', (req, res) => {
  res.send('the about page');
})

server.listen(config.port, () => {
  console.log('express listening on', config.port);
});
