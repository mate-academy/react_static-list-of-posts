import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostType } from '../../types';

export const Post = ({ post }) => (
  <>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PostType.isRequired,
};
