import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import { User } from '../User/User';
import { Comment } from '../Comment/Comment';
import { typeUsers, typeComments } from '../../types';

export const Post = ({ post }) => (
  <div className="post">
    <div className="post__wrapper">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__text">{post.body}</p>
      <User user={post.user} />
      {post.comments.map(comment => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(typeComments),
    user: typeUsers.isRequired,
  }).isRequired,
};
