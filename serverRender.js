// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/component/App'

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
      currentContestId: apiData.id,
      contests: {
        [apiData.id]: apiData
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
      console.log(initialData);
      console.log(getApiUrl(contestId));
      return {
        initialMarkUp: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData: initialData
      };
    });
    // .catch(console.error);

export default serverRender;
