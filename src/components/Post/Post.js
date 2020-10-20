import React from 'react';
import { PostShape } from '../../shapes';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <div className="App__list">
    <div className="App__title">
      <h2>
        {title}
      </h2>
      <User {...user} />
    </div>
    <p>
      &nbsp;
      {body}
    </p>
    <p>
      <CommentList comments={comments} />
    </p>
  </div>
);

Post.propTypes = PostShape;
