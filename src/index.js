import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import App from "./component/App";
import data from './testData'

ReactDom.render(
  <App headerMessage="Hello Read with JSX!" contests={data.contests} />,
  document.getElementById('root')
)
