import React from 'react';
import PropTypes from 'prop-types';
import { CommentType, PostType, AuthorType } from '../../types';

import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ comments, post, author }) => (
  <div className="post">
    <User {...author} />
    <h2 className="post__title">{post.title}</h2>
    <div className="post__body">{post.body}</div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentType)).isRequired,
  post: PropTypes.shape(PostType).isRequired,
  author: PropTypes.shape(AuthorType).isRequired,
};
