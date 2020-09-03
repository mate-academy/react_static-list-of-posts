import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';

function Post({ postId, userId, title, body }) {
  return (
    <div className="post">
      <h2 className="post-header">{title}</h2>
      <p className="post-body">{body}</p>
      <User userId={userId} />
      <CommentList postId={postId} />
    </div>
  );
}

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
