import React from 'react';
import { PostPropTypes } from '../../propTypes/PostPropTypes';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';

export function Post({ title, body, user, comments }) {
  return (
    <div className="post">
      <h3 className="post-title">{title}</h3>
      <p className="post-text">{body}</p>
      <User key={user.id} {...user} />
      <CommentList comments={comments} />
    </div>
  );
}

Post.propTypes = PostPropTypes;
