import  React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from "../api";

const pushState = (obj, url) => window.history.pushState(obj, '', url);

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
  componentDidMount(){ }/*to get data, timers, listeners*/
  componentWillUnmount(){}
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });

  };
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  };
  currentContent(){
    if(this.state.currentContestId){
      return <Contest {...this.currentContest()} />;
    }
    return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
  };
  render(){
    return (
      <div className="App ">
        <Header message={this.pageHeader()} />
        { this.currentContent() }
      </div>
    );
  }
};

export default App;
