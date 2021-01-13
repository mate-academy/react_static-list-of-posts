import React from 'react';
import PropTypes from 'prop-types';

import { TypeUser, TypeComment } from '../../types';

import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comment }) => (
  <div className="content__item">
    <h3 className="content__title">{title}</h3>
    <p className="content__text">{body}</p>
    <User {...user} />
    <CommentList comment={comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comment: TypeComment.isRequired,
};
