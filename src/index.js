import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import App from "./component/App";
import axios from 'axios';


axios.get('./api/contests')
  .then(res => {
    ReactDom.render(
      <App initialContests={res.data.contests} />,
      document.getElementById('root')
    )
  })
  .catch(console.error);
