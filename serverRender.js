// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/component/App'
import Blog from "./src/component/Blog";

import axios from 'axios';
import config from './config';

// console.log(`${config.serverUrl}/api/contests`);
const getApiUrl = contestId => {
  if(contestId) return `${config.serverUrl}/api/contests/${contestId}`;
  return `${config.serverUrl}/api/contests`
};
const getInitialData = (contestId, apiData) =>{
  if(contestId) {
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    }
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkUp: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData: initialData
      };
    });
    // .catch(console.error);

const getBlogUrl = (blogId) => {console.log(blogId)
  return  `${config.serverUrl}/api/blogs` + (blogId ? `/${blogId}` : "");
};

const blogRender =  (blogId) =>
  axios.get(getBlogUrl(blogId))
    .then( res => {
      return {
        initialMarkUp: ReactDOMServer.renderToString(
          <Blog initialData={res.data.blogs || {}} />
        )
        // initialData: res.data.blogs
      };
    });
    // .catch( console.error);

export {
  serverRender,
  blogRender
};
// export blogRender;
