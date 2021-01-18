import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostShape } from '../../types';

export const Post = ({ user, title, body, comments }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostShape.isRequired;
