import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostType } from '../../types';

export const Post = ({ title, body, user, comment }) => (
  <div className="post">
    <h2 className="post__title">
      {title}
    </h2>
    <p className="post__body">
      {body}
    </p>

    <User {...user} />

    <CommentList comments={comment} />

  </div>
);

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostType).isRequired,
  ),
};

Post.defaultProps = {
  posts: [],
};
