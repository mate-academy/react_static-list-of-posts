import React from 'react';
import { PostShape } from './shapes/PostShape';
import { CommentList } from './CommentList';
import { User } from './User';
import './Post.scss';

export const Post = (props) => {
  const { title, body, user, comments } = props;

  return (
    <div className="post">
      <div className="post__user">
        <User {...user} />
        <p className="post__title">
          {title}
        </p>
        <p>
          {body}
        </p>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};

Post.propTypes = PostShape;
