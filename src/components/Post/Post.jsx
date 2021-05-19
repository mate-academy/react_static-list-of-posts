import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { UserType, CommentsType } from '../../types';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <User {...user} />
    <h3 className="post__title">
      {title}
    </h3>
    <p className="post__text">
      {body}
    </p>

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comments: CommentsType.isRequired,
};
