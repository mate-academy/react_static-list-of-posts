import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import { PostShape, UserShape, CommentShape } from '../shapes';

const Post = ({ post, user, comment }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
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
