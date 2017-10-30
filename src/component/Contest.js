import React from "react";
import PropTypes from 'prop-types';

class Contest extends React.Component {
  self = this;
  constructor(props){
    super(props);
    this.state = {
      valueName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  };
  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  };
  handleSubmit(event) {
    event.preventDefault();
    this.props.addName(this.refs.newNameInput.value, this.props._id);
    this.refs.newNameInput.value = '';
  };
  onChange(event){
    event.preventDefault();
    console.log(arguments);
  };
  render(){
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">
                  {this.props.lookupName(nameId).name}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
              <input type="text"
                 placeholder="New Name Here..."
                 ref="newNameInput"
                 className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">
                     Sumbit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="home-link link"
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    )
  };
};

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  fetchNames: PropTypes.func.isRequired,
  nameIds: PropTypes.array.isRequired,
  contestListClick: PropTypes.func.isRequired,
  lookupName: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired
};

export default Contest;
