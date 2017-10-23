import express from "express";
import config from "./config";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from 'path';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

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
