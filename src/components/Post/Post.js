import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = (props) => {
  const { title, body, user, comments } = props;

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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  comments: PropTypes.arrayOf.isRequired,
};
