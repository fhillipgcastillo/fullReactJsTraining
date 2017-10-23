import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';

import App from "./component/App";

ReactDom.render(
  <App headerMessage="Hello Read with JSX!" />,
  document.getElementById('root')
)
