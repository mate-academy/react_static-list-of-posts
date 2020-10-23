import React from 'react';
import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { postPropType } from '../propTypes/post';

export const Post = (post) => {
  const { title, body, users, comments } = post;

  return (
    <div className="post">
      <h2 className="post__heading">Post</h2>
      <h4>
        {title}
      </h4>
      <p>
        {body}
      </p>
      <User {...users} />
      <CommentList comment={comments} />
    </div>
  );
};

Post.propTypes = postPropType;
