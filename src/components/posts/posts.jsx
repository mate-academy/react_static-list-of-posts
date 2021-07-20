import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../commentList/commentList';
import { User } from '../user/user';

export const Post = ({ post }) => (
  <>
    <h2 className="title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
