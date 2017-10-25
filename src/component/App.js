import  React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends Component {
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initialContests || []
  };
  // lifecicle methos
  componentDidMount(){ }/*to get data, timers, listeners*/
  componentWillUnmount(){}
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    })
  };
  currentContent(){
    if(this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
  };
  render(){
    return (
      <div className="App ">
        <Header message={this.state.pageHeader} />
        { this.currentContent() }
      </div>
    );
  }
};

export default App;
