import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostType } from './PropTypes';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h1>
      {title}
    </h1>
    <p>
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType.isRequired;
