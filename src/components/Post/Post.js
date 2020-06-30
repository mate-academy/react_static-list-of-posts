import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostShape } from '../Shape';

export const Post = ({ title, user, body, comments }) => (
  <div>
    <h1>
      {title}
    </h1>
    <p>
      <User {...user} />
    </p>
    <p>
      {body}
    </p>
    <ol>
      <CommentList commentList={comments} />
    </ol>
  </div>
);

Post.propTypes = PostShape.isRequired;
