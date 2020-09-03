import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({ title, body, commentInPost, user }) => (
  <>
    <div className="post">
      <span className="post__title">{title}</span>
      <p className="post__text">{body}</p>
      <div className="post__author">
        <User {...user} />
      </div>
      <CommentList commentInPost={commentInPost} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentInPost: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  user: PropTypes.shape().isRequired,
};
