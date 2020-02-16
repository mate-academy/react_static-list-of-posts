import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ post }) => {
  const { user, title, body, commentsList } = post;

  return (
    <div className="post">
      <div className="post__autor">
        <User user={user} />
      </div>
      <div className="post__body">
        <h2 className="post__title">
          {title}
        </h2>
        <p className="post__text">
          {body}
        </p>
      </div>
      <div className="post__comment-list">
        <CommentList commentsList={commentsList} />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    commentsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
