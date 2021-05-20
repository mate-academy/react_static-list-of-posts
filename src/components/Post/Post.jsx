import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, ownComments }) => (
  <div className="post">
    <p className="post__title">{title}</p>
    <p className="post__body">{body}</p>
    <User {...user} />
    <CommentList postComments={ownComments} />
  </div>
);

const TypeOwnComments = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  ownComments: TypeOwnComments,
};

Post.defaultProps = {
  ownComments: [],
};
