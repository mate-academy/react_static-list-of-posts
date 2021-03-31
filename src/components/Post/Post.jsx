import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';

export const Post = ({
  title,
  body,
  user,
  userComment,
}) => (
  <>
    <div className="post">
      <User {...user} />
      <div className="post__info">
        <p className="post__info-title">
          Theme:
          {' '}
          {title}
        </p>
        <p className="post__info-text">{body}</p>
      </div>
    </div>
    <CommentList comments={userComment} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  userComment: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
