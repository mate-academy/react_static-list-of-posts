import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ title, body, user, comment }) => (
  <>
    <div className="post__title">
      {title}
    </div>
    <div className="post__body">
      {body}
    </div>
    <div className="post__user">
      <User {...user} />
    </div>
    <p className="coomments__title">List of comments</p>
    <div className="post__comment-list">
      <CommentList comments={comment} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
