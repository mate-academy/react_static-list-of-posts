import React from 'react';
import PropTypes from 'prop-types';
import { TypeComment } from './Comment/TypeComment';
import { TypeUser } from './User/TypeUser';

import { User } from './User/User';
import { CommentList } from './Comment/CommentList';

export const Post = ({ post }) => (
  <>
    <p>{post.title}</p>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: TypeUser.isRequired,
    comments: PropTypes.arrayOf(TypeComment.isRequired).isRequired,
  }).isRequired,

};
