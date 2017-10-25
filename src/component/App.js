import  React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import ContestPreview from './ContestPreview';
// import data from '../testData';


class App extends Component {
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initialContests || []
  };
  // lifecicle methos
  componentDidMount(){
    // this.setState({
    //   contests: data.contests
    // });
    // axios.get('./api/contests')
    //   .then(res => {
    //     this.setState({
    //       contests: res.data.contests
    //     })
    //   })
    //   .catch(console.error);

  }/*to get data, timers, listeners*/
  componentWillUnmount(){}
  render(){
    return (
      <div className="App ">
        <Header message={this.state.pageHeader}/>
        <div className="contestsPreview">
          {this.state.contests.map( contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
};

export default App;
