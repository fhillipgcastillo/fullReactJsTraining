import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import App from "./component/App";


ReactDom.render(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);
