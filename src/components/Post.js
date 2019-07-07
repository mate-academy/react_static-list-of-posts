import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ post }) {
  return (
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__text">{post.body}</p>

      <User user={post.user} />

      <CommentList comments={post.comments} />
      <div className="line">
        &nbsp;
      </div>
    </div>

  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  }).isRequired,
};

export default Post;
