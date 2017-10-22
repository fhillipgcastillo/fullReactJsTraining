import config from'./config';

// import https from 'https';
// https.get('https://www.lynda.com', res => {
//   console.log("response status: ", res.statusCode);
//   res.on('data', chunk => {
//     console.log(chunk.toString());
//   });
// });

import http from "http";

const server = http.createServer();

server.listen(config.port);
server.on('request', (req, res)=>{
  res.write('hello HTTP\n');
  setTimeout(()=>{
    res.write('I can stream\n');
    res.end();
  });
})
