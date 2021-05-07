import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ comments, post, user }) {
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <span>{post.body}</span>
      <User user={user} />
      <CommentList comments={comments} />
    </div>
  );
}

Post.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};

export default Post;
