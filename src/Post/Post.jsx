import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { UserType, CommentType } from '../Types';

import './Post.scss';

export const Post = ({ post }) => (
  <article className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__text">{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: UserType.isRequired,
    comments: CommentType.isRequired,
  }),
};

Post.defaultProps = {
  post: [],
};
