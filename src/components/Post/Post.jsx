import React from 'react';
import PropTypes from 'prop-types';

import { TypeUser, TypeComments } from '../../types';

import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="content__item">
    <u>Post:</u>
    <h3 className="content__title">{title}</h3>
    <p className="content__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};
