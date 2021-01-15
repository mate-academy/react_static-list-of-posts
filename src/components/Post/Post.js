import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { CommentTypes, UserTypes } from '../../types';

import './Post.scss';

export const Post = ({ body, comments, title, user }) => (
  <div className="posts__item">
    <p className="posts__item-title">
      {title}
    </p>
    <p className="posts__item-body">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
  title: PropTypes.string.isRequired,
  user: UserTypes.isRequired,
};
