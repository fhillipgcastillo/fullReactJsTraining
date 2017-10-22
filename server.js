import express from "express";
import config from "./config";
import apiRouter from "./api";

const server = express();

server.set('view engine', 'ejs');

// "dir", controller
server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express <em>Content!</em>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public')); //middleware
// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   })
// })

server.listen(config.port, () => {
  console.log('express listening on', config.port);
});
