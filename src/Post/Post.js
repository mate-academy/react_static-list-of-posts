import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { postShape, commentShape, userShape } from '../shapes';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

const Post = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__text">{post.body}</p>
    <User {...post.user} />
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = PropTypes.arrayOf(
  postShape,
  commentShape,
  userShape,
).isRequired;

export { Post };
