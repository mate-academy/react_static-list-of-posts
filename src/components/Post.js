import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostTypes } from '../types';

export const Post = ({ body, comments, title, user }) => (
  <>
    <p className="posts__item-title">
      {title}
    </p>
    <p className="posts__item-body">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostTypes.isRequired;
