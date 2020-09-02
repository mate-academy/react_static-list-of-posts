import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, preparedComments }) => (
  <div className="post">
    <p className="post__title">{title}</p>
    <p className="post__descriprion">{body}</p>
    <User {...user} />
    <CommentList comments={preparedComments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  preparedComments: PropTypes.arrayOf(PropTypes.object),
};

Post.defaultProps = {
  user: {},
  preparedComments: [],
};
