import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="App__post-title">
      {title}
    </h2>
    <p className="App__post-body">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
