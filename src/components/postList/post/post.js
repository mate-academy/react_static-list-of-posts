import React from 'react';
import PropTypes from 'prop-types';
import User from '../../user/user';
import CommentList from '../../commentList/commentList';

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <User user={post.user} />
      <CommentList comments={post.comments} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};

export default Post;
