import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostShape, UserShape, CommentShape } from './shapes';

const Post = ({ post, user, comment }) => (
  <article className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__text">{post.body}</p>
    <User user={user} />
    <CommentList commentList={comment} />
  </article>
);

Post.propTypes = {
  post: PostShape.isRequired,
  user: UserShape.isRequired,
  comment: PropTypes.arrayOf(CommentShape.isRequired).isRequired,
};

export default Post;
