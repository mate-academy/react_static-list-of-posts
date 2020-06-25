import React from 'react';

import { PostShape } from '../shapes';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

const Post = ({ title, body, comments, user }) => (
  <div className="post">
    <User {...user} />
    <div className="post__body">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__text">
        {body}
      </p>
    </div>
    <CommentList comments={comments} />
  </div>
);

export { Post };

Post.propTypes = PostShape;
