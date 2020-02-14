import React from 'react';
import PropTypes from 'prop-types';
import { User, UserPropTypes } from '../User/User';
import { CommentList, CommentListPropTypes } from '../CommentList/CommentList';
import './Post.css';

export const Post = ({ post }) => {
  const { user, comments, title, body } = post;

  return (
    <div className="post">
      <User {...user} />

      <div className="post-body">
        <p className="post-title">{title}</p>
        <p className="post-desctiption">{body}</p>
      </div>

      <div className="post-comments">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape(UserPropTypes),
    comments: PropTypes.arrayOf(
      PropTypes.shape(CommentListPropTypes),
    ).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
