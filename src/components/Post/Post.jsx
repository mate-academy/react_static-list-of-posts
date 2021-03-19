import React from 'react';
import './Post.scss';
import { PostType } from '../../types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="list__container">
    <h3>{title}</h3>
    <p>{body}</p>
    <User
      name={user.name}
      email={user.email}
      address={user.address}
    />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType;
