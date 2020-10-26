import React from 'react';
import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostShape } from '../propTypes/post';

export const Post = (post) => {
  const { title, body, users, comments } = post;

  return (
    <li className="post">
      <h2 className="post__heading">Post</h2>
      <h4 className="post__title">
        {title}
      </h4>
      <p className="post__body">
        {body}
      </p>
      <User {...users} />
      <CommentList comments={comments} />
    </li>
  );
};

Post.propTypes = PostShape;
