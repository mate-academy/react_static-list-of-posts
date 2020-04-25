import React from 'react';
import PropTypes from 'prop-types';
import User from '../../user/user';
import CommentList from '../../commentList/commentList';

function Post({ thisPostComments, users, post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <User userId={post.userId} users={users} />
      <CommentList thisPostComments={thisPostComments} users={users} />
    </>
  );
}

Post.propTypes = {
  thisPostComments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
