import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ post }) => (
  <>
    <User user={post.user} />
    <div className="post">
      <div className="post__title">{post.title}</div>
      <div className="post__body">{post.body}</div>
    </div>
    <div className="post__comments">Comments &gt;&gt;</div>
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};
