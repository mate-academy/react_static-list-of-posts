import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User';

export const Post = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        suite: PropTypes.string,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        postId: PropTypes.number,
        id: PropTypes.number,
        name: PropTypes.string,
        body: PropTypes.string,
        email: PropTypes.string,
      }).isRequired,
    ),
  }).isRequired,
};
