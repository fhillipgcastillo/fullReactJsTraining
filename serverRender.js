// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/component/App'

import axios from 'axios';
import config from './config';

console.log(`${config.serverUrl}/api/contests`);

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      // console.log("serverRender", resp.data);
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    });
    // .catch(console.error);

export default serverRender;
