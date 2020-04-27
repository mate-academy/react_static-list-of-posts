import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import User from './User';

const Post = ({ post }) => (
  <div className="post__item">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <User {...post.user} />
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.objectOf.isRequired,
};

export default Post;
