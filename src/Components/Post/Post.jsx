import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './PostsStyle.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <div className="post-item">
      <div className="post__title">
        Post:
        {' '}
        {title}
      </div>
      <div className="post__body">
        {body}
      </div>
      <User {...user} />
      <CommentList commentsList={comments} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired),
};

Post.defaultProps = {
  comments: [],
};
