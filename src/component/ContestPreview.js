import React from 'react';
import PropTypes from 'prop-types';


class ContestPreview extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick = function() {
    console.log("contest clicked", this.props.onClick);
    this.props.onClick(this.props._id);
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
  _id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContestPreview;
