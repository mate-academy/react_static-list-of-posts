import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';
import { PostShape } from '../shapes/PostShape';

export const Post = ({ post }) => (
  <div className="post">
    <div className="post__info">
      <p className="post__title">{post.title}</p>
      <p className="post__description">{post.body}</p>
      <User
        name={post.user.name}
        email={post.user.email}
        address={post.user.address}
      />
    </div>
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PostShape.isRequired,
};
