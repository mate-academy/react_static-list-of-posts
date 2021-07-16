import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';
import { commentType, userType } from '../type';

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
    <User {...user} />
    <p className="post__body">
      {body}
    </p>
    <div className="post__comments">
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType.isRequired,
  comments: PropTypes.arrayOf(commentType).isRequired,
};
