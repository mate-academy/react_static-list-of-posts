import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.css';

export const Post = ({ title, body, author, comments }) => (
  <li className="posts__item">
    <h2 className="posts__item-title">{title}</h2>
    <p className="posts__item-body">{body}</p>
    <User {...author} />
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
