import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { User } from '../User';

import './Post.scss';

export const Post = ({
  title,
  user,
  body,
  comments,
}) => (
  <div className="post">
    <h2 className="post__title">
      {title}
    </h2>

    <div className="post__author-info">
      <User {...user} />
    </div>

    <p className="post__text">
      {body}
    </p>

    <div className="post__comments">
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line
  user: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
