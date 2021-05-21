import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, userByPost, commentsByPost }) => (
  <div className="post-info">
    <h2 className="post-info__title">{title}</h2>
    <div className="post-info__text">{body}</div>
    <User {...userByPost} />
    <CommentList list={commentsByPost} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userByPost: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  commentsByPost: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
  })).isRequired,
};
