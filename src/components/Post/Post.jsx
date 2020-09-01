import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ id, title, body, user, comments }) => (
  <article className="card">
    <p className="card__id">{id}</p>
    <User {...user} />
    <p className="card__title-text">{title.toUpperCase()}</p>
    <p>{body}</p>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
