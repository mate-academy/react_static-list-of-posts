import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post, users, comments }) => (
  <article className="post__item">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__text">{post.body}</p>
    <User post={post} users={users} />
    <CommentList post={post} comments={comments} />
  </article>
);

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
  users: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
};

Post.defaultProps = {
  post: {},
  users: [{}],
  comments: [{}],
};

export default Post;
