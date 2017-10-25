import React from 'react';
import PropTypes from 'prop-types';


class ContestPreview extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.handleClick = props.handleClick;
  // };
  handleClick = () => {
    console.log(this.props.contestName)
  };
  render(){
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <div className="contest-name">
          {this.props.contestName}
        </div>
      </div>
    )
  }
};

ContestPreview.propTypes = {
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired
};

export default ContestPreview;
