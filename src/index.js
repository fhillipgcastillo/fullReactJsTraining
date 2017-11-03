import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import App from "./component/App";
import Blog from "./component/Blog/";

function finalComponent(initialData){
  if(initialDat) return <App initialData={initialData} />;
  return <Blog />
};
//
// ReactDom.render(
//   finalComponent(window.initialData),
//   document.getElementById('root')
// );
