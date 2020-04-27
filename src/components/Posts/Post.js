import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../Comments/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <h2 className="post__title">
      {title[0].toUpperCase() + title.slice(1)}
    </h2>
    <i className="post__body">
      {body}
    </i>
    <User {...user} />
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({}).isRequired,
  }).isRequired,
};

Post.defaultProps = {
  comments: [],
};
