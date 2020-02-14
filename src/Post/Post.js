import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ post }) => (
  <div className="post">
    <div className="user">
      <User user={post.user} />
      {post.id}
    </div>
    <div className="post__body">
      <h2 className="post__title">
        {post.title}
      </h2>
      <p className="post__text">
        {post.body}
      </p>
    </div>
    <CommentList commentsList={post.comment} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
