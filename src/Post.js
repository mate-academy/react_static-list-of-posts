import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div className="post">
    <div className="post__name">
      <span><b>Post name : </b></span>
      <span>{props.title}</span>
    </div>
    <div className="post__title">
      <span><b>Post title : </b></span>
      <span>{props.body}</span>
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
