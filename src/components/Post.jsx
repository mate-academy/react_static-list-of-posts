import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostType } from '../types';

export const Post = ({ id, body, title, author, comments }) => (
  <div className="App__post-body">
    <div className="App__post-header">
      <h2 className="App__title">
        Post
        {' '}
        {id}
        :
        {' '}
        <i>{title}</i>
      </h2>
      <article className="App__article">{body}</article>
      <div>
        <User {...author} />
      </div>
    </div>

    <ul>
      <h4>Comments:</h4>
      <CommentList comments={comments} />
    </ul>
  </div>
);

Post.propTypes = PostType;
