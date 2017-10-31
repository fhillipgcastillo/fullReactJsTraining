/* thirt party components and packages*/
import React, {
  Component
} from "react";
import PropTypes from 'prop-types';

/*project components*/
import Header from '../Header';

/* theses are Blog main Components*/
import Preview from './Preview';
import Content from './Content';

/* File Component */
class Blog extends Component {
  state = this.props.initialData;
  componentDidMount(){}
  currentContent() {
    if(this.state.currentBlogId) return <Content />;
    // console.log(Object.keys(this.state));
    return Object.keys(this.state).map( blogId => {
      console.log(blogId);
      let blog=this.state[blogId];
      return <Preview key={blog._id} blog={blog} />
    })
  };
  render(){
    return (
      <div className="blog">
        <Header className="blog-header" message="Welcome to my Blog" />
        { this.currentContent() }
      </div>
    );
  }
};

Blog.propTypes = {
  initialData: PropTypes.object.isRequired
};
/*
  # Blog Model
  Title
  Description
  Thumbnail
  Images
  Short Description
  Category
  Type? =>
    Image post
      Big Presentation Image
    Informative
      Small Image and some text
  CreatedDate
  UserId
  LastModifiedDate
  Tags

*/

export default Blog;
