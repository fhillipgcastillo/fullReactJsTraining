import  React, { Component } from "react";
import PropTypes from 'prop-types';

class Preview extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    readMoreHandler: PropTypes.func
  };
  readMoreHandler(){
    this.props.readMoreHandler && this.props.readMoreHandler(this.blog._id);
  };
  render(){
    let blog = this.props.blog;
    return (
      <div className="blog-preview">
        <div className="b-header">
          <h2 className="b-title link" onClick={this.readMoreHandler}>{blog.Title}</h2>
          <div className="b-date">{blog.Date}</div>
        </div>
        <div className="b-description">
          <div className="b-thumbnail link">
          </div>
          <div className="b-short-description" onClick={this.readMoreHandler}>
            <p>{blog.ShortDescription}</p>
            <p className="b-read-more link" onClick={this.readMoreHandler}>Read More</p>
          </div>
        </div>
        <div className="footer">
          <div>User Information</div>
          <div>Tags</div>
        </div>
      </div>
    )
  }
};

export default Preview;
