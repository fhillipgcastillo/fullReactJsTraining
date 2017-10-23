import  React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import ContestPreview from './ContestPreview';


class App extends Component {
  state = {
    pageHeader: 'Naming Contest'
  };
  // lifecicle methos
  componentDidMount(){}/*to get data, timers, listeners*/
  componentWillUnmount(){}
  render(){
    return (
      <div className="App ">
        <Header message={this.state.pageHeader}/>
        <div className="contestsPreview">
          {this.props.contests.map( contest =>
            <ContestPreview {...contest} /> 
          )}
        </div>
      </div>
    );
  }
};

export default App;
