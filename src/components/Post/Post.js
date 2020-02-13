import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = (props) => {
  const { post: { title, body }, user, comments } = props;

  return (
    <li className="post">
      <h3 className="post__title">{title}</h3>
      <p className="post__text">{body}</p>
      <User user={user} />
      <CommentList comments={comments} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,

  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf.isRequired,
};
