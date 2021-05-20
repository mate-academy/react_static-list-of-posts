import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
// eslint-disable-next-line import/no-cycle
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="Post">
    <h1>{title}</h1>
    {body}

    <h2>Author:</h2>
    <User {...user} />

    <h3>Comments:</h3>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  comments: PropTypes.arrayOf().isRequired,
};
