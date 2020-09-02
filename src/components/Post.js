import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import User from './User';

const Post = ({ post }) => (
  <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};

export default Post;
