import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, preparedComments }) => (
  <article className="Post">
    <h2 className="Post__title">
      {title}
    </h2>

    <User {...user} />

    <p className="Post__body">
      {body}
    </p>

    <CommentList preparedComments={preparedComments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape.isRequired,
  preparedComments: PropTypes.shape.isRequired,
};
