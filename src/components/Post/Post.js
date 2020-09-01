import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './post.css';

export const Post = ({ post, user, commentsList }) => (
  <article className="post">
    <User user={user} />
    <div>
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>
      <CommentList commentsList={commentsList} />
    </div>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
  commentsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
