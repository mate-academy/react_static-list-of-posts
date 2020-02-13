import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
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

Post.defaultProps = {
  user: {},
  comments: {},
  title: '',
  body: '',
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  user: PropTypes.shape(),
  comments: PropTypes.shape(),
  title: PropTypes.string,
  body: PropTypes.string,
};
