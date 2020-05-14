import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ post }) => (
  <li className="post__item">
    <p className="post__item-title">{post.title}</p>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList cList={post.commentList} />
  </li>
);

Post.propTypes = PropTypes.arrayOf({}).isRequired;
