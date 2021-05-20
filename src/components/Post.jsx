import React from 'react';
import { PropTypes } from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';

export function Post({ post }) {
  return (
    <div className="post" key={post.id}>
      <div className="title">{post.title}</div>
      <div className="body">{post.body}</div>
      <User user={post.user} />
      Comments:
      <CommentList comments={post.comments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    user: PropTypes.shape({}).isRequired,
  }).isRequired,
};
