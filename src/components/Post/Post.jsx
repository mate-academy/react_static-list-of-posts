import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { TypePost } from '../../types';
import './Post.scss';

const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{body}</p>
      <User user={user} />
      <CommentList comments={comments} />
    </div>
  );
};

Post.propTypes = {
  post: TypePost.isRequired,
};

export { Post };
