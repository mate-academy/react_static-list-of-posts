import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => (
  <div className="post">
    <h2 className="title_post">{props.postItem.title}</h2>
    <p>{props.postItem.body}</p>
  </div>
);

Post.propTypes = {
  postItem: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
