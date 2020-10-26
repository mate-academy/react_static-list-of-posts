import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { PostShape } from '../shapes/PostShape';

import './Post.scss';

export const Post = (props) => {
  const { title, body, user, comments } = props;

  return (
    <div className="post">
      <div className="post__user user">
        <User {...user} />
      </div>
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      <div className="post__comment comment">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

Post.propTypes = PostShape;
