import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ post }) {
  return (
    <div className="post">
      <h2 className="post_title">{post.title}</h2>
      <p className="post_text">{post.body}</p>
      <User user={post.user} />
      <h4>Comments</h4>
      <CommentList comments={post.comments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Post;
