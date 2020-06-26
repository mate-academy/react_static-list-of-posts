import React from 'react';
import PropTypes from 'prop-types';
import { ShapePost, ShapeComment, ShapeUser } from '../Shapes';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User {...post.user} />
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = PropTypes.arrayOf(
  ShapePost,
  ShapeComment,
  ShapeUser,
).isRequired;

export { Post };
