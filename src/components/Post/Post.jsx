import React from 'react';
import { postShape } from '../../types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ post }) => (
  <div className="Post card block">
    <div className="card-content">
      <h2 className="title is-4">{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <User user={post.author} />
      <hr />
      <CommentList comments={post.comments} />
    </div>
  </div>
);

Post.propTypes = {
  post: postShape.isRequired,
};
