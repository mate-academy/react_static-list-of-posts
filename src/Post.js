import React from 'react';
import PropTypes from 'prop-types';

import CommentList from './CommentList';
import User from './User';

function Post({ post }) {
  return (
    <div className="info-card">
      <div className="posts-info">
        <div>
          <h2>ID of the post</h2>
          <span>{post.userId}</span>
        </div>
        <div>
          <h2>Title of the post</h2>
          <p>{post.title}</p>
        </div>
        <div>
          <h2>Body of the post</h2>
          <p>{post.body}</p>
        </div>
        <div>
          <h2>Post Number</h2>
          <p>№ {post.id}</p>
        </div>
      </div>
      <User user={post.user} />
      <CommentList comments={post.comments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  }).isRequired,
};

export default Post;
