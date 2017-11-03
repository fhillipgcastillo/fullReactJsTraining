import  React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from "../api";

const pushState = (obj, url) => window.history.pushState(obj, '', url);
const onPopState = handler => {
  window.onpopstate = handler;
};
class App extends Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired
  };
  state = this.props.initialData;
  pageHeader(){
    if(this.state.currentContestId) return this.currentContest().contestName;
    return "Naming Contest";
  };
  // lifecicle methos
  componentDidMount(){
    let self = this;
    onPopState( (e) => {
      self.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  };/*to get data, timers, listeners*/
  componentWillUnmount(){
    onPopState(null);
  };
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    console.log("fetch contest", contestId);
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest._id,
        contests: {
          ...this.state.contests,
          [contest._id]: contest
        }
      });
    });
  };
  fetchContestList = (contestId) => {
    pushState(
      {currentContestId: null},
      `/`
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };
  fetchNames = (namesIds) => {
    if(namesIds.length === 0) return;
    api.fetchNames(namesIds).then( names => {
      this.setState({names})
    })
  };
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  };
  lookupName = (nameId) => {
    if(!this.state.names || !this.state.names[nameId]) {
      return {name:'...we are fetching from db'};
    }
    return this.state.names[nameId];
  };
  addName = (newName, contestId) => {
    api.addName(newName, contestId).then(resp =>
      this.setState({
        contests: {
          ...this.state.contests,
          [resp.updatedContest._id]: resp.updatedContest
        },
        names: {
          ...this.state.names,
          [resp.newName._id]: resp.newName
        }
      })
    )
    .catch(console.error);
  };
  currentContent(){
    if(this.state.currentContestId){
      return <Contest
               contestListClick={this.fetchContestList}
               fetchNames={this.fetchNames}
               lookupName={this.lookupName}
               addName={this.addName}
               {...this.currentContest()} />;
    };
    return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
  };
  render(){
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        { this.currentContent() }
      </div>
    );
  }
};

export default App;
