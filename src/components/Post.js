import React from 'react';
import './style/Post.css';

import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

export default function Post({ post }) {
  return (
    <div className="wrapper">
      <h2 className="title">
        {'Title: '}
        {post.title}
      </h2>
      <h3 className="bodyContent">
        {'Content: '}
        {post.body}
      </h3>
      <h3 className="user">
        {<User user={post.user} />}
      </h3>
      <h4 className="comments">
        {<CommentList comments={post.commentsArray} />}
      </h4>
    </div>
  );
}

Post.propTypes = { post: PropTypes.objectOf(PropTypes.any).isRequired };
