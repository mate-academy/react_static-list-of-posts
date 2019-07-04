import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';

function Post({ currentPost }) {
  return (
    <li className="post-list__post">
      <h2 className="post-list__post-title">{currentPost.title}</h2>
      <p className="post-list__post-text">{currentPost.body}</p>

      <User user={currentPost.user} />
      <CommentList comments={currentPost.comments} />
    </li>
  );
}

Post.propTypes = {
  currentPost: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Post;
