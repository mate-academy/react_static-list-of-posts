import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostType } from '../../types';
import './Post.scss';

export function Post({ post }) {
  const { user, comments, title, body} = post;

  return (
    <div className="post">
      <h2>Post name: {title}</h2>
      <p>{body}</p>
      <User user={user}/>
      <CommentList comments={comments}/>
    </div>
  )
};

Post.propTypes = PostType.isRequired;
