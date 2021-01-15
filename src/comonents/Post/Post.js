import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostType } from '../types';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>

    <User {...user} />

    <CommentList comments={comments} />

  </>
);

Post.propTypes = PostType.isRequired;
