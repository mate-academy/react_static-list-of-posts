/* eslint-disable react/prop-types */
import React from 'react';

const Post = props => (
  <div className="posts-block__post">
    <h1 className="post__title">
      {props.postTitle}
    </h1>
    <p className="post__text">
      {props.postBody}
    </p>
  </div>
);

export default Post;
