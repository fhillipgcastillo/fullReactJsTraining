import express from "express";
import config from "./config";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from 'path';
import bodyParser from "body-parser";


const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

// import serverRender from './serverRender';
import {
  serverRender,
   blogRender
 } from './serverRender';

server.get(['/blog', '/blog/:blogId'], (req, res) => {
 blogRender(req.params.blogId)
   .then( ({initialMarkUp, initialData}) => {
     console.log("hello blog render then");
     res.render('blog', {initialMarkUp, initialData});
   })
   .then( blogs => {
     res.render('blog', {blogs});
   });
});


server.get(['/', '/contest/:contestId'], (req, res) => {
serverRender(req.params.contestId)
  .then(({initialMarkUp, initialData}) => {
    res.render('index', {
      initialMarkUp,
      initialData
    });
  })
  .then( content => {
      res.render('index', {
        content
      });
    })
  .catch(err => {
    res.status(404).send("Bad Request")
  });
});


server.use('/api', apiRouter);
server.use(express.static('public')); //middleware

server.listen(config.port, config.host, () => {
  console.log('express listening on', config.port);
});
