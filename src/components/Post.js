import React from 'react';
import { CommentList } from './CommentList';
import { User } from './User';
import { PostPropTypes } from './PropsTypes';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostPropTypes;
